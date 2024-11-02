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
      <div className="text-center font-blanka text-3xl md:text-5xl">
        TARIFS ET RESERVATION
      </div>
      <div className="flex w-full max-w-[1048px] flex-col gap-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex w-full flex-col items-center gap-8 text-center">
            <div className="flex flex-col gap-8 bg-primary px-8 py-4 text-center text-black">
              <div className="w-full text-2xl font-bold underline decoration-4 underline-offset-8">
                RÉSERVATION
              </div>
              <div className="flex flex-col gap-2">
                <p className="whitespace-pre-line font-bold">
                  {`Prochainement, réservations en ligne !`}
                </p>
                <p className="whitespace-pre-line">
                  {`En attendant, pour plus d'informations ou pour effectuer une réservation,
                    n'hésitez pas à contacter notre équipe par e-mail à `}
                </p>
                <a
                  className="whitespace-nowrap text-xl font-semibold"
                  href="mailto:contact@h3-studios.fr?subject=Réservation+d%27un+studio"
                  target="_blank"
                >
                  contact@h3-studios.fr
                </a>
                <p>{"ou à joindre Marcel par téléphone au "}</p>
                <a
                  className="whitespace-nowrap text-xl font-semibold"
                  href="tel:0613440875"
                  target="_blank"
                >
                  06 13 44 08 75
                </a>
              </div>
            </div>
            <div className="text-center font-blanka text-2xl">
              {"LES STUDIOS"}
            </div>
            <div className="flex w-full flex-col gap-4">
              <Table
                theme={customTheme}
                striped
                className="w-full border-8 border-primary text-center"
              >
                <TableHead>
                  <TableHeadCell className="hidden sm:table-cell"></TableHeadCell>
                  <TableHeadCell></TableHeadCell>
                  <TableHeadCell>
                    Studio <span className="whitespace-nowrap">La Scène</span>
                  </TableHeadCell>
                  <TableHeadCell>
                    Studio <span className="whitespace-nowrap">Le Podium</span>
                  </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                  <TableRow>
                    <TableCell rowSpan={2} className="hidden sm:table-cell">
                      <b>
                        Groupe{" "}
                        <span className="whitespace-nowrap">(3 ou +)</span>
                      </b>
                    </TableCell>
                    <TableCell>
                      <b className="mb-2 block sm:hidden">
                        Groupe{" "}
                        <span className="whitespace-nowrap">(3 ou +)</span>
                        <br />
                      </b>
                      Avant 18h
                    </TableCell>
                    <TableCell>18€/Heure</TableCell>
                    <TableCell>15€/Heure</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <b className="mb-2 block sm:hidden">
                        Groupe{" "}
                        <span className="whitespace-nowrap">(3 ou +)</span>
                        <br />
                      </b>
                      <span className="whitespace-nowrap">
                        Après 18h /
                      </span>{" "}
                      <span className="whitespace-nowrap">Week-end /</span>{" "}
                      <span className="whitespace-nowrap">Jours fériés</span>
                    </TableCell>
                    <TableCell>22€/Heure</TableCell>
                    <TableCell>18€/Heure</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell rowSpan={2} className="hidden sm:table-cell">
                      <b>Duo</b>
                    </TableCell>
                    <TableCell>
                      <b className="mb-2 block sm:hidden">
                        Duo
                        <br />
                      </b>
                      En semaine
                    </TableCell>
                    <TableCell>10€/Heure</TableCell>
                    <TableCell>8€/Heure</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <b className="mb-2 block sm:hidden">
                        Duo
                        <br />
                      </b>
                      <span className="whitespace-nowrap">Week-end /</span>{" "}
                      <span className="whitespace-nowrap">Jours fériés</span>
                    </TableCell>
                    <TableCell>12€/Heure</TableCell>
                    <TableCell>10€/Heure</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell rowSpan={2} className="hidden sm:table-cell">
                      <b>Solo / Enseignant</b>
                    </TableCell>
                    <TableCell>
                      <b className="mb-2 block sm:hidden">
                        Solo / Enseignant
                        <br />
                      </b>
                      En semaine
                    </TableCell>
                    <TableCell>8€/Heure</TableCell>
                    <TableCell>6€/Heure</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <b className="mb-2 block sm:hidden">
                        Solo / Enseignant
                        <br />
                      </b>
                      <span className="whitespace-nowrap">Week-end /</span>{" "}
                      <span className="whitespace-nowrap">Jours fériés</span>
                    </TableCell>
                    <TableCell>10€/Heure</TableCell>
                    <TableCell>8€/Heure</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="text-center font-blanka text-2xl">
              {"ENREGISTREMENT ET LOCATIONS"}
            </div>
            <div className="flex w-full flex-col gap-4">
              <Table
                theme={customTheme}
                striped
                className="w-full border-8 border-primary text-center"
              >
                <TableBody className="divide-y">
                  <TableRow>
                    <TableCell>
                      <div className="flex flex-col">
                        <b>Prise de son</b>
                        <span>(nous contacter pour le mixage éventuel)</span>
                      </div>
                    </TableCell>
                    <TableCell className="flex flex-col gap-2">
                      <span>50€/Heure</span>
                      <span>170€/Demi-Journée</span>
                      <span>320€/Journée</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <b>Locations</b>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                        <span>Cymbale crash : 1€/Heure</span>
                        <span>
                          Micro supplémentaire (5ème ou +) : 1€/Heure{" "}
                          <span className="text-xs">
                            (plafonné à 3€/séance)
                          </span>
                        </span>
                        <span>
                          Instruments : 2€/Heure{" "}
                          <span className="text-xs">
                            (plafonné à 5€/séance)
                          </span>
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
