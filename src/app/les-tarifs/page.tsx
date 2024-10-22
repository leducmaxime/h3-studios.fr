import ScrollUp from "@/components/Common/ScrollUp";
import ExportedImage from "next-image-export-optimizer";
import { Metadata } from "next";

import scene1 from "./images/1.png";

export const metadata: Metadata = {
  title: "Les Tarifs",
};

export default async function Home() {
  return (
    <div className="flex min-h-fit grow flex-col items-center gap-8 pb-8 pt-32">
      <ScrollUp />
      <div className="font-blanka text-3xl md:text-5xl">LES TARIFS</div>
      <div className="flex w-full max-w-[1048px] flex-col gap-8 border-8 border-primary bg-black p-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex items-center lg:basis-3/5">
            <ExportedImage
              src={scene1}
              alt={"Marcel HAMON"}
              sizes=""
              className="min-h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-center gap-8 text-center lg:basis-2/5 lg:items-start lg:text-left">
            <div className="text-2xl font-bold text-primary underline decoration-4 underline-offset-8">
              LOCATION STUDIO
            </div>
            <p className="whitespace-pre-line">{`Tarif groupe : de 15€ à 22€ par heure
              Tarif enseignants/Solo : de 6€ à 8€ par heure`}</p>
            <div className="text-2xl font-bold text-primary underline decoration-4 underline-offset-8">
              ENREGISTREMENT
            </div>
            <p className="whitespace-pre-line">{`1h : 50€
              Demi journée : 170€
              Journée : 320€`}</p>
            <div className="text-2xl font-bold text-primary underline decoration-4 underline-offset-8">
              COURS DE BATTERIE
            </div>
            <p className="whitespace-pre-line">{`Nous contacter`}</p>
            <div className="text-2xl font-bold text-primary underline decoration-4 underline-offset-8">
              ATELIERS
            </div>
            <p className="whitespace-pre-line">{`Nous contacter`}</p>
            <div className="text-2xl font-bold text-primary underline decoration-4 underline-offset-8">
              PRIVATISATION
            </div>
            <p className="whitespace-pre-line">{`Nous contacter`}</p>
            <div className="text-2xl font-bold text-primary underline decoration-4 underline-offset-8">
              FORMATEURS
            </div>
            <p className="whitespace-pre-line">{`Nous contacter`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
