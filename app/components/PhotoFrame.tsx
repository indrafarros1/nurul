"use client";

import { useState } from "react";

export default function PhotoFrame() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div className="mb-6">
      <div
        onClick={handleClick}
        className={`relative mx-auto w-40 h-40 md:w-48 md:h-48 cursor-pointer transition-transform duration-300 ${
          isClicked ? "scale-110" : "hover:scale-105"
        }`}
      >
        {/* Rotating border */}
        <div
          className="absolute inset-0 rounded-full animate-spin-slow"
          style={{
            background: "conic-gradient(from 0deg, #FF6B9D, #FFD93D, #9B5DE5, #00BBF9, #FF6B9D)",
            padding: "4px",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
        </div>

        {/* Photo container */}
        <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-white shadow-xl">
          {/* Foto Nurul */}
          <img
            src="/nurul.jpg"
            alt="Nurul Barokah"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sparkle effects on click */}
        {isClicked && (
          <>
            <span className="absolute -top-2 -left-2 text-2xl animate-ping">✨</span>
            <span className="absolute -top-2 -right-2 text-2xl animate-ping">💖</span>
            <span className="absolute -bottom-2 -left-2 text-2xl animate-ping">🌟</span>
            <span className="absolute -bottom-2 -right-2 text-2xl animate-ping">💕</span>
          </>
        )}

        {/* Crown */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl animate-bounce-slow">
          👑
        </div>
      </div>

      {/* Tap hint */}
      <p className="text-white/60 text-xs mt-3 text-center">
        Tap foto untuk surprise! ✨
      </p>
    </div>
  );
}
