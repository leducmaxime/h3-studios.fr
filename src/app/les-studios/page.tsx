import ScrollUp from "@/components/Common/ScrollUp";
import ExportedImage from "next-image-export-optimizer";
import { Metadata } from "next";
import { Carousel } from "flowbite-react";

import image1 from "public/images/les-studios/1.jpg";
import image2 from "public/images/les-studios/2.jpg";
import image3 from "public/images/les-studios/3.jpg";

export const metadata: Metadata = {
  title: "H3 STUDIOS - Les Studios",
  description:
    "H3 STUDIOS - Répétitions - Enregistrements - Location de matériel - Cours de Batterie - Privatisation - Ateliers d'arrangements musicaux",
};

const studios = [
  {
    name: "LA SCÈNE",
    size: "42 M2",
    description:
      "Avec une hauteur de 3,50 m, notre studio propose une scène intimiste avec sa rampe d’éclairage, un écran géant et un vidéoprojecteur. Convenant à tous styles musicaux, ce lieu chaleureux et fonctionnel saura répondre à vos besoins.",
    images: [image1, image2, image3],
  },
  {
    name: "LE PODIUM",
    size: "35 M2",
    description:
      "Conçu pour la répétition, cet espace offre un cadre simple et fonctionnel, idéal pour vos sessions musicales, en groupe ou en solo. Cette salle est également adapté aux enseignants souhaitant donner des cours à un ou plusieurs élèves.",
    images: [image1, image2, image3],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-fit grow flex-col items-center justify-center gap-8 pb-8 pt-32">
      <ScrollUp />
      <div className="font-blanka text-5xl lg:text-6xl">LES STUDIOS</div>
      <div className="flex w-full flex-col gap-8 lg:flex-row">
        {studios.map((studio, i) => (
          <div
            key={i}
            className="flex w-full flex-col items-center gap-6 border-8 border-primary p-4 lg:w-1/2"
          >
            <div className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
              {studio.name}
            </div>
            <div className="font-blanka text-2xl">{studio.size}</div>
            <div className="h-48 w-full px-8">
              <Carousel slideInterval={3000}>
                {studio.images.map((image, i) => (
                  <ExportedImage key={i} src={image} alt={studio.name} />
                ))}
              </Carousel>
            </div>
            <div className="px-16 text-center text-lg font-semibold">
              {studio.description}
            </div>
            <a
              href="https://www.quickstudio.com/en/studios/h3-studios"
              target="_blank"
            >
              <button className="rounded-[3rem] bg-primary px-12 py-4 text-[1rem] font-bold text-black md:text-[1.5rem]">
                Réservation
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
