import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jack Henza | Tech Portfolio",
  description: "Tech portfolio and resume of Jack Henza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col justify-between">
          <div className="bg-base-100 text-base-content flex-grow">
            <Navbar />
            <main className="p-10 max-w-screen-xl mx-auto">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
