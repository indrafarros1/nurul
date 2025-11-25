"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function FinalSurprise() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    
    // Celebration confetti
    const colors = ["#FF6B9D", "#9B5DE5", "#FFD93D", "#00BBF9"];
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          💌 Pesan Terakhir Untukmu 💌
        </h2>
      </div>

      {!isRevealed ? (
        <div className="max-w-md mx-auto text-center">
          <div className="glass-card p-8 rounded-3xl">
            <div className="text-6xl mb-4 animate-bounce-slow">🎁</div>
            <p className="text-white mb-6">
              Ada satu pesan spesial yang ingin kusampaikan untukmu...
            </p>
            <button
              onClick={handleReveal}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              ✨ Buka Pesan ✨
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-lg mx-auto animate-fade-in">
          <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-3 left-3 text-xl">🌸</div>
            <div className="absolute top-3 right-3 text-xl">🌸</div>
            <div className="absolute bottom-3 left-3 text-xl">💫</div>
            <div className="absolute bottom-3 right-3 text-xl">💫</div>

            <div className="text-center mb-6">
              <div className="text-5xl mb-2">💝</div>
              <h3 className="text-xl font-bold text-white">
                Untuk Nurul Barokah
              </h3>
            </div>

            <div className="space-y-4 text-white/90 text-sm md:text-base leading-relaxed">
              <p>
                <span className="text-pink-200 font-medium">Hai Nurul,</span>
              </p>
              
              <p>
                Selamat ulang tahun yang ke-25! 🎂 Hari ini adalah hari yang sangat 
                istimewa, karena 25 tahun yang lalu dunia ini diberikan anugerah 
                berupa kehadiranmu.
              </p>

              <p>
                Kamu tahu tidak? Setiap orang punya perjalanan hidupnya masing-masing, 
                dan aku yakin kamu sudah melalui banyak hal yang membentukmu menjadi 
                <span className="text-yellow-300 font-medium"> wanita hebat seperti sekarang!</span> ✨
              </p>

              <p>
                Aku ingin kamu tahu bahwa kamu adalah sosok yang luar biasa. 
                Kebaikan hatimu, senyumanmu yang manis, semangatmu yang tidak 
                pernah padam... semua itu membuat orang-orang di sekitarmu merasa 
                beruntung bisa mengenalmu.
              </p>

              <p>
                Di usia 25 ini, semoga semua impianmu mulai terwujud satu per satu. 
                Semoga kamu selalu dikelilingi oleh orang-orang yang peduli 
                dengan tulus. Semoga setiap langkahmu dipenuhi keberkahan dan 
                kebahagiaan. 
              </p>

              <p>
                Oh iya, semoga program dietnya sukses ya! 
                <span className="text-pink-200 font-medium"> Nggak sabar pengen lihat hasilnya nanti!</span> 😄✨
                Semangat, pasti bisa!
              </p>

              <p>
                Jangan pernah berhenti menjadi dirimu sendiri, karena 
                <span className="text-pink-200 font-medium"> Nurul yang apa adanya </span>
                adalah Nurul yang paling keren! 💖
              </p>

              <p className="text-center font-medium pt-2">
                Selamat menjalani usia baru! 🎊
                <br />
                Semoga tahun ini adalah tahun terbaikmu!
              </p>
            </div>

            <div className="text-center mt-6">
              <div className="text-3xl animate-bounce-slow">
                🎂💖✨🌟💕
              </div>
              <p className="text-white/60 text-xs mt-4">
                - Dari seseorang yang sangat mengagumimu -
              </p>
            </div>
          </div>

          {/* Additional wishes */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="glass-card p-4 rounded-xl text-center">
              <div className="text-2xl mb-1">🙏</div>
              <p className="text-white text-xs">Semoga sehat selalu</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <div className="text-2xl mb-1">💰</div>
              <p className="text-white text-xs">Semoga rezekinya lancar</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <div className="text-2xl mb-1">💑</div>
              <p className="text-white text-xs">Semoga cepat dapat jodoh terbaik</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <div className="text-2xl mb-1">🎯</div>
              <p className="text-white text-xs">Semoga sukses dalam karir</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center col-span-2">
              <div className="text-2xl mb-1">💪</div>
              <p className="text-white text-xs">Semoga dietnya lancar & sukses! 🏃‍♀️✨</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
