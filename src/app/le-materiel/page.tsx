import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import type { CustomFlowbiteTheme } from "flowbite-react";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
} from "flowbite-react";

export const metadata: Metadata = {
  title: "H3 STUDIOS - Le Matériel",
  description:
    "H3 STUDIOS - Répétitions - Enregistrements - Location de matériel - Cours de Batterie - Privatisation - Ateliers d'arrangements musicaux",
};

const customTheme: CustomFlowbiteTheme["table"] = {
  root: {
    base: "w-full text-left text-sm text-white",
    shadow:
      "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
    wrapper: "relative",
  },
  body: {
    base: "group/body",
    cell: {
      base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
    },
  },
  head: {
    base: "group/head text-xs uppercase text-white",
    cell: {
      base: "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-900",
    },
  },
  row: {
    base: "group/row border-primary",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped: "odd:bg-black-800 even:bg-black-700",
  },
};

export default async function Home() {
  return (
    <div className="flex min-h-fit grow flex-col items-center justify-center gap-8 pb-8 pt-32">
      <ScrollUp />
      <div className="flex w-full flex-col gap-16">
        <div className="text-center font-blanka text-5xl lg:text-6xl">
          LE MATERIEL
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-center font-blanka text-2xl lg:text-3xl">
            EQUIPEMENT DES STUDIOS
          </div>
          <Table
            theme={customTheme}
            striped
            className="border-8 border-primary"
          >
            <TableHead>
              <TableHeadCell></TableHeadCell>
              <TableHeadCell>Studio La Scène</TableHeadCell>
              <TableHeadCell>Studio Le Podium</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow>
                <TableCell>Batterie</TableCell>
                <TableCell>
                  YAMAHA recording 9000 6 fûts (caisse claire Premier série pro
                  XPK)
                </TableCell>
                <TableCell>
                  Pearl DLX pro 6 fûts (Cymbale ride + Charlé Sabian)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Amplificateurs - Basse</TableCell>
                <TableCell>
                  Trace Eliot GP7 SM 250w (rms) + Boomer Fender 300w (rms)
                </TableCell>
                <TableCell>AMPEQ Rocket bass RB210 500w</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Amplificateurs - Guitare</TableCell>
                <TableCell>
                  Marshall Valvestate VS 265, Fender performer 1000, Laney GC
                  120c, Marshall acoustic AS 50D, Hugues & Kettner Warp 7
                </TableCell>
                <TableCell>
                  Marshall Valvestate 80V, Fender Superamp, Roland acoustic
                  Chorus AC-60, Vox DA5
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sonorisation - Table mixage / effets</TableCell>
                <TableCell>
                  Mackie SR 24.4, Compresseur Boss CL-50, Reverb TC Electronic
                  M-2000, EQ Alesis M-EQ230
                </TableCell>
                <TableCell>YAMAHA EMX 2000 effets intégrés</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sonorisation - Amplification</TableCell>
                <TableCell>
                  Dynacord L2800 FD, Montarbo 402, Enceintes DAS 2x400w, caisson
                  basse 2x500w
                </TableCell>
                <TableCell>
                  Dynacord PAA 300, Bose 802 série II / DAS / Ross (2x450w en
                  tout), caisson 502B
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Retours</TableCell>
                <TableCell>
                  Ampli ROSS méga Amp 800, Enceintes DAS 2x300w, Laney amplifiés
                  2x200w
                </TableCell>
                <TableCell>Ampli aeq 301, Enceintes ROSS</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col gap-8 xl:flex-row">
          <div className="flex flex-col gap-8 xl:basis-1/2">
            <div className="text-center font-blanka text-2xl lg:text-3xl">
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
            <div className="text-center font-blanka text-2xl lg:text-3xl">
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
