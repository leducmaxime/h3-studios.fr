"use client";

// import Footer from "@/components/Footer";
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
    <html suppressHydrationWarning lang="fr">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="preload" href="/images/background.webp" as="image" />
        <link
          rel="preload"
          href="https://fonts.cdnfonts.com/s/18915/Blanka-Regular.woff"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.cdnfonts.com/css/blanka"
          rel="stylesheet"
          type="text/css"
        />
      </head>

      <body
        className={`h-screen bg-[url('/images/background.webp')] ${inter.className}`}
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
