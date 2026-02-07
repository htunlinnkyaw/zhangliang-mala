import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "sonner";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zhangliang Mala POS",
  description: "MMS Connection Projects",
  icons: {
    icon: [
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        rel: "shortcut icon",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  appleWebApp: {
    title: "Zhangliang Mala POS",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
