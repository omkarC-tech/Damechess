import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function TestimonialsSection() {
    const clientTestimonials = [
        {
            quote: "My son went from knowing nothing about chess to winning his school tournament in 8 months! The structured curriculum and progress tracking helped us see his improvement every week.",
            name: "Sneha Gupta",
            designation: "Parent of Arjun, Age 10",
            src: "/priya-sharma.jpg",
        },
        {
            quote: "The video lessons are amazing quality and my daughter's math grades improved by 25% since she started chess. The teachers are very patient and skilled.",
            name: "Raj Patel",
            designation: "Parent of Kavya, Age 12",
            src: "/raj-patel.jpg",
        },
        {
            quote: "We've implemented DameChess in our school and seen remarkable improvements in students' concentration and problem-solving abilities across all subjects.",
            name: "Anita Verma",
            designation: "School Principal",
            src: "/anita-verma.jpg",
        },
        {
            quote: "The platform is incredibly user-friendly and the gamified elements keep my kids engaged for hours. Highly recommended for any parent looking to introduce chess.",
            name: "Vikram Singh",
            designation: "Parent of Rohan, Age 8",
            src: "/vikram-singh.jpg",
        },
        {
            quote: "DameChess has been a game-changer for our chess club. The resources and support are top-notch, making it easy to manage and track student progress.",
            name: "Priya Sharma",
            designation: "Chess Coach",
            src: "/sneha-gupta.jpg",
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold text-dame-dark mb-4">
                        2k+ Parents Love <span className="text-dame-orange">Our Results</span>
                    </h2>
                    <p className="text-xl text-gray-900 font-medium">
                        Real families sharing their amazing chess journey with DameChess
                    </p>
                </div>
                <AnimatedTestimonials testimonials={clientTestimonials} autoplay={false} />
            </div>
        </section>
    );
}
