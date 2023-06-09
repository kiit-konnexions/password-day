/* eslint-disable @next/next/no-img-element */
import StateContext from "@/context/StateContext";
import React, { useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";

function Oops() {
  const { fragmentState, setFragmentState } = useContext(StateContext);
  return (
    <div className="pb-8 lg:pb-0">
      <h1 className="font-extrabold text-primary text-4xl lg:text-6xl mt-8">
        Oops !
      </h1>
      <p className="lg:max-w-[70%] leading-7 lg:leading-8 font-medium text-xs lg:text-sm mt-6 text-primary">
        It seems you have already responded.
      </p>

      <div className="flex items-center space-x-7">
        <button
          onClick={() => {
            try {
              navigator
                .share({
                  title: "Share with friends",
                  text: `On the occasion of World Password Day, KIIT and Konnexions are celebrating it in a new fashion where we would empower you to crack the puzzle. Can you crack it?`,
                  url: "https://passwordday.vercel.app/",
                })
                .then(() => {
                  toast.success("Shared successfully");
                })
                .catch(() => {
                  navigator.clipboard.writeText(
                    `On the occasion of World Password Day, KIIT and Konnexions are celebrating it in a new fashion where we would empower you to crack the puzzle.. Can you crack it?\nhttps://passwordday.vercel.app/`
                  );
                  toast.success("Copied to clipboard");
                });
            } catch (error) {
              navigator.clipboard.writeText(
                `On the occasion of World Password Day, KIIT and Konnexions are celebrating it in a new fashion where we would empower you to crack the puzzle.. Can you crack it?\nhttps://passwordday.vercel.app/`
              );
              toast.success("Copied to clipboard");
            }
          }}
          className="w-fit mt-12 lg:w-fit font-medium bg-primary active:bg-black lg:hover:bg-black px-7 text-sm text-white h-12 lg:h-14 rounded-full transition-all duration-500"
        >
          Share with friends
        </button>
        <button
          onClick={() => {
            setFragmentState("gamePlay");
          }}
          className="w-fit mt-12 lg:w-fit text-sm font-medium"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

export default Oops;
