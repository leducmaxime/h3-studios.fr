import ScrollUp from "@/components/Common/ScrollUp";
import ExportedImage from "next-image-export-optimizer";
import { Metadata } from "next";

import image1 from "public/images/home/1.png";
import image2 from "public/images/home/2.png";
import image3 from "public/images/home/3.png";

export const metadata: Metadata = {
  title: "H3 STUDIOS",
  description:
    "H3 STUDIOS - Répétitions - Enregistrements - Location de matériel - Cours de Batterie - Privatisation - Ateliers d'arrangements musicaux",
};

export default function Home() {
  return (
    <div className="mx-8 flex min-h-fit grow flex-col items-center justify-center gap-8 pb-8 pt-32">
      <ScrollUp />
      <ExportedImage
        src={image1}
        alt="H3 Studios"
        placeholder="empty"
        sizes="(max-width: 750px) 100vw, 750px"
        priority
        className="xl:w-[750px]"
      />
      <ExportedImage
        src={image2}
        alt="Répétitions - Enregistrements"
        placeholder="empty"
        sizes="(max-width: 650px) 100vw, 650px"
        priority
        className="lg:w-[650px]"
      />
      <div className="text-center font-blanka text-lg md:text-2xl">
        {[
          "Location de materiel",
          "Cours de Batterie",
          "Privatisation",
          "Ateliers d'arrangements musicaux",
        ].map((text, i, a) => (
          <>
            <span key={i} className="whitespace-nowrap">
              {text}
              {i !== a.length - 1 ? " -" : ""}
            </span>{" "}
          </>
        ))}
      </div>
      <a
        href="https://www.quickstudio.com/en/studios/h3-studios"
        target="_blank"
      >
        <button className="mt-8 rounded-[3rem] bg-primary px-8 py-2 text-[1rem] font-bold text-black md:text-[2rem]">
          Réservation
        </button>
      </a>
    </div>
  );
}
