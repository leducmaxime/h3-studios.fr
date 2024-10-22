// import Footer from "@/components/Footer";
import { Metadata } from "next";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

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

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
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
          </Providers>
        </div>
      </body>
    </html>
  );
}
