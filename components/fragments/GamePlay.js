import React from "react";
import HintCard from "../HintCard";

function GamePlay() {
  return (
    <div>
      <p className="font-medium text-primary">4th May 2023</p>
      <h1 className=" font-extrabold text-primary text-6xl mt-8">
        World Password Day 2023
      </h1>
      <p className="lg:max-w-[70%] leading-8 font-medium text-sm mt-6 text-primary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="w-fit gap-4 mt-8 grid lg:grid-cols-2">
        <HintCard />
        <HintCard />
        <HintCard />
        <HintCard />
      </div>

      <div className="flex items-center mt-14">
        <div className="h-16 w-96 bg-white shadow-lg shadow-black/[0.025] rounded-md flex items-center">
          <input
            type="password"
            className="bg-transparent outline-none px-6 tracking-[5px] text-primary font-medium text-lg w-full"
            placeholder="••••••"
          />
          <button className="shrink-0 mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        </div>
        <button className="h-16 w-28 text-sm bg-primary hover:bg-black text-white shadow-lg shadow-black/[0.025] rounded-md ml-6 transition-all duration-500">
          Check
        </button>
      </div>

      <div className="mt-16">
        <button className="text-sm font-semibold text-primary">
          View game rules
        </button>
      </div>
    </div>
  );
}

export default GamePlay;
