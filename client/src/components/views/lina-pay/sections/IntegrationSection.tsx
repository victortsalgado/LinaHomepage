"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const integrationFeatures = [
  "APIs completas e documentadas",
  "Suporte técnico direto com o time de desenvolvedores e time de produto",
  "Homologado no Open Finance e 100% LGPD compliance",
  "Integração e período de testes para desenvolvedores em dias",
];

// Code example for the terminal
const codeExample = 'curl "api.lina/v1/pix/biometria?id=..."';

export default function IntegrationSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  
  // State for typing effect
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Typing effect when component becomes visible
  useEffect(() => {
    if (!contentVisible) return;
    
    setIsTyping(true);
    setTypedText("");
    
    const targetText = codeExample;
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < targetText.length) {
        setTypedText(targetText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50); // 50ms delay between each character
    
    return () => clearInterval(typeInterval);
  }, [contentVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-[linear-gradient(0deg,rgba(251,250,250,1)_0%,rgba(152,216,211,1)_100%)] min-h-screen flex items-center"
      data-testid="section-integration"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="bg-white rounded-3xl border-0 shadow-xl overflow-hidden backdrop-blur-sm">
            <CardContent className="p-16 lg:p-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div>
                  <h2 
                    className="[font-family:'Lexend',Helvetica] font-medium text-4xl md:text-5xl leading-[1.1] mb-8"
                    data-testid="heading-integration-title"
                  >
                    <span className="text-[#003a38]">
                      Integre rápido,<br />
                      escale
                    </span>
                    <span className="text-[#0ab5aa]"> sem limites</span>
                  </h2>

                  <div className="space-y-6">
                    {integrationFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.2 + (index * 0.1),
                          ease: "easeOut" 
                        }}
                        className="flex items-start gap-4"
                        data-testid={`integration-feature-${index + 1}`}
                      >
                        <img
                          className="w-4 h-4 mt-1 flex-shrink-0"
                          alt="Check"
                          src="/figmaAssets/check.svg"
                          data-testid={`icon-check-${index + 1}`}
                        />
                        <p 
                          className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-lg leading-relaxed"
                          data-testid={`text-feature-${index + 1}`}
                        >
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Code Editor Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                  <div className="bg-black rounded-xl shadow-2xl overflow-hidden" data-testid="code-editor-mockup">
                    {/* Editor Header */}
                    <div className="bg-black px-4 py-3 flex items-center space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-gray-400 text-sm font-mono">Terminal</span>
                      </div>
                    </div>

                    {/* Editor Content */}
                    <div className="p-6 min-h-[200px] flex flex-col justify-center">
                      <div className="w-full">
                        {/* Command Prompt with Typing Effect */}
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-[#0ab5aa] font-mono text-sm">$</span>
                          <div className="flex-1">
                            <pre className="text-green-400 font-mono text-sm leading-relaxed">
                              {typedText}
                              {isTyping && <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>}
                            </pre>
                          </div>
                        </div>

                        {/* Empty Command Line with Cursor */}
                        {!isTyping && (
                          <div className="flex items-center">
                            <span className="text-[#0ab5aa] font-mono text-sm">$</span>
                            <div className="ml-2 w-2 h-5 bg-[#0ab5aa] animate-pulse"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}