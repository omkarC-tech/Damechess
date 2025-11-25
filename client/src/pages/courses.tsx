import React, { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Timeline } from "@/components/ui/timeline";
import { FaChessPawn, FaChessKnight, FaChessRook } from "react-icons/fa";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";

const Courses: React.FC = () => {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");
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
            await apiRequest("POST", "/api/contact", data);
        },
        onSuccess: () => {
            toast({
                title: "Enrollment Request Sent!",
                description: "We'll get back to you shortly to finalize your enrollment.",
            });
            setIsEnrollOpen(false);
            form.reset();
        },
        onError: (error) => {
            toast({
                title: "Error",
                description: error.message || "Failed to send request. Please try again.",
                variant: "destructive",
            });
        },
    });

    const handleEnrollClick = (courseName: string) => {
        setSelectedCourse(courseName);
        form.setValue("subject", `Enrollment Request: ${courseName}`);
        form.setValue("message", `I am interested in enrolling in the ${courseName} course.`);
        setIsEnrollOpen(true);
    };

    const onSubmit = (data: InsertContact) => {
        mutation.mutate(data);
    };

    const timelineData = [
        {
            title: <ShinyText text="Beginner" disabled={false} speed={3} className="font-extrabold" />,
            content: (
                <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 247, 237, 1)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 group"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                            <FaChessPawn className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl transition-colors font-semibold hover:font-bold transition-all duration-300 text-dame-dark group-hover:text-dame-orange">
                                Beginner Course
                            </h3>
                            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">5-15 Years</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        Join our 6-month journey into the realm of chess with our beginner's course, specially designed to ignite young minds, fostering a love for the game while transforming them into skilled individuals.
                    </p>

                    <div className="mb-8 rounded-xl overflow-hidden h-64 shadow-md">
                        <img
                            src="/course-beginner.png"
                            alt="Beginner Chess"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <Button
                        onClick={() => handleEnrollClick('Beginner Course')}
                        className="w-full md:w-auto bg-dame-orange hover:bg-orange-600 text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Enroll Now
                    </Button>
                </motion.div>
            ),
        },
        {
            title: <ShinyText text="Intermediate" disabled={false} speed={3} className="font-extrabold" />,
            content: (
                <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 247, 237, 1)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 group"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                            <FaChessKnight className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl transition-colors font-semibold hover:font-bold transition-all duration-300 text-dame-dark group-hover:text-dame-orange">
                                Intermediate Course
                            </h3>
                            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">5-15 Years</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        Elevate your chess knowledge to tournament-ready levels with our 8-month intermediate course, meticulously crafted to hone strategic thinking and tactical precision, propelling students to become proficient in life.
                    </p>

                    <div className="mb-8 rounded-xl overflow-hidden h-64 shadow-md">
                        <img
                            src="/course-intermediate.png"
                            alt="Intermediate Chess"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <Button
                        onClick={() => handleEnrollClick('Intermediate Course')}
                        className="w-full md:w-auto bg-dame-orange hover:bg-orange-600 text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Enroll Now
                    </Button>
                </motion.div>
            ),
        },
        {
            title: <ShinyText text="Advanced" disabled={false} speed={3} className="font-extrabold" />,
            content: (
                <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 247, 237, 1)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 group"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                            <FaChessRook className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl transition-colors font-semibold hover:font-bold transition-all duration-300 text-dame-dark group-hover:text-dame-orange">
                                Advanced Course
                            </h3>
                            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">5-15 Years</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        Embark on a lifelong chess mastery journey with our advanced course. We're here to guide and inspire you as you continue your passion for chess making you strong in chess and life.
                    </p>

                    <div className="mb-8 rounded-xl overflow-hidden h-64 shadow-md">
                        <img
                            src="/course-advanced.jpg"
                            alt="Advanced Chess"
                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <Button
                        onClick={() => handleEnrollClick('Advanced Course')}
                        className="w-full md:w-auto bg-dame-orange hover:bg-orange-600 text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Enroll Now
                    </Button>
                </motion.div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-dame-orange selection:text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-10 text-center px-4 bg-gradient-to-b from-orange-50/50 to-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-dame-dark mb-6 tracking-tight">
                        Our <span className="text-dame-orange">Courses</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                        Structured learning paths designed to take you from beginner to master.
                    </p>
                </motion.div>
            </section>

            {/* Timeline Section */}
            <Timeline data={timelineData} />

            <Footer />

            {/* Enrollment Dialog */}
            <Dialog open={isEnrollOpen} onOpenChange={setIsEnrollOpen}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-dame-dark">Enroll in {selectedCourse}</DialogTitle>
                        <DialogDescription>
                            Fill out the form below to start your journey. We'll contact you to confirm your spot.
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+1 234 567 890" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Hidden fields for subject and message as they are pre-filled */}
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem className="hidden">
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="hidden">
                                        <FormControl>
                                            <Textarea {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full bg-dame-orange hover:bg-orange-600 text-white font-bold py-6 text-lg"
                                disabled={mutation.isPending}
                            >
                                {mutation.isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending Request...
                                    </>
                                ) : (
                                    "Submit Enrollment Request"
                                )}
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Courses;
