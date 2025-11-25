"use client";

const wishes = [
  {
    emoji: "🌟",
    title: "Bersinar Terus",
    text: "Di usia 25 ini, semoga kamu makin bersinar dan sukses dalam segala hal yang kamu kerjakan!",
    color: "#FFD93D",
  },
  {
    emoji: "💖",
    title: "Penuh Kebahagiaan",
    text: "Semoga selalu bahagia dan dikelilingi orang-orang yang tulus peduli denganmu!",
    color: "#FF6B9D",
  },
  {
    emoji: "🦋",
    title: "Penuh Keajaiban",
    text: "Semoga tahun ini dipenuhi keajaiban dan hal-hal indah yang tak terduga!",
    color: "#9B5DE5",
  },
  {
    emoji: "🚀",
    title: "Raih Mimpimu",
    text: "Semoga semua impian dan cita-citamu tercapai satu per satu!",
    color: "#00BBF9",
  },
  {
    emoji: "💪",
    title: "Tetap Kuat",
    text: "Semoga selalu diberi kekuatan untuk melewati setiap tantangan hidup!",
    color: "#FF8DC7",
  },
  {
    emoji: "🌈",
    title: "Penuh Warna",
    text: "Semoga hidupmu selalu penuh warna dan kebahagiaan di setiap harinya!",
    color: "#C77DFF",
  },
];

export default function WishCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-2xl mx-auto">
      {wishes.map((wish, index) => (
        <div
          key={index}
          className="glass-card p-4 rounded-2xl hover:scale-105 transition-transform text-center"
          style={{
            borderColor: wish.color,
            borderWidth: "2px",
          }}
        >
          <div className="text-3xl mb-2">{wish.emoji}</div>
          <h3 className="text-white font-bold text-sm mb-1">{wish.title}</h3>
          <p className="text-white/80 text-xs leading-relaxed">
            {wish.text}
          </p>
        </div>
      ))}
    </div>
  );
}
