import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Skandasri Fashion",
  description:
  "Clothing store e-commerce website by Skandasri Fashion",
  alternates: {
    canonical: "https://www.skandashreefashions.com/",
  },
  openGraph: {
    title: "Skandasri Fashion",
    description:
    "Clothing store e-commerce website by Skandasri Fashion",
    url: "https://www.skandashreefashions.com/",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/MH8D5FhB/skanda.jpg",
        width: 1200,
        height: 630,
        alt: "Skandasri BG pic",
      },
    ],
    authors: ["Skandasri"],
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
