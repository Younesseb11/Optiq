import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youness | Optiq — Video Editor",
  description:
    "Youness is a professional video editor specializing in short-form content, brand ads, and cinematic edits for creators and businesses worldwide.",
  metadataBase: new URL("https://optiq.agency"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/fav.ico",
  },
  openGraph: {
    title: "Youness | Optiq — Video Editor",
    description:
      "Youness is a professional video editor specializing in short-form content, brand ads, and cinematic edits for creators and businesses worldwide.",
    url: "https://optiq.agency",
    siteName: "OPTIQ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youness | Optiq — Video Editor",
    description:
      "Youness is a professional video editor specializing in short-form content, brand ads, and cinematic edits for creators and businesses worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-background`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
