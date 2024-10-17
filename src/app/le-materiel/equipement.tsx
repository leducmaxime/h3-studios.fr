import type { CustomFlowbiteTheme } from "flowbite-react";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
} from "flowbite-react";

export default async function Equipements({
  customTheme,
}: {
  customTheme: CustomFlowbiteTheme["table"];
}) {
  const equipmentData = [
    {
      category: "Batterie",
      laScene:
        "YAMAHA recording 9000 6 fûts (caisse claire Premier série pro XPK)",
      lePodium: "Pearl DLX pro 6 fûts (Cymbale ride + Charlé Sabian)",
    },
    {
      category: "Amplificateurs - Basse",
      laScene: "Trace Eliot GP7 SM 250w (rms) + Boomer Fender 300w (rms)",
      lePodium: "AMPEQ Rocket bass RB210 500w",
    },
    {
      category: "Amplificateurs - Guitare",
      laScene:
        "Marshall Valvestate VS 265, Fender performer 1000, Laney GC 120c, Marshall acoustic AS 50D, Hugues & Kettner Warp 7",
      lePodium:
        "Marshall Valvestate 80V, Fender Superamp, Roland acoustic Chorus AC-60, Vox DA5",
    },
    {
      category: "Sonorisation - Table mixage / effets",
      laScene:
        "Mackie SR 24.4, Compresseur Boss CL-50, Reverb TC Electronic M-2000, EQ Alesis M-EQ230",
      lePodium: "YAMAHA EMX 2000 effets intégrés",
    },
    {
      category: "Sonorisation - Amplification",
      laScene:
        "Dynacord L2800 FD, Montarbo 402, Enceintes DAS 2x400w, caisson basse 2x500w",
      lePodium:
        "Dynacord PAA 300, Bose 802 série II / DAS / Ross (2x450w en tout), caisson 502B",
    },
    {
      category: "Retours",
      laScene:
        "Ampli ROSS méga Amp 800, Enceintes DAS 2x300w, Laney amplifiés 2x200w",
      lePodium: "Ampli aeq 301, Enceintes ROSS",
    },
  ];

  return (
    <>
      <Table
        theme={customTheme}
        striped
        className="hidden border-8 border-primary lg:table"
      >
        <TableHead>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>Studio La Scène</TableHeadCell>
          <TableHeadCell>Studio Le Podium</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {equipmentData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.laScene}</TableCell>
              <TableCell>{item.lePodium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table
        theme={customTheme}
        striped
        className="border-8 border-primary lg:hidden"
      >
        <TableHead>
          <TableHeadCell colSpan={2} className="text-center">
            Studio La Scène
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {equipmentData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.laScene}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table
        theme={customTheme}
        striped
        className="border-8 border-primary lg:hidden"
      >
        <TableHead>
          <TableHeadCell colSpan={2} className="text-center">
            Studio Le Podium
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {equipmentData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.lePodium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
