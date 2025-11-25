"use client";

const emojis = ["💕", "💖", "💗", "🌸", "✨"];

// Fixed positions untuk menghindari hydration issues dan lebih ringan
const hearts = [
  { left: 5, top: 10 },
  { left: 25, top: 30 },
  { left: 45, top: 15 },
  { left: 65, top: 45 },
  { left: 85, top: 20 },
  { left: 15, top: 70 },
  { left: 75, top: 80 },
];

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart, i) => (
        <div
          key={i}
          className="absolute text-xl opacity-20 animate-bounce-slow"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {emojis[i % 5]}
        </div>
      ))}
    </div>
  );
}
