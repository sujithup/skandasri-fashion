import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skandashree Fashion",
  description:
  "Clothing store e-commerce website by Skandashree Fashion",
  alternates: {
    canonical: "https://www.skandashreefashions.com/",
  },
  openGraph: {
    title: "Skandashree Fashion",
    description:
    "Clothing store e-commerce website by Skandashree Fashion",
    url: "https://www.skandashreefashions.com/",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/sXGd8zLh/skanda-1.jpg",
        width: 1200,
        height: 630,
        alt: "Skandashree BG pic",
      },
    ],
    authors: ["Skandashree"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
