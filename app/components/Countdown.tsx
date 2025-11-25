"use client";

export default function Countdown() {
  const stats = [
    { number: "25", label: "Tahun", emoji: "🎂" },
    { number: "300", label: "Bulan", emoji: "📅" },
    { number: "9,125", label: "Hari", emoji: "☀️" },
    { number: "∞", label: "Kenangan Indah", emoji: "💖" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          🎊 Perjalanan Hidupmu 🎊
        </h2>
        <p className="text-white/80 text-sm">
          Waktu yang sudah kamu lalui dengan penuh warna...
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-card p-4 rounded-2xl text-center hover:scale-105 transition-transform"
          >
            <div className="text-2xl mb-1">{stat.emoji}</div>
            <div className="text-3xl md:text-4xl font-bold text-white animate-shimmer">
              {stat.number}
            </div>
            <div className="text-white/70 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <div className="glass-card inline-block px-6 py-3 rounded-full">
          <p className="text-white text-sm">
            ✨ Dan semuanya membentuk <span className="font-bold text-yellow-300">Nurul yang luar biasa</span> hari ini! ✨
          </p>
        </div>
      </div>
    </section>
  );
}
