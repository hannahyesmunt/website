import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Tourney } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tourney = Tourney({
  variable: "--font-tourney",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hannah Yesmunt - Portfolio",
  description: "Assistant Designer / Assistant Product Developer focused on technical design, product workflows, and inclusive apparel solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${tourney.variable} antialiased flex min-h-screen`}
      >
        <Header />
        <div className="flex flex-col flex-1 md:ml-48 pt-16 md:pt-0">
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
