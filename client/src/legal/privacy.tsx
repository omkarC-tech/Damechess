import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-dame-dark">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Please read the following Privacy Policy of the services made available on the DameChess website or application (collectively referred to as the “Platform”).
          </p>

          <p>
            For the purposes of this Privacy Policy, “You”, “Your”, or “User” refers to any natural or legal person browsing or subscribing to the services on the Platform. “We”, “Us”, or “Our” refers to DameChess Private Limited.
          </p>

          <p>
            Please read this Privacy Policy carefully before using our services. This policy may be updated from time to time, so we encourage you to check this page regularly.
          </p>

          <p>
            By accessing or using our Platform, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            Updates to This Policy
          </h2>
          <p>
            If we make any changes to our Privacy Policy, they will be reflected on this page. Your continued use of the Platform implies your acceptance of any modifications.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            Information We Collect
          </h2>
          <p>We collect personal information to serve you better. This may include:</p>
          <ul className="list-disc ml-6">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Subject which you choose</li>
            <li>Device and IP information</li>
            <li>Custom Messages</li>
            
            
          </ul>

          <h2 className="text-xl font-semibold mt-8">
            Registration Information
          </h2>
          <p>
            When registering or filling a form, we may ask for your name, username, password, email, institution name, and optionally a profile picture. If you submit any contact details, we may contact you via call, SMS, email, or WhatsApp—even if your number is on DND.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            Email and Communication
          </h2>
          <p>
            If you email us or fill out a contact form, we will retain this information to respond appropriately. We do not sell or rent your personal data and only use it to improve our services.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
