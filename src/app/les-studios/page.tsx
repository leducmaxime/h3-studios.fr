import { promises as fs } from "fs";
import path from "path";
import ScrollUp from "@/components/Common/ScrollUp";
import ExportedImage from "next-image-export-optimizer";
import { Metadata } from "next";
import { Carousel } from "flowbite-react";

import scene1 from "public/images/les-studios/scene-1.jpg";
import scene2 from "public/images/les-studios/scene-2.jpg";
import scene3 from "public/images/les-studios/scene-3.jpg";
import scene4 from "public/images/les-studios/scene-4.jpg";
import scene5 from "public/images/les-studios/scene-5.jpg";

import podium1 from "public/images/les-studios/podium-1.jpg";
import podium2 from "public/images/les-studios/podium-2.jpg";
import podium3 from "public/images/les-studios/podium-3.jpg";

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
    images: [scene1, scene2, scene3, scene4, scene5],
  },
  {
    name: "LE PODIUM",
    size: "35 M2",
    description:
      "Conçu pour la répétition, cet espace offre un cadre simple et fonctionnel, idéal pour vos sessions musicales, en groupe ou en solo. Cette salle est également adapté aux enseignants souhaitant donner des cours à un ou plusieurs élèves.",
    images: [podium1, podium2, podium3],
  },
];

export default async function Home() {
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
            <div className="aspect-video w-full px-8">
              <Carousel slideInterval={3000}>
                {studio.images.map((image, i) => (
                  <ExportedImage
                    key={i}
                    src={image}
                    alt={`${studio.name} - ${i}`}
                    sizes="(min-width: 576px) 306px, 624px"
                    className="min-h-full object-cover"
                  />
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
