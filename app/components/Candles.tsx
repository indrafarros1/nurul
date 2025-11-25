"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function Candles() {
  const [isLit, setIsLit] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const blowCandles = () => {
    setIsLit(false);
    
    setTimeout(() => {
      setShowMessage(true);
      
      const colors = ["#FF6B9D", "#9B5DE5", "#FFD93D", "#00BBF9"];
      
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
      });
    }, 300);
  };

  const relightCandles = () => {
    setIsLit(true);
    setShowMessage(false);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Cake */}
      <div className="relative">
        {/* Candles */}
        <div className="flex justify-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="relative">
              {/* Candle stick */}
              <div className="w-3 h-12 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-sm" />
              
              {/* Flame */}
              {isLit && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div
                    className="w-4 h-6 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-400 rounded-full animate-flicker"
                    style={{
                      boxShadow: "0 0 10px #FFD93D, 0 0 20px #FF6B9D",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cake layers */}
        <div className="relative">
          {/* Top layer - cream */}
          <div className="w-48 h-6 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-lg mx-auto" />
          
          {/* Frosting drips */}
          <div className="absolute top-5 left-4 right-4 flex justify-around">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-6 bg-gradient-to-b from-pink-300 to-pink-400 rounded-b-full"
                style={{ height: `${20 + (i % 3) * 8}px` }}
              />
            ))}
          </div>
          
          {/* Main cake body */}
          <div className="w-52 h-24 bg-gradient-to-b from-pink-400 to-pink-500 rounded-b-lg mx-auto relative overflow-hidden">
            {/* Decorations */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-around">
              {["💕", "✨", "🌸", "💖", "✨", "💕"].map((emoji, i) => (
                <span key={i} className="text-sm">{emoji}</span>
              ))}
            </div>
          </div>
          
          {/* Cake plate */}
          <div className="w-60 h-4 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full mx-auto shadow-lg" />
        </div>

        {/* Number 25 decoration */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-4xl font-bold text-yellow-birthday animate-bounce-slow">
          25
        </div>
      </div>

      {/* Button */}
      <button
        onClick={isLit ? blowCandles : relightCandles}
        className="px-8 py-4 text-xl font-bold text-white rounded-full shadow-xl transition-all hover:scale-105 active:scale-95"
        style={{
          background: isLit 
            ? "linear-gradient(135deg, #FF6B9D, #9B5DE5)" 
            : "linear-gradient(135deg, #00BBF9, #00F5D4)",
        }}
      >
        {isLit ? "🎂 Tiup Lilin!" : "🕯️ Nyalakan Lagi"}
      </button>

      {/* Success Message */}
      {showMessage && (
        <div className="text-center glass-card p-6 rounded-2xl animate-fade-in">
          <p className="text-2xl font-bold text-white mb-2">
            🎉 Selamat! 🎉
          </p>
          <p className="text-lg text-white/90">
            Semoga semua harapanmu terkabul, Nurul! 💕
          </p>
        </div>
      )}
    </div>
  );
}
