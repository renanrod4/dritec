"use client";

import Lottie from "lottie-react";
import scrollDownAnimation from "@/public/animations/scrolldown.json";

interface ScrollDownIndicatorProps {
  size?: number;
  classname?: string;
}

export default function ScrollDownIndicator({size = 40, classname = ""}:ScrollDownIndicatorProps) {
  return <div className={`${classname}`} style={{width: size*2, height: size*2}}>
    <Lottie animationData={scrollDownAnimation} loop />
  </div>;
}