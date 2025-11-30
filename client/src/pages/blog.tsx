import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User, Tag, Search, X } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog";

// Mock Data with Realistic Content and Updated Images
const featuredPost = {
    id: 0,
    title: "The Rise of Indian Chess: A New Golden Era",
    excerpt: "From Viswanathan Anand's pioneering victories to the explosion of young talent like Gukesh, Praggnanandhaa, and Arjun Erigaisi. We explore how India became a global chess superpower and what this means for the future of the game.",
    author: "Sagar Shah",
    date: "May 20, 2024",
    readTime: "15 min read",
    category: "Analysis",
    image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=2660&auto=format&fit=crop",
    slug: "rise-of-indian-chess",
    content: `
    <p class="mb-4">The landscape of global chess has shifted dramatically in the last decade, and at the epicenter of this seismic change is India. What began as a solitary journey by Viswanathan Anand has blossomed into a full-fledged revolution, producing a generation of prodigies that are terrorizing the elite levels of the game.</p>
    
    <h3 class="text-xl font-bold text-dame-dark mt-6 mb-3">The Anand Effect</h3>
    <p class="mb-4">It is impossible to overstate the impact of Viswanathan Anand. By becoming the first Grandmaster from India in 1988 and subsequently the World Champion, he didn't just break a glass ceiling; he shattered it completely. His success normalized the idea that an Indian could be the best in the world, inspiring thousands of parents to enroll their children in chess academies.</p>

    <h3 class="text-xl font-bold text-dame-dark mt-6 mb-3">The Golden Generation</h3>
    <p class="mb-4">Today, we are witnessing the fruits of that inspiration. D. Gukesh, R. Praggnanandhaa, and Arjun Erigaisi are not just strong players; they are world-beaters. Gukesh's recent performance at the Candidates tournament was nothing short of historic, becoming the youngest challenger for the World Championship title in history.</p>
    
    <p class="mb-4">This isn't just about a few individuals. The depth of Indian chess is staggering. With over 80 Grandmasters and counting, the ecosystem is thriving. Tournaments are plentiful, coaching is world-class, and the government support, while always capable of improvement, has been significant compared to other nations.</p>

    <h3 class="text-xl font-bold text-dame-dark mt-6 mb-3">What This Means for the Future</h3>
    <p class="mb-4">The dominance of Indian chess suggests a shift in the geopolitical center of the game. For decades, it was the Soviet Union, then Russia. Now, the sun is rising in the East. This brings new styles, new rivalries, and a new energy to the 64 squares.</p>
    
    <p>For aspiring players, the message is clear: the bar has been raised. But so has the ceiling. With the right dedication and resources—like those we offer at DameChess—anyone can join this wave of excellence.</p>
  `
};

const blogPosts = [
    {
        id: 1,
        title: "Gukesh D: The Youngest Challenger in History",
        excerpt: "How a 17-year-old prodigy from Chennai stunned the chess world at the Candidates Tournament, setting a new paradigm for the future of the game.",
        author: "Grandmaster Anish",
        date: "April 22, 2024",
        readTime: "8 min read",
        category: "Tournaments",
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop",
        slug: "gukesh-youngest-challenger",
        content: `
      <p class="mb-4">In a tournament filled with seasoned veterans like Fabiano Caruana and Hikaru Nakamura, few expected the 17-year-old Gukesh D to emerge victorious. Yet, with a maturity far beyond his years, he navigated the high-pressure waters of the Candidates Tournament to become the youngest World Championship challenger in history.</p>
      <p class="mb-4">His style is a blend of deep calculation and fearless intuition. Unlike many young players who rely heavily on computer preparation, Gukesh shows a remarkable ability to handle complex, irrational positions over the board.</p>
      <p>This victory is a testament to his work ethic and the support system around him. It signals a changing of the guard, where the "young lions" are no longer just knocking on the door; they are kicking it down.</p>
    `
    },
    {
        id: 2,
        title: "Mastering the Endgame: Rook vs. Pawn",
        excerpt: "The difference between a draw and a win often lies in the subtleties of rook endgames. We break down the Lucena and Philidor positions.",
        author: "Coach Sarah",
        date: "May 10, 2024",
        readTime: "12 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2658&auto=format&fit=crop",
        slug: "mastering-endgame-rook-pawn",
        content: `
      <p class="mb-4">Rook endgames are the most common type of endgames in chess, yet they are often the most misplayed. The difference between a win and a draw can come down to a single tempo.</p>
      <h3 class="text-xl font-bold text-dame-dark mt-6 mb-3">The Philidor Position</h3>
      <p class="mb-4">This is the defensive technique you must know. If you are the defender (down a pawn), your goal is to keep your rook active and cut off the enemy king. The key is to wait until the opponent's king advances to the 6th rank, then check from behind.</p>
      <h3 class="text-xl font-bold text-dame-dark mt-6 mb-3">The Lucena Position</h3>
      <p class="mb-4">This is the winning technique. When you have a pawn on the 7th rank but your king is trapped in front of it, you need to "build a bridge" with your rook to shield your king from checks and allow the pawn to promote.</p>
      <p>Mastering these two positions is non-negotiable for any serious player.</p>
    `
    },
    {
        id: 3,
        title: "The Psychology of a Blunder",
        excerpt: "Why do we miss simple tactics? Understanding the cognitive biases that lead to mistakes on the board and how to train your focus.",
        author: "Dr. K. Anders",
        date: "May 15, 2024",
        readTime: "6 min read",
        category: "Psychology",
        image: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?q=80&w=2557&auto=format&fit=crop",
        slug: "psychology-of-blunder",
        content: `
      <p class="mb-4">We've all been there. You play a move, and a split second after your hand leaves the piece, you realize you've hung your queen. Why does this happen?</p>
      <p class="mb-4">Blunders are rarely due to a lack of knowledge. They are usually failures of process. Common causes include:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Tunnel Vision:</strong> Focusing so hard on your own plan that you ignore your opponent's threats.</li>
        <li><strong>Time Pressure:</strong> Panic leads to irrational decisions.</li>
        <li><strong>Complacency:</strong> Assuming a winning position will win itself.</li>
      </ul>
      <p>To cure blunders, you must implement a "blunder check" in your thought process. Before every move, ask yourself: "What is my opponent's threat?"</p>
    `
    },
    {
        id: 4,
        title: "Opening Repertoire for Busy Professionals",
        excerpt: "Don't have 8 hours a day to study? Here are the most solid and low-maintenance openings that still pack a punch.",
        author: "IM Levy",
        date: "May 18, 2024",
        readTime: "10 min read",
        category: "Openings",
        image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2670&auto=format&fit=crop",
        slug: "openings-busy-professionals",
        content: `
      <p class="mb-4">If you have a full-time job, you cannot compete with teenagers who study opening theory for 6 hours a day. You need a different approach.</p>
      <p class="mb-4">The key is to play "system" openings where the plans are consistent regardless of what your opponent plays.</p>
      <h3 class="text-xl font-bold text-dame-dark mt-6 mb-3">White: The London System</h3>
      <p class="mb-4">Solid, reliable, and annoying to play against. You get a playable middlegame every time without memorizing 20 moves of theory.</p>
      <h3 class="text-xl font-bold text-dame-dark mt-6 mb-3">Black: The Caro-Kann & The Slav</h3>
      <p class="mb-4">These structures are very similar. They are solid, hard to crack, and frustrate aggressive players who want to attack you early.</p>
    `
    },
    {
        id: 5,
        title: "Chess and Mathematics: The Hidden Connection",
        excerpt: "Exploring the geometric patterns, combinatorial complexity, and logical reasoning shared between the 64 squares and the world of numbers.",
        author: "Prof. Rao",
        date: "May 22, 2024",
        readTime: "9 min read",
        category: "Education",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2670&auto=format&fit=crop",
        slug: "chess-and-mathematics",
        content: `
      <p class="mb-4">Chess is often described as art, science, and sport. But at its core, it is a mathematical problem. The number of possible games of chess is estimated to be 10^120, a number known as the Shannon Number. This is greater than the number of atoms in the observable universe!</p>
      <p class="mb-4">But the connection goes deeper than just big numbers. Chess teaches:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Geometry:</strong> Understanding diagonals, ranks, and files.</li>
        <li><strong>Logic:</strong> If-then reasoning (If I go here, he goes there).</li>
        <li><strong>Pattern Recognition:</strong> Identifying recurring tactical motifs.</li>
      </ul>
      <p>This is why chess is such a powerful educational tool for children. It gamifies the very skills needed for success in STEM fields.</p>
    `
    },
    {
        id: 6,
        title: "Parent's Guide: Supporting Your Child's Chess Journey",
        excerpt: "From handling losses to finding the right coach. A comprehensive guide for parents to nurture their child's passion without the pressure.",
        author: "Priya Sharma",
        date: "May 25, 2024",
        readTime: "7 min read",
        category: "Parenting",
        image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2640&auto=format&fit=crop",
        slug: "parents-guide-chess",
        content: `
      <p class="mb-4">As a parent, your role in your child's chess journey is crucial. You are the cheerleader, the psychologist, and the logistics manager.</p>
      <h3 class="text-xl font-bold text-dame-dark mt-6 mb-3">Handling Losses</h3>
      <p class="mb-4">Chess is brutal. In a tournament, half the players lose in every round. Teach your child that losing is part of learning. Focus on the effort, not the result.</p>
      <h3 class="text-xl font-bold text-dame-dark mt-6 mb-3">Finding a Coach</h3>
      <p class="mb-4">Don't just look for the strongest player. Look for someone who is good with kids, patient, and structured. A Grandmaster might be a terrible teacher for a beginner.</p>
      <p>Most importantly, keep it fun. If the joy is gone, the progress will stop.</p>
    `
    }
];

export default function Blog() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [email, setEmail] = useState("");
    const [selectedPost, setSelectedPost] = useState<typeof featuredPost | null>(null);
    const { toast } = useToast();

    const mutation = useMutation({
        mutationFn: async (email: string) => {
            await apiRequest("POST", "/api/subscribe", { email });
        },
        onSuccess: () => {
            toast({
                title: "Subscribed!",
                description: "You've successfully subscribed to our newsletter. Check your email!",
                variant: "default",
            });
            setEmail("");
        },
        onError: (error) => {
            toast({
                title: "Subscription Failed",
                description: "Please try again later or check your email address.",
                variant: "destructive",
            });
        },
    });

    const handleSubscribe = () => {
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            toast({
                title: "Invalid Email",
                description: "Please enter a valid email address.",
                variant: "destructive",
            });
            return;
        }
        mutation.mutate(email);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-36 pb-16 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-dame-dark mb-6 tracking-tight">
                            The <span className="text-dame-orange">DameChess</span> Blog
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Expert insights, tournament analysis, and educational resources to elevate your game.
                        </p>
                    </div>

                    {/* Featured Post */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                        onClick={() => setSelectedPost(featuredPost)}
                    >
                        <div className="grid md:grid-cols-2 min-h-[500px]">
                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="bg-dame-dark text-white p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-dame-orange/10 rounded-full blur-3xl" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Badge className="bg-dame-orange hover:bg-orange-600 text-white border-none px-3 py-1 text-sm">
                                            {featuredPost.category}
                                        </Badge>
                                        <span className="text-gray-400 text-sm flex items-center gap-1">
                                            <Calendar className="w-4 h-4" /> {featuredPost.date}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-dame-orange transition-colors">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-gray-700 pt-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                                                <User className="w-5 h-5 text-gray-300" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">{featuredPost.author}</div>
                                                <div className="text-xs text-gray-400">{featuredPost.readTime}</div>
                                            </div>
                                        </div>
                                        <Button variant="ghost" className="text-white hover:text-dame-orange group-hover:translate-x-2 transition-all p-0">
                                            Read Article <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Recent Posts Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-dame-dark mb-2">Latest Articles</h2>
                            <p className="text-gray-600">Stay updated with the latest trends and tutorials</p>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredId(post.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => setSelectedPost(post)}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10">
                                        <Badge className="bg-white/90 backdrop-blur text-dame-dark hover:bg-white shadow-sm">
                                            {post.category}
                                        </Badge>
                                    </div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-dame-dark mb-3 line-clamp-2 group-hover:text-dame-orange transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                                        <span className="text-sm font-medium text-gray-900">
                                            {post.author}
                                        </span>
                                        <span className="text-dame-orange font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Read <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-dame-dark text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-dame-orange rounded-full blur-3xl" />
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Get Chess Insights Delivered
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Join 15,000+ subscribers. Weekly tactics, tournament news, and improvement tips directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={mutation.isPending}
                            />
                            <Button
                                onClick={handleSubscribe}
                                disabled={mutation.isPending}
                                className="bg-dame-orange hover:bg-orange-600 text-white h-12 px-8 font-bold"
                            >
                                {mutation.isPending ? "Subscribing..." : "Subscribe Free"}
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            No spam, ever. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Blog Post Modal */}
            <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
                <DialogContent className="flex flex-col max-w-4xl h-[90vh] p-0 overflow-hidden bg-white border-none shadow-2xl [&>button:last-child]:hidden">
                    {selectedPost && (
                        <div className="flex flex-col flex-1 min-h-0">
                            {/* Modal Header Image */}
                            <div className="relative h-64 md:h-80 flex-shrink-0">
                                <img
                                    src={selectedPost.image}
                                    alt={selectedPost.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
                                    onClick={() => setSelectedPost(null)}
                                >
                                    <X className="w-6 h-6" />
                                </Button>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <Badge className="bg-dame-orange text-white border-none mb-3">
                                        {selectedPost.category}
                                    </Badge>
                                    <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
                                        {selectedPost.title}
                                    </h2>
                                    <div className="flex items-center gap-4 text-sm text-gray-200">
                                        <span className="flex items-center gap-1">
                                            <User className="w-4 h-4" /> {selectedPost.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" /> {selectedPost.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" /> {selectedPost.readTime}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-white">
                                <div
                                    className="prose prose-lg max-w-none text-gray-700 prose-headings:text-dame-dark prose-a:text-dame-orange prose-strong:text-dame-dark"
                                    dangerouslySetInnerHTML={{ __html: selectedPost.content || "" }}
                                />

                                {/* Author Bio / Footer of Modal */}
                                <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                                            ♟️
                                        </div>
                                        <div>
                                            <div className="font-bold text-dame-dark">Written by {selectedPost.author}</div>
                                            <div className="text-sm text-gray-500">Chess Expert & Coach</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
