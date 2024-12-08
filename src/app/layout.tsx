import type { Metadata } from "next";
import localFont from "next/font/local";
import "./lib/_globals.scss";
import Footer from "./ui/footer/Footer";
import Navbar from "./ui/navbar/Navbar";

const geistSans = localFont({
  src: "./lib/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./lib/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arnaldo Cisneros | Blog",
  description: "Personal Blog to share with others what I know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
