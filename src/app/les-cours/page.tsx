import ScrollUp from "@/components/Common/ScrollUp";
import ExportedImage from "next-image-export-optimizer";
import { Metadata } from "next";

import scene1 from "./images/1.png";

export const metadata: Metadata = {
  title: "Les Cours",
};

export default async function Home() {
  return (
    <div className="flex min-h-fit grow flex-col items-center gap-8 pb-8 pt-24">
      <ScrollUp />
      <div className="font-blanka text-3xl md:text-5xl">LES COURS</div>
      <div className="flex w-full flex-col gap-8 border-8 border-primary bg-black p-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex items-center lg:basis-1/2">
            <ExportedImage
              src={scene1}
              alt={"Marcel HAMON"}
              sizes=""
              className="h-full object-cover object-left"
              priority
            />
          </div>
          <div className="flex flex-col gap-8 text-center lg:basis-1/2 lg:text-left">
            <div className="text-2xl font-bold text-primary underline decoration-4 underline-offset-8">
              BATTERIE
            </div>
            <p className="whitespace-pre-line">
              {`Vous souhaitez apprendre la batterie ou perfectionner votre technique ? 
=> Je vous propose des cours particuliers dans mes studios.
Fort de 30 ans d’enseignement d’enseignement en batterie et percussions dans plusieurs conservatoires (DESCRIPTION).

• Pédagogie adaptée à chaque élève, du débutant au musicien avancé
• Un répertoire varié : rock, jazz, musique contemporaine
• Techniques de jeu, lecture de partitions et développement de votre style personnel

📍 Cours en présentiel uniquement !

N'attendez plus pour donner vie à votre passion musicale ! Contactez-moi dès maintenant pour plus d’informations ou pour réserver votre première leçon.`}
            </p>
            <div className="text-2xl font-bold text-primary underline decoration-4 underline-offset-8">
              ATELIER ARRANGEMENT
            </div>
            <p className="whitespace-pre-line">{`Prochainement…`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
