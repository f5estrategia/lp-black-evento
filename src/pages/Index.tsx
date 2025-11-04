import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import HeroLuxury from "@/components/HeroLuxury";
import SocialProofBar from "@/components/SocialProofBar";

// Lazy load components below the fold for better initial page load
const PainPoints = lazy(() => import("@/components/PainPoints"));
const Methodology = lazy(() => import("@/components/Methodology"));
const ToolsSection = lazy(() => import("@/components/ToolsSection"));
const ResultsSection = lazy(() => import("@/components/ResultsSection"));
const DifferentialsSection = lazy(() => import("@/components/DifferentialsSection"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--luxury-black))] text-white relative">
      <Header />
      <HeroLuxury />
      <SocialProofBar />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <ResultsSection />
        <PainPoints />
        <Methodology />
        <ToolsSection />
        <DifferentialsSection />
        <FinalCTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
