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
  metadataBase: new URL("https://hannahyesmunt.vercel.app"),
  title: "Hannah Yesmunt - Portfolio",
  description: "Designer / Product Developer focused on technical design, product workflows, and inclusive apparel solutions",
  openGraph: {
    title: "Hannah Yesmunt - Portfolio",
    description: "Designer / Product Developer focused on technical design, product workflows, and inclusive apparel solutions",
    images: [
      {
        url: "/images/about/SAdetroit1.jpg",
        width: 800,
        height: 1000,
        alt: "Hannah Yesmunt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hannah Yesmunt - Portfolio",
    description: "Designer / Product Developer focused on technical design, product workflows, and inclusive apparel solutions",
    images: ["/images/about/SAdetroit1.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
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
          <main className="flex-1 px-4 md:pl-24 md:pr-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
