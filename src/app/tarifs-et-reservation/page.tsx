import ScrollUp from "@/components/Common/ScrollUp";
// import ExportedImage from "next-image-export-optimizer";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeadCell,
} from "flowbite-react";
import { Metadata } from "next";

// import scene1 from "./images/1.png";
import { customTheme } from "../theme";

export const metadata: Metadata = {
  title: "Tarifs et Réservations",
};

export default async function Home() {
  return (
    <div className="flex min-h-fit grow flex-col items-center gap-8 pb-8 pt-24">
      <ScrollUp />
      <div className="font-blanka text-3xl md:text-5xl">
        TARIFS ET RESERVATION
      </div>
      <div className="flex w-full max-w-[1048px] flex-col gap-8 border-8 border-primary bg-black p-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* <div className="flex items-center lg:basis-3/5"> */}
          {/*   <ExportedImage */}
          {/*     src={scene1} */}
          {/*     alt={"Marcel HAMON"} */}
          {/*     sizes="" */}
          {/*     className="min-h-full object-cover" */}
          {/*     priority */}
          {/*   /> */}
          {/* </div> */}
          <div className="flex w-full flex-col items-center gap-8 text-center">
            <div className="flex w-full flex-col gap-8 bg-primary p-4 text-center text-black">
              <div className="w-full text-2xl font-bold underline decoration-4 underline-offset-8">
                RÉSERVATION
              </div>
              <div>
                <p className="whitespace-pre-line">
                  {`Pour plus d'informations ou pour effectuer une réservation,
                    n'hésitez pas à contacter notre équipe par e-mail à `}
                </p>
                <a
                  className="whitespace-nowrap font-semibold"
                  href="mailto:contact@h3-studios.fr"
                >
                  contact@h3-studios.fr
                </a>
                <p>{"ou à joindre Marcel par téléphone au "}</p>
                <a
                  className="whitespace-nowrap font-semibold"
                  href="tel:0613440875"
                >
                  06 13 44 08 75
                </a>
              </div>
            </div>
            <div className="text-center font-blanka text-2xl">
              {"LES TARIFS"}
            </div>
            <Table
              theme={customTheme}
              striped
              className="border-8 border-primary text-center"
            >
              <TableHead>
                <TableHeadCell></TableHeadCell>
                <TableHeadCell>Studio La Scène</TableHeadCell>
                <TableHeadCell>Studio Le Podium</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow>
                  <TableCell>
                    <div className="flex flex-col gap-2">
                      <b>Groupes (3 ou +)</b>
                      <span></span>
                      <span>Avant 18h</span>
                      <span> Après 18h / Week-end / Jours fériés</span>
                    </div>
                  </TableCell>
                  <TableCell className="align-bottom">
                    <div className="flex flex-col gap-2">
                      <span>18€ / Heure</span>
                      <span>22€ / Heure</span>
                    </div>
                  </TableCell>
                  <TableCell className="align-bottom">
                    <div className="flex flex-col gap-2">
                      <span>15€ / Heure</span>
                      <span>18€ / Heure</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-col">
                      <b>Solo / Duo</b>
                    </div>
                  </TableCell>
                  <TableCell>8€ / Heure</TableCell>
                  <TableCell>6€ / Heure</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-col">
                      <b>Prise de son</b>
                      <span>(nous contacter pour le mixage éventuel)</span>
                    </div>
                  </TableCell>
                  <TableCell colSpan={2}>
                    50€ / Heure
                    <br />
                    160€ / Demi-Journée
                    <br />
                    320€ / Journée
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Locations</b>
                  </TableCell>
                  <TableCell className="text-right">
                    Cymbale crash :
                    <br />
                    Micro supplémentaire (5ème ou +) :
                    <br />
                    Instruments :
                  </TableCell>
                  <TableCell className="text-left">
                    1€ / Heure
                    <br />
                    1€ / Heure{" "}
                    <span className="text-xs">(plafonné à 3€ / séance)</span>
                    <br /> 2€ / Heure{" "}
                    <span className="text-xs">(plafonné à 5€ / séance)</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {/* <div className="w-full text-2xl font-bold text-primary underline decoration-4 underline-offset-8"> */}
            {/*   LOCATION STUDIO */}
            {/* </div> */}
            {/* <p className="w-full whitespace-pre-line">{`Tarif groupe : de 15€ à 22€ par Heure */}
            {/*   Tarif enseignants/Solo : de 6€ à 8€ par Heure`}</p> */}
            {/* <div className="w-full text-2xl font-bold text-primary underline decoration-4 underline-offset-8"> */}
            {/*   ENREGISTREMENT */}
            {/* </div> */}
            {/* <p className="w-full whitespace-pre-line">{`1h : 50€ */}
            {/*   Demi journée : 170€ */}
            {/*   Journée : 320€`}</p> */}
            {/* <div className="w-full text-2xl font-bold text-primary underline decoration-4 underline-offset-8"> */}
            {/*   COURS DE BATTERIE */}
            {/* </div> */}
            {/* <p className="w-full whitespace-pre-line">{`Nous contacter`}</p> */}
            {/* <div className="w-full text-2xl font-bold text-primary underline decoration-4 underline-offset-8"> */}
            {/*   ATELIERS */}
            {/* </div> */}
            {/* <p className="w-full whitespace-pre-line">{`Nous contacter`}</p> */}
            {/* <div className="w-full text-2xl font-bold text-primary underline decoration-4 underline-offset-8"> */}
            {/*   PRIVATISATION */}
            {/* </div> */}
            {/* <p className="w-full whitespace-pre-line">{`Nous contacter`}</p> */}
            {/* <div className="w-full text-2xl font-bold text-primary underline decoration-4 underline-offset-8"> */}
            {/*   FORMATEURS */}
            {/* </div> */}
            {/* <p className="w-full whitespace-pre-line">{`Nous contacter`}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
