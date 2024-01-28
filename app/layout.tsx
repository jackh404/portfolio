import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jack Henza | Tech Portfolio",
  description: "Explore my projects and see what I've been working on.",
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
            <main className="p-6">{children}</main>
          </div>
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Copyright &copy; Studio Fig Tree 2024</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
