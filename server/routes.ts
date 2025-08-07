import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { insertContactSchema, insertEnrollmentSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // 📩 Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
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
