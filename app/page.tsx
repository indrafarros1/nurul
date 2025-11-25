"use client";

import Confetti from "./components/Confetti";
import Balloons from "./components/Balloons";
import Candles from "./components/Candles";
import WishCards from "./components/WishCards";
import FloatingHearts from "./components/FloatingHearts";
import PhotoFrame from "./components/PhotoFrame";
import Countdown from "./components/Countdown";
import FinalSurprise from "./components/FinalSurprise";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <Confetti />
      <Balloons />
      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="text-center animate-fade-in">
            {/* Photo */}
            <PhotoFrame />

            {/* Age Badge */}
            <div className="mb-4">
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-lg border-2 border-white/30">
                🎉 25th Birthday 🎉
              </span>
            </div>

            {/* Main title */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            >
              Happy Birthday!
            </h1>

            {/* Name */}
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-shimmer"
              style={{
                fontFamily: "'Dancing Script', cursive",
                filter: "drop-shadow(0 4px 20px rgba(255, 107, 157, 0.5))",
              }}
            >
              Nurul Barokah
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 max-w-md mx-auto leading-relaxed">
              Hari ini adalah hari yang sangat spesial! ✨
              <br />
              <span className="text-sm opacity-80">Scroll untuk kejutan untukmu...</span>
            </p>

            {/* Decorative emojis */}
            <div className="mt-6 text-3xl animate-bounce-slow">
              🎂 🎁 🎈 🎊 🎉
            </div>
          </div>

        </section>

        {/* Countdown Section - Usia */}
        <Countdown />

        {/* Cake & Candles Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-white text-center mb-12"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
          >
            🎂 Make a Wish! 🎂
          </h2>
          
          <Candles />
        </section>

        {/* Wishes Section */}
        <section className="py-16 px-4">
          <h2
            className="text-2xl md:text-4xl font-bold text-white text-center mb-8"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
          >
            💝 Ucapan Untukmu 💝
          </h2>

          <WishCards />
        </section>

        {/* Final Surprise & Message */}
        <FinalSurprise />

        {/* Footer */}
        <footer className="py-10 text-center">
          <div className="text-white/80">
            <div className="glass-card inline-block px-8 py-4 rounded-2xl mb-4">
              <p className="text-lg font-medium mb-2">
                Dengan segenap hati dan doa terbaik 🙏
              </p>
              <p className="text-sm opacity-80">
                Semoga hari ini menjadi awal dari 365 hari yang penuh kebahagiaan!
              </p>
            </div>
            <p className="text-3xl animate-bounce-slow mb-4">
              🎉🎂🎁🎈🎊
            </p>
            <p className="text-xs text-white/60">
              Made with ❤️ specially for Nurul Barokah
            </p>
            <p className="text-xs text-white/40 mt-1">
              26 November 2025
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
