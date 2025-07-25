import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClassicsPage from "./pages/ClassicsPage";
import AdventurePage from "./pages/AdventurePage";
import RoadstersPage from "./pages/RoadstersPage";
import OffRoadPage from "./pages/OffRoadPage";
import Rocket3Page from "./pages/Rocket3Page";
import SportPage from "./pages/SportPage";
import AllModelsPage from "./pages/AllModelsPage";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/classics" element={<ClassicsPage />} />
            <Route path="/adventure" element={<AdventurePage />} />
            <Route path="/roadsters" element={<RoadstersPage />} />
            <Route path="/off-road" element={<OffRoadPage />} />
            <Route path="/rocket-3" element={<Rocket3Page />} />
            <Route path="/sport" element={<SportPage />} />
            <Route path="/all-models" element={<AllModelsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
