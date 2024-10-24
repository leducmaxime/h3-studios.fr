// import Footer from "@/components/Footer";
import { Metadata } from "next";
import Header from "@/components/Header";
import localFont from "next/font/local";
import "../styles/index.css";

const now = localFont({
  src: [
    { path: "./Now-Thin.woff", weight: "250" },
    { path: "./Now-Light.woff", weight: "300" },
    { path: "./Now-Regular.woff", weight: "400" },
    { path: "./Now-Medium.woff", weight: "500" },
    { path: "./Now-Bold.woff", weight: "700" },
    { path: "./Now-Black.woff", weight: "900" },
  ],
  display: "swap",
  variable: "--font-now",
});

const blanka = localFont({
  src: "./Blanka-Regular.woff",
  weight: "400",
  display: "swap",
  variable: "--font-blanka",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tmp.h3-studios.fr"),
  title: {
    template: "%s | H3 STUDIOS",
    default: "H3 STUDIOS",
  },
  description:
    "H3 STUDIOS - Répétitions - Enregistrements - Location de matériel - Cours de Batterie - Privatisation - Ateliers d'arrangements musicaux",
  openGraph: {
    siteName: "H3 STUDIOS",
    images: [
      {
        url: "/images/opengraph.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preload" href="/images/background.webp" as="image" />
      </head>

      <body
        className={`h-screen bg-[url('/images/background.webp')] bg-[length:500px] bg-repeat ${now.variable} ${blanka.variable}`}
      >
        <div className="h-screen w-screen overflow-y-auto overflow-x-hidden text-white">
          <Header />
          <div className="container flex h-full flex-col justify-between">
            {children}
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
