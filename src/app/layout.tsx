import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { Header } from "./components/header";

const geomanist = localFont({
  src: [
    {
      path: "../assets/fonts/Geomanist-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geomanist-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--geomanist" as const,
});

export const metadata: Metadata = {
  title: "Patrick Lehmann Web Developer",
  description:
    "I'm Patrick Lehmann, a creative Developer and your designer's favourite programmer. I create digital experiences with React Native and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geomanist.className}>
        <ThemeProvider enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
