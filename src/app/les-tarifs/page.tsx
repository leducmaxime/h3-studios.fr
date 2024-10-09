import ScrollUp from "@/components/Common/ScrollUp";
import ExportedImage from "next-image-export-optimizer";
import { Metadata } from "next";

import scene1 from "public/images/les-tarifs/1.jpg";

export const metadata: Metadata = {
  title: "H3 STUDIOS - Les Course",
  description:
    "H3 STUDIOS - Répétitions - Enregistrements - Location de matériel - Cours de Batterie - Privatisation - Ateliers d'arrangements musicaux",
};

export default async function Home() {
  return (
    <div className="flex min-h-fit grow flex-col items-center gap-8 pb-8 pt-32">
      <ScrollUp />
      <div className="font-blanka text-5xl lg:text-6xl">LES TARIFS</div>
      <div className="flex w-full max-w-[1048px] flex-col gap-8 border-8 border-primary bg-black p-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col items-center gap-8 text-center lg:basis-2/5 lg:items-start lg:text-left">
            <div>
              <span className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
                LOCATION STUDIO
              </span>
            </div>
            <p className="whitespace-pre-line">{`Tarif groupe : de 15€ à 22€ par heure
Tarif enseignants/Solo : de 6€ à 8€ par heure`}</p>
            <div>
              <span className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
                ENREGISTREMENT
              </span>
            </div>
            <p className="whitespace-pre-line">{`1h : 50€
Demi journée : 170€
Journée : 320€`}</p>
            <div>
              <span className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
                COURS DE BATTERIE
              </span>
            </div>
            <p className="whitespace-pre-line">{`Nous contacter`}</p>
            <div>
              <span className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
                ATELIERS
              </span>
            </div>
            <p className="whitespace-pre-line">{`Nous contacter`}</p>
            <div>
              <span className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
                PRIVATISATION
              </span>
            </div>
            <p className="whitespace-pre-line">{`Nous contacter`}</p>
            <div>
              <span className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
                FORMATEURS
              </span>
            </div>
            <p className="whitespace-pre-line">{`Nous contacter`}</p>
          </div>
          <div className="flex items-center lg:basis-3/5">
            <ExportedImage
              src={scene1}
              alt={"Marcel HAMON"}
              sizes=""
              className="min-h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
