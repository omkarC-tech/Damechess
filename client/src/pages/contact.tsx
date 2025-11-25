import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    const { toast } = useToast();
    const form = useForm<InsertContact>({
        resolver: zodResolver(insertContactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: InsertContact) => {
            const res = await apiRequest("POST", "/api/contact", data);
            return res.json();
        },
        onSuccess: () => {
            toast({
                title: "Message Sent!",
                description: "We'll get back to you as soon as possible.",
            });
            form.reset();
        },
        onError: (error: any) => {
            toast({
                title: "Error",
                description: error.message || "Failed to send message. Please try again.",
                variant: "destructive",
            });
        },
    });

    const onSubmit = (data: InsertContact) => {
        mutation.mutate(data);
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navigation />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-dame-dark mb-4">
                            Get in <span className="text-dame-orange">Touch</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have questions about our courses? Want to schedule a demo? We'd love to hear from you!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
                                <h3 className="text-2xl font-bold text-dame-dark mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-dame-orange shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dame-dark">Our Location</h4>
                                            <p className="text-gray-600">Pune, Maharashtra, India</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-dame-orange shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dame-dark">Phone Number</h4>
                                            <a href="tel:+919821679475" className="text-gray-600 hover:text-dame-orange transition-colors">
                                                +91 98216 79475
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-dame-orange shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dame-dark">Email Address</h4>
                                            <a href="mailto:contact@technewity.com" className="text-gray-600 hover:text-dame-orange transition-colors">
                                                contact@technewity.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-dame-dark rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                                    <p className="text-gray-300 mb-6">
                                        Join thousands of students mastering chess with DameChess Academy.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-300 mb-0">
                                        <li className="flex items-center gap-2">✓ Free Demo Class</li>
                                        <li className="flex items-center gap-2">✓ Expert Coaches</li>
                                        <li className="flex items-center gap-2">✓ Flexible Schedule</li>
                                    </ul>
                                </div>
                                {/* Decorative circle */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dame-orange rounded-full opacity-20 blur-3xl"></div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="border-gray-100 shadow-xl rounded-3xl overflow-hidden">
                                <CardContent className="p-8">
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Full Name</label>
                                                <Input
                                                    {...form.register("name")}
                                                    placeholder="John Doe"
                                                    className="h-12 rounded-xl border-gray-200 focus:border-dame-orange focus:ring-dame-orange"
                                                />
                                                {form.formState.errors.name && (
                                                    <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                                <Input
                                                    {...form.register("phone")}
                                                    placeholder="+91 98765 43210"
                                                    className="h-12 rounded-xl border-gray-200 focus:border-dame-orange focus:ring-dame-orange"
                                                />
                                                {form.formState.errors.phone && (
                                                    <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                                            <Input
                                                {...form.register("email")}
                                                type="email"
                                                placeholder="john@example.com"
                                                className="h-12 rounded-xl border-gray-200 focus:border-dame-orange focus:ring-dame-orange"
                                            />
                                            {form.formState.errors.email && (
                                                <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Subject</label>
                                            <Input
                                                {...form.register("subject")}
                                                placeholder="I want to schedule a demo..."
                                                className="h-12 rounded-xl border-gray-200 focus:border-dame-orange focus:ring-dame-orange"
                                            />
                                            {form.formState.errors.subject && (
                                                <p className="text-red-500 text-xs">{form.formState.errors.subject.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Message</label>
                                            <Textarea
                                                {...form.register("message")}
                                                placeholder="Tell us more about your requirements..."
                                                className="min-h-[150px] rounded-xl border-gray-200 focus:border-dame-orange focus:ring-dame-orange resize-none"
                                            />
                                            {form.formState.errors.message && (
                                                <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>
                                            )}
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={mutation.isPending}
                                            className="w-full h-12 bg-dame-orange hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-200 transition-all"
                                        >
                                            {mutation.isPending ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-4 w-4" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
