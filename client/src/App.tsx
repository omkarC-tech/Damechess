import { Switch, Route } from "wouter";
import ScrollToTop from "./components/ScrollToTop";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import TermsOfService from "@/legal/terms";
import PrivacyPolicy from "@/legal/privacy";
import RefundPolicy from "@/legal/refund";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
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
