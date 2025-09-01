import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsrHeroSection from "@/components/views/jsr/sections/JsrHeroSection";
import SolutionSection from "@/components/views/jsr/sections/SolutionSection";
import JsrSocialProofSection from "@/components/views/jsr/sections/JsrSocialProofSection";
import JsrDifferentiatorsSection from "@/components/views/jsr/sections/JsrDifferentiatorsSection";
import JsrApisSection from "@/components/views/jsr/sections/JsrApisSection";
import JsrInfrastructureSection from "@/components/views/jsr/sections/JsrInfrastructureSection";
import JsrCtaFormSection from "@/components/views/jsr/sections/JsrCtaFormSection";

export default function JSR(): JSX.Element {
  return (
    <>
      <Header />
      <JsrHeroSection />
      <SolutionSection />
      <JsrSocialProofSection />
      <JsrDifferentiatorsSection />
      <JsrApisSection />
      <JsrInfrastructureSection />
      <JsrCtaFormSection />
      <Footer />
    </>
  );
}