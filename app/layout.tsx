import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Loading from "./components/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kong Nai - Computer Science Portfolio",
  description:
    "Portfolio of Kong Nai, a third-year Computer Science undergraduate. Projects in graphics, networking, security, and systems.",
  openGraph: {
    title: "Kong Nai - Computer Science Portfolio",
    description:
      "Third-year CS undergraduate passionate about low-level systems, real-time graphics, and reliable networked software.",
    siteName: "Kong Nai Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kong Nai - Computer Science Portfolio",
    description:
      "Third-year CS undergraduate passionate about systems, graphics, and networking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Background />
        <Loading />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
