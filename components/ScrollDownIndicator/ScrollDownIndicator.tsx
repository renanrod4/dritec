"use client";

import Lottie from "lottie-react";
import scrollDownAnimation from "@/public/animations/scrolldown.json";

interface ScrollDownIndicatorProps {
  size?: number;
  className?: string;
}

export default function ScrollDownIndicator({size = 40, className = ""}:ScrollDownIndicatorProps) {
  return <div className={`${className}`} style={{width: size*2, height: size*2}}>
    <Lottie animationData={scrollDownAnimation} loop />
  </div>;
}