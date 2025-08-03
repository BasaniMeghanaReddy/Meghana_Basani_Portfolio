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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
            <p>&copy; 2024 Meghana Basani. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
