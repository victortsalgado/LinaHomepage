
"use client";

import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutLinaPaySection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });

  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });

  return (
    <></>
  );
}
