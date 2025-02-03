import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/app/components/Sidebar";
import Cursor from "@/app/components/Cursor";
import AnimatedHeader from "@/app/components/AnimatedHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "eightysixheadgear",
  description: "Welcome to 86headgear.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
       
        <main className="flex flex-row min-h-screen w-screen">{children} <AnimatedHeader />  <Sidebar /> <Cursor /> </main>
      </body>
    </html>
  );
}
