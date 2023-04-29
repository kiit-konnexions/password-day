/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import HintCard from "@/components/HintCard";
import GamePlay from "@/components/fragments/GamePlay";
import { useContext, useState } from "react";
import Congratulations from "@/components/fragments/Congratulations";
import ThankYou from "@/components/fragments/ThankYou";
import Oops from "@/components/fragments/Oops";
import StateContext from "@/context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { fragmentState, setFragmentState } = useContext(StateContext);

  return (
    <div className="h-screen w-screen fixed inset-0 overflow-hidden">
      <div className="relative h-screen w-screen overflow-hidden">
        <img
          src="/lock.png"
          className="absolute z-0 bottom-6 right-0 w-[250px] hidden lg:block"
          alt=""
        />
        <div className="absolute z-10 inset-0 h-screen w-screen overflow-y-auto px-6 py-6 lg:px-28 lg:py-16 font-poppins">
          {fragmentState === "gamePlay" ? (
            <GamePlay />
          ) : fragmentState === "congratulations" ? (
            <Congratulations />
          ) : fragmentState === "thankYou" ? (
            <ThankYou />
          ) : fragmentState === "oops" ? (
            <Oops />
          ) : null}
        </div>
      </div>
    </div>
  );
}
