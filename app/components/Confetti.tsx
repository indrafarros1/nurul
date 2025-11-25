"use client";

import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
  const fireConfetti = useCallback(() => {
    const colors = ["#FF6B9D", "#9B5DE5", "#FFD93D", "#00BBF9"];
    
    confetti({
      particleCount: 40, // Dikurangi dari 100
      spread: 60,
      origin: { y: 0.6 },
      colors: colors,
      disableForReducedMotion: true,
    });
  }, []);

  useEffect(() => {
    // Fire confetti sekali saja saat load
    const timer = setTimeout(() => {
      fireConfetti();
    }, 800);

    return () => clearTimeout(timer);
  }, [fireConfetti]);

  return null;
}
