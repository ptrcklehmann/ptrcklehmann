import "./globals.css";
import styles from "./page.module.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { Header } from "./components/header";
import type { Metadata } from "next";
import { InitialTransition } from "./components/transitions/initial";
import { ProfileAnchorProvider } from "./hooks/useProfileAnchor";
import StyledComponentsRegistry from "./lib/registry";

const polysans = localFont({
  src: [
    {
      path: "../assets/fonts/PolySans-Slim.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PolySans-MedianWide.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--polysans" as const,
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
      <body className={polysans.className}>
        <StyledComponentsRegistry>
          <ThemeProvider enableSystem>
            <ProfileAnchorProvider>
              <InitialTransition />
              <Header />
              <main className={styles.main}>{children}</main>
            </ProfileAnchorProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
