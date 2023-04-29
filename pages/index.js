/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import HintCard from "@/components/HintCard";
import GamePlay from "@/components/fragments/GamePlay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen w-screen fixed inset-0 overflow-hidden">
      <div className="relative h-full w-full overflow-hidden">
        <img
          src="/lock.png"
          className="absolute z-0 bottom-6 right-0 w-[250px]"
          alt=""
        />
        <div className="absolute z-10 inset-0 h-full w-full overflow-y-auto px-28 py-16 font-poppins">
          <GamePlay />
        </div>
      </div>
    </div>
  );
}
