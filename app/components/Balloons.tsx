"use client";

// Hanya 3 balon dengan CSS animation (lebih ringan)
const balloons = [
  { color: "#FF6B9D", left: 10 },
  { color: "#9B5DE5", left: 50 },
  { color: "#FFD93D", left: 85 },
];

export default function Balloons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${balloon.left}%`,
            bottom: "20%",
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + index}s`,
          }}
        >
          <div className="relative">
            <div
              className="w-12 h-16 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${balloon.color}dd, ${balloon.color})`,
              }}
            >
              <div className="absolute top-2 left-2 w-3 h-4 rounded-full opacity-50 bg-white" />
            </div>
            <div
              className="absolute top-16 left-1/2 w-0.5 h-16 -translate-x-1/2"
              style={{ background: balloon.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
