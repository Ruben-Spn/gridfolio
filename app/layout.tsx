import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const Dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Ruben Spaan - Portfolio",
  description: "A portfolio by and about Ruben Spaan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Dmsans.variable} antialiased flex items-center justify-center min-h-screen w-screen text-[#f7f9f9]`}
      >
        {children}
      </body>
    </html>
  );
}
