import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import HeroBlackFriday from "@/components/HeroBlackFriday";

// Lazy load components below the fold for better initial page load
const PainPointsBlackFriday = lazy(() => import("@/components/PainPointsBlackFriday"));
const Solution = lazy(() => import("@/components/Solution"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));

const IndexBlackFriday = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      <Header />
      <HeroBlackFriday />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <PainPointsBlackFriday />
        <Solution />
        <ContactForm />
        <Footer />
      </Suspense>
    </div>
  );
};

export default IndexBlackFriday;
