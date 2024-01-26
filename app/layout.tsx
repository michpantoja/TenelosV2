import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Topbar from "@/components/Navbars/Topbar";
import Banner from "@/components/Banner";

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
        <main className="w-full px-6 xl:px-32 pb-4 xl:pb-8 gap-6 flex flex-col">
          <Banner />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
