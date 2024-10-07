"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={`h-screen bg-[url('/images/background.png')] ${inter.className}`}
      >
        <div className="h-screen w-screen overflow-y-auto overflow-x-hidden text-white">
          <Providers>
            <Header />
            <div className="container flex h-full flex-col justify-between">
              {children}
              {/* <Footer /> */}
            </div>
            <ScrollToTop />
          </Providers>
        </div>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
