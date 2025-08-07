import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-dame-dark">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Please read these terms of service (“terms”, “terms of service”) carefully before using DameChess.
          </p>
          <p>
            DameChess is the “service” provided by DameChess Private Limited (“us”, “we”, “our”).
          </p>

          <h2 className="text-xl font-semibold mt-8">Conditions of Use</h2>
          <p>
            By using our platform, you agree to the terms and conditions outlined here. These terms govern your use of DameChess and its services.
          </p>

          <h2 className="text-xl font-semibold mt-8">Privacy Policy</h2>
          <p>
            Before using DameChess, please review our Privacy Policy to understand how we collect and handle user data.
          </p>

          <h2 className="text-xl font-semibold mt-8">Copyright</h2>
          <p>
            All content published on DameChess (including text, images, graphics, and logos) is the property of DameChess or its content creators and is protected by copyright laws.
          </p>

          <h2 className="text-xl font-semibold mt-8">Communications</h2>
          <p>
            When you use DameChess or send us emails, you are communicating with us electronically. You consent to receive communications from us electronically.
          </p>

          <h2 className="text-xl font-semibold mt-8">Applicable Law</h2>
          <p>
            By visiting DameChess, you agree that the laws of India, without regard to principles of conflict laws, will govern these terms of service.
          </p>

          <h2 className="text-xl font-semibold mt-8">Disputes</h2>
          <p>
            Any dispute related in any way to your use of DameChess shall be subject to the jurisdiction of courts located in Thrissur, Kerala.
          </p>

          <h2 className="text-xl font-semibold mt-8">User Account</h2>
          <p>
            You are responsible for maintaining the confidentiality of your user account and password. DameChess reserves the right to terminate accounts or remove content at its discretion.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
