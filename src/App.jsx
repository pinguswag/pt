import React from "react";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import CurriculumSection from "./components/CurriculumSection";
import AuthoritySection from "./components/AuthoritySection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import StickyCTA from "./components/StickyCTA";

function App() {
  return (
    <div className="app-container">
      <main>
        <HeroSection />
        <ProblemSection />
        <CurriculumSection />
        <AuthoritySection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <StickyCTA />
    </div>
  );
}

export default App;
