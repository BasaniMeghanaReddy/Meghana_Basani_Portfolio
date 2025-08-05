import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Meghana Basani - Software Developer & Computer Science Student",
  description: "Portfolio of Meghana Basani, a Computer Science graduate student at NDSU with expertise in software development and machine learning.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-600">
            <p className="text-sm sm:text-base">&copy; 2024 Meghana Basani. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
