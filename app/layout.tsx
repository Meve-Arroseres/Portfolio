import { Audiowide, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"], variable: "--font-audiowide" });
const orbitron = Orbitron({ weight: ["400","700"], subsets: ["latin"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({ weight: ["400","700"], subsets: ["latin"], variable: "--font-rajdhani" });

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${audiowide.variable} ${orbitron.variable} ${rajdhani.variable}`}>
      <body>{children}</body>
    </html>
  );
}

