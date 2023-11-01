import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-inter`}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
