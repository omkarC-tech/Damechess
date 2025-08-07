import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white text-dame-dark">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Refund & Return Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Thank you for choosing DameChess. Refunds are provided for some services and products. Kindly contact the team to know more.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
