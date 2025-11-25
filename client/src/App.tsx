import { Switch, Route } from "wouter";
import ScrollToTop from "./components/ScrollToTop";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/home";
import UnderProgress from "@/pages/UnderProgress";
import AboutUs from "@/pages/AboutUs"; // ✅ Import About Us
import Blog from "@/pages/blog"; // ✅ Import Blog page
import Courses from "@/pages/courses"; // ✅ Import Courses page
import NotFound from "@/pages/not-found";
import TermsOfService from "@/legal/terms";
import PrivacyPolicy from "@/legal/privacy";
import RefundPolicy from "@/legal/refund";

import Contact from "@/pages/contact"; // ✅ Import Contact page

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />      {/* ✅ Updated to real Blog page */}
      <Route path="/courses" component={Courses} />   {/* ✅ Updated to real Courses page */}
      <Route path="/careers" component={UnderProgress} />
      <Route path="/about" component={AboutUs} /> {/* ✅ Added About Us route */}
      <Route path="/contact" component={Contact} /> {/* ✅ Added Contact route */}
      <Route path="/terms" component={TermsOfService} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/refund" component={RefundPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
