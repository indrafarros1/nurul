import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy 25th Birthday Nurul Barokah! 🎂",
  description: "Selamat Ulang Tahun ke-25 untuk Nurul Barokah yang istimewa!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
