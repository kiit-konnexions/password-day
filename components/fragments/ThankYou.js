/* eslint-disable @next/next/no-img-element */
import StateContext from "@/context/StateContext";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import Footer from "../Footer";
import Header from "../Header";

function ThankYou() {
  const { fragmentState, setFragmentState } = useContext(StateContext);
  return (
    <div className="pb-8 lg:pb-0">
      <h1 className="font-extrabold text-primary text-4xl lg:text-6xl mt-8">
        Thank you !
      </h1>
      <div className="lg:max-w-[70%] font-medium text-xs lg:text-sm mt-6 text-primary flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-teal-600"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Responsed recorded</span>
      </div>

      <div className="flex items-center space-x-7">
        <button
          onClick={() => {
            try {
              navigator
                .share({
                  title: "Share with friends",
                  text: "I just cracked the password for the secret page of the website. Can you?",
                  url: "https://passwordday.vercel.app/",
                })
                .then(() => {
                  toast.success("Shared successfully");
                })
                .catch(() => {
                  navigator.clipboard.writeText(
                    "https://passwordday.vercel.app/"
                  );
                  toast.success(`
                    I just cracked the password for the secret page of the website. Can you? \n https://passwordday.vercel.app/
                  `);
                });
            } catch (error) {}
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

export default ThankYou;
