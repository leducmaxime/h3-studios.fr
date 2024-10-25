import ScrollUp from "@/components/Common/ScrollUp";
import ExportedImage from "next-image-export-optimizer";

import image1 from "./images/1.png";
import image2 from "./images/2.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-4 flex min-h-fit grow flex-col items-center justify-between pb-8 pt-12">
      <div className="basis-1/3"></div>
      <div className="flex h-full flex-col items-center justify-between gap-8">
        <ScrollUp />
        <ExportedImage
          src={image1}
          alt="H3 Studios"
          placeholder="empty"
          sizes="(max-width: 750px) 100vw, 750px"
          priority
          className="lg:-mb-16 lg:w-[750px]"
        />
        <ExportedImage
          src={image2}
          alt="Répétitions - Enregistrements"
          placeholder="empty"
          sizes="(max-width: 650px) 100vw, 650px"
          priority
          className="lg:w-[650px]"
        />
        <div className="text-center font-blanka text-lg md:text-2xl">
          {[
            "Location de studios",
            "Repetitions",
            "Enregistrements",
            "Location de materiel",
            "Cours de Batterie",
            "Privatisation",
            "Ateliers d'arrangements musicaux",
          ].map((text, i, a) => (
            <>
              <span key={i} className="whitespace-nowrap">
                {text}
                {i !== a.length - 1 ? " -" : ""}
              </span>{" "}
            </>
          ))}
        </div>
        <Link href="/tarifs-et-reservation">
          <button className="rounded-[3rem] bg-primary px-12 py-4 text-xl font-bold text-black md:text-2xl">
            Réservation
          </button>
        </Link>
      </div>
      <div className="basis-2/3"></div>
    </div>
  );
}
