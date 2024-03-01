import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const verdana = localFont({
  src: '../../public/Verdana.woff2',
  variable: '--font-verdana',
});

export const metadata: Metadata = {
  title: "Wizard World",
  description: "Harry Potter's Index App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${verdana.variable} font-theme h-full flex flex-col justify-between`}
    >
      <section className="flex-1">{children}</section>
    </body>
  </html>
  );
}
