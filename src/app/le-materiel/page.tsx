import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Table, TableBody, TableRow, TableCell } from "flowbite-react";
import Equipements from "./equipement";

export const metadata: Metadata = {
  title: "Le Matériel",
};

const customTheme: CustomFlowbiteTheme["table"] = {
  root: {
    base: "w-full text-left text-sm text-white",
    shadow:
      "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md bg-black",
    wrapper: "relative",
  },
  body: {
    base: "group/body",
    cell: {
      base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
    },
  },
  head: {
    base: "group/head text-sm uppercase text-primary",
    cell: {
      base: "border-b border-primary px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg",
    },
  },
  row: {
    base: "group/row border-primary",
    hovered: "hover:bg-gray-600",
    striped: "odd:bg-black-800 even:bg-black-700",
  },
};

export default async function Home() {
  return (
    <div className="flex min-h-fit grow flex-col items-center gap-8 pb-8 pt-32">
      <ScrollUp />
      <div className="flex w-full flex-col gap-16 text-center">
        <div className="font-blanka text-3xl md:text-5xl">LE MATERIEL</div>
        <div className="flex flex-col gap-8">
          <div className="text-center font-blanka text-2xl">
            EQUIPEMENT DES STUDIOS
          </div>
          <Equipements customTheme={customTheme} />
        </div>
        <div className="flex flex-col gap-8 xl:flex-row">
          <div className="flex flex-col gap-8 xl:basis-1/2">
            <div className="text-center font-blanka text-2xl">
              {"EQUIPEMENT D'ENREGISTREMENT"}
            </div>
            <Table
              theme={customTheme}
              striped
              className="border-8 border-primary"
            >
              <TableBody className="divide-y">
                <TableRow>
                  <TableCell>Chant</TableCell>
                  <TableCell>
                    SHURE SM58 x 2 / SM58 beta x 3
                    <br />
                    Sennheiser MD 425 / BF811 x2
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Batterie</TableCell>
                  <TableCell>
                    AKG D112 (x2)
                    <br />
                    Sennheiser e 602
                    <br />
                    SM 57
                    <br />
                    Fûts e604 ; Blackfire 504 / 604 / 521 (x3) / 521 II (x3)
                    <br />
                    Overhead Sennheiser (x2) ; Shure SM 81
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Basse / Guitare</TableCell>
                  <TableCell>
                    AKG D112
                    <br />
                    Sennheiser e609 (x2)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cartes sons</TableCell>
                  <TableCell>Focusrite Scarlett 20 pistes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Logiciels</TableCell>
                  <TableCell>
                    Reaper
                    <br />
                    FL Studio
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col gap-8 xl:basis-1/2">
            <div className="text-center font-blanka text-2xl">
              {"LOCATION D'INSTRUMENTS"}
            </div>
            <Table
              theme={customTheme}
              striped
              className="border-8 border-primary"
            >
              <TableBody className="divide-y">
                <TableRow>
                  <TableCell>Basses / Guitares</TableCell>
                  <TableCell>
                    TUNE 5 cordes
                    <br />
                    Eagle / Greg Bi
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Claviers numériques</TableCell>
                  <TableCell>
                    Roland RD-300 SX / Ensoniq VFX / Korg M1
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Percussions / Cymbales</TableCell>
                  <TableCell>
                    Cajon SELA / Darbouka Meinl
                    <br />
                    Istanbul agop (16’’ + 18’’) / ZILDJIAN Série K (18’’) /
                    Meinl Rakes (14’’) / TOSCO (18’’) / Paiste 402-502 /
                    ZILDJIAN Flashsplash (8’’)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pédale & numérique</TableCell>
                  <TableCell>
                    V-AMP 2 Behringer
                    <br />
                    Native machine+ et M32
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
