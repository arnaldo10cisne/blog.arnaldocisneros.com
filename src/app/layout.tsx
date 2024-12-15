import type { Metadata } from "next";
import "./lib/_globals.scss";
import { Footer } from "./ui/footer/Footer";
import { Navbar } from "./ui/navbar/Navbar";
import { FONT_MONTSERRAT } from "./lib/fonts";

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
      <body className={`${FONT_MONTSERRAT.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
