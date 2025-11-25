import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

import { storage } from "./storage";
import { sendContactEmail, sendSubscriptionEmail } from "./email";
import { insertContactSchema, insertEnrollmentSchema, insertSubscriberSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // 🛡️ Rate Limiting: IP -> { count, date }
  const rateLimit = new Map<string, { count: number; date: string }>();

  // 📩 Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const ip = req.ip || "unknown";
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

      const record = rateLimit.get(ip);

      if (record && record.date === today) {
        if (record.count >= 2) {
          return res.status(429).json({
            success: false,
            error: "Rate limit exceeded. You can only submit 2 requests per day.",
          });
        }
        record.count++;
      } else {
        rateLimit.set(ip, { count: 1, date: today });
      }

      // Cleanup old entries (optional optimization)
      if (rateLimit.size > 1000) {
        rateLimit.forEach((val, key) => {
          if (val.date !== today) rateLimit.delete(key);
        });
      }

      const validatedData = insertContactSchema.parse(req.body);

      // Save to DB
      const contact = await storage.createContact(validatedData);

      // Send Email
      await sendContactEmail(validatedData);

      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: "Invalid form data",
          details: error.errors,
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          error: "Failed to submit contact form",
        });
      }
    }
  });

  // 📝 Enrollment form submission
  app.post("/api/enroll", async (req, res) => {
    try {
      const validatedData = insertEnrollmentSchema.parse(req.body);
      const enrollment = await storage.createEnrollment(validatedData);
      res.json({ success: true, enrollment });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: "Invalid enrollment data",
          details: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          error: "Failed to submit enrollment",
        });
      }
    }
  });

  // 📧 Newsletter Subscription
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertSubscriberSchema.parse(req.body);

      // Save to DB
      const subscriber = await storage.createSubscriber(validatedData);

      console.log("Attempting to send welcome email to:", validatedData.email);

      // Send Welcome Email
      await sendSubscriptionEmail(validatedData.email);

      res.json({ success: true, subscriber });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: "Invalid email address",
          details: error.errors,
        });
      } else {
        // Check for unique constraint violation (if using real DB, but MemStorage doesn't enforce it strictly unless we check)
        // For MemStorage, we can just proceed or check manually.
        // Since MemStorage uses Map with UUID keys, duplicates won't throw unless we check.
        // But for user experience, we can just say success even if already subscribed.
        console.error("Subscription error:", error);
        res.status(500).json({
          success: false,
          error: "Failed to subscribe",
        });
      }
    }
  });

  // 📥 Admin: Get all contacts
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // 📥 Admin: Get all enrollments
  app.get("/api/enrollments", async (req, res) => {
    try {
      const enrollments = await storage.getEnrollments();
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch enrollments" });
    }
  });

  // 🧠 Start HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
