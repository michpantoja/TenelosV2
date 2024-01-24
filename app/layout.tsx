import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Topbar from "@/components/Navbars/Topbar";

const ss3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ten ELOs | Live Tennis Elo Ratings on Hard, Clay, and Grass",
  description:
    "Stay updated with real-time tennis ELO ratings for your favorite players. Find in-depth player statistics, rankings, and historical data on this live tennis Elo ratings website.",
  keywords:
    "tennis Elo ratings, live tennis rankings, tennis player statistics, tennis Elo system, tennis ratings history, player rankings, live tennis data, Elo ratings website, tennis analytics, tennis ratings database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ss3.className}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
