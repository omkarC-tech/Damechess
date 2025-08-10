import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { FaChessKnight } from "react-icons/fa";

const UnderProgress: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-dame-dark flex flex-col">
      <Navigation />

      {/* Added pt-32 to push content below header */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 pt-32">
        <div className="animate-bounce mb-6">
          <FaChessKnight className="text-dame-gold text-8xl" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Under Progress</h1>
        <p className="text-lg text-gray-600 max-w-lg">
          We’re working hard to bring you this content.  
          Till then, explore our other pages!
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default UnderProgress;
