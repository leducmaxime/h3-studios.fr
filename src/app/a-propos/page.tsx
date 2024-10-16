import ScrollUp from "@/components/Common/ScrollUp";
import ExportedImage from "next-image-export-optimizer";
import { Metadata } from "next";

import celmar from "./images/celmar.jpg";
import alexandre from "./images/alexandre.jpg";
import caroline from "./images/caroline.jpg";
import Map from "../../components/Common/Map";

export const metadata: Metadata = {
  title: "H3 STUDIOS - Les Course",
  description:
    "H3 STUDIOS - Répétitions - Enregistrements - Location de matériel - Cours de Batterie - Privatisation - Ateliers d'arrangements musicaux",
};

export default async function Home() {
  return (
    <div className="flex min-h-fit grow flex-col items-center gap-8 pb-8 pt-32">
      <ScrollUp />
      <div className="font-blanka text-5xl lg:text-6xl">A PROPOS</div>
      <div className="flex w-full max-w-[1048px] flex-col items-center gap-8 border-8 border-primary bg-black p-8">
        <div className="flex max-w-[768px] flex-col items-center gap-24 text-center">
          <div className="flex max-w-[640px] flex-col items-center gap-8 text-center">
            <p>
              <b>H3 Studios</b>
              {
                ", situé à 2 minutes à pied de la gare de Sucy-Bonneuil, est un lieu originellement dédié aux répétitions/enregistrements de groupes de musique amplifiée, mais permet aussi, de par son architecture et ses équipements, d’accueillir d’autres activités, culturelles ou non."
              }
            </p>
            <span className="text-primary">Vous êtes :</span>
            <ul className="list-none">
              <li>
                {
                  "> Un groupe de musique amplifiée/acoustique, professionnel/amateur, souhaitant répéter, d’enregistrer, se produire dans un lieu adéquat."
                }
              </li>
              <li>
                {
                  "> Un musicien/enseignant, un formateur cherchant un lieu pour travailler, donner des cours, animer des ateliers, dispenser des formations."
                }
              </li>
              <li>
                {
                  "> Une personne souhaitant organiser un évènement particulier dans un lieu spacieux et insonorisé."
                }
              </li>
            </ul>
            <p className="text-2xl font-bold text-primary">
              Un son authentique pour
              <br /> des artistes authentiques !
            </p>
          </div>
          <div className="flex flex-col items-center gap-8 text-center">
            <div>
              <span className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
                {"L'ÉQUIPE"}
              </span>
            </div>
            <div className="flex gap-8">
              {[
                { src: celmar, name: "Marcel" },
                { src: alexandre, name: "Alexandre" },
                { src: caroline, name: "Caroline" },
              ].map((item, index) => (
                <div key={index} className="flex basis-1/3 flex-col gap-8">
                  <ExportedImage
                    src={item.src}
                    alt={item.name}
                    sizes="(max-width: 768px) 33vw, 235px"
                    className="aspect-square rounded-2xl object-cover"
                    priority
                  />
                  <div className="text-xl text-primary">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 text-center">
            <div>
              <span className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
                {"CONTACT"}
              </span>
            </div>
            <div>contact@h3-studios.fr - 06 13 44 08 75</div>
          </div>
          <div className="flex flex-col items-center gap-8 text-center">
            <div>
              <span className="rounded-lg bg-primary p-2 text-2xl font-bold text-black">
                {"LOCALISATION"}
              </span>
            </div>
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="flex flex-col gap-8">
                <p className="whitespace-pre-line">
                  {`En transport en commun : 
                    Gare de Sucy-Bonneuil à 2min à pied
                    RER A - BUS 393 - BUS 308 - BUS 104`}
                </p>
                <p className="whitespace-pre-line">
                  {`En voiture : 
                    Stationnement gratuit dans la rue`}
                </p>
              </div>
              <div>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
