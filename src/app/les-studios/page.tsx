import ScrollUp from "@/components/Common/ScrollUp";
import ExportedImage from "next-image-export-optimizer";
import { Metadata } from "next";
import { Carousel } from "flowbite-react";

import scene1 from "./images/scene-1.jpg";
import scene2 from "./images/scene-2.jpg";
import scene3 from "./images/scene-3.jpg";
import scene4 from "./images/scene-4.jpg";
import scene5 from "./images/scene-5.jpg";

import podium1 from "./images/podium-1.jpg";
import podium2 from "./images/podium-2.jpg";
import podium3 from "./images/podium-3.jpg";
import podium4 from "./images/podium-4.jpg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Les Studios",
};

const studios = [
  {
    name: "LA SCÈNE",
    size: "42 M2",
    description:
      "Avec une hauteur de 3,50m et une superficie de 42m², notre studio propose une scène intimiste avec sa rampe d’éclairage, un écran géant et un vidéoprojecteur. Convenant à tous styles musicaux, ce lieu chaleureux et fonctionnel saura répondre à vos besoins.",
    images: [scene2, scene5, scene3, scene1, scene4],
  },
  {
    name: "LE PODIUM",
    size: "35 M2",
    description:
      "Conçu pour la répétition, cet espace de 35m² offre un cadre simple et fonctionnel, idéal pour vos sessions musicales, en groupe ou en solo. Cette salle est également adapté aux enseignants souhaitant donner des cours à un ou plusieurs élèves.",
    images: [podium2, podium1, podium3, podium4],
  },
];

export default async function Home() {
  return (
    <div className="flex min-h-fit grow flex-col items-center gap-8 pb-8 pt-24">
      <ScrollUp />
      <div className="font-blanka text-3xl md:text-5xl">LES STUDIOS</div>
      <div className="flex w-full flex-col gap-8 lg:max-w-[900px] lg:flex-row">
        {studios.map((studio, i) => (
          <div
            key={i}
            className="flex basis-full flex-col items-center gap-4 border-8 border-primary bg-black p-4 lg:basis-1/2"
          >
            <div className="text-2xl font-bold text-primary underline decoration-4 underline-offset-8">
              {studio.name}
            </div>
            {/* <div className="font-blanka text-2xl">{studio.size}</div> */}
            <div className="w-full px-0 lg:px-0">
              <div className="aspect-video">
                <Carousel slideInterval={3000}>
                  {studio.images.map((image, i) => (
                    <ExportedImage
                      key={i}
                      src={image}
                      alt={`${studio.name} - ${i}`}
                      sizes="(max-width: 992px) 80vw, 386px"
                      className="min-h-full object-cover"
                      priority={i === 0}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="px-0 text-center lg:px-4">{studio.description}</div>
            <div className="mt-auto">
              <Link href="/tarifs-et-reservation">
                <button className="rounded-[3rem] bg-primary px-8 py-2 text-lg font-semibold text-black">
                  Réservation
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
