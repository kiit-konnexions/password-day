/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import HintCard from "../HintCard";
import StateContext from "@/context/StateContext";
import GameRules from "../GameRules";
import { toast } from "react-hot-toast";
import HintModal from "../HintModal";

function GamePlay({ password }) {
  const [userInputPassword, setUserInputPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const {
    fragmentState,
    setFragmentState,
    setGameRulesOpen,
    setHintModalOpen,
    hintModalData,
    setHintModalData,
  } = useContext(StateContext);

  const checkIfCracked = () => {
    if (userInputPassword.length === 0) {
      toast.error("Please enter a password.");
      return;
    } else if (userInputPassword.trim() === password.correctAnswer.trim()) {
      setFragmentState("congratulations");
    } else {
      toast.error("Oops! Wrong password. Try again.");
    }
  };
  return (
    <div className="pb-32 lg:pb-0">
      <div className="flex items-center justify-between">
        <p className="font-medium text-sm lg:text-base text-primary">
          4th May 2023
        </p>
        <img src="/logo.png" className="h-10 lg:h-16" alt="" />
      </div>
      <h1 className="font-extrabold text-primary text-4xl lg:text-6xl mt-8 leading-[1.5]">
        World Password Day 2023
      </h1>
      <p className="lg:max-w-[70%] leading-7 lg:leading-8 font-medium text-xs lg:text-sm mt-6 text-primary">
        Each year on the first Thursday in May, World Password Day promotes
        better password habits. Passwords are critical gatekeepers to our
        digital identities, allowing us to access online shopping, dating,
        banking, social media, private work, and life communications.
      </p>
      <div className="lg:w-fit lg:gap-4 mt-8 grid grid-cols-2 lg:grid-cols-3">
        {password.hints.map((hint, index) => {
          return (
            <div
              className={`${
                hint.published
                  ? "cursor-pointer opacity-100"
                  : "cursor-not-allowed opacity-50"
              }`}
              key={index}
              onClick={() => {
                if (hint.published) {
                  setHintModalData(hint);
                  setHintModalOpen(true);
                } else {
                  toast.error("Hint not yet published.");
                }
              }}
            >
              <HintCard hint={hint} />
            </div>
          );
        })}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkIfCracked();
        }}
        className="lg:flex items-center mt-14"
      >
        <div className="h-16 w-full lg:w-96 bg-white shadow-lg shadow-black/[0.025] rounded-md flex items-center">
          <input
            type={visible ? "text" : "password"}
            value={userInputPassword}
            onChange={(e) => setUserInputPassword(e.target.value)}
            className="bg-transparent outline-none px-6 tracking-[5px] text-primary font-medium text-lg w-full"
            placeholder="••••••"
          />
          <button
            type="button"
            onClick={() => {
              setVisible(!visible);
            }}
            className="shrink-0 mr-6"
          >
            {visible ? (
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
            ) : (
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
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="h-16 w-full lg:w-28 text-sm bg-primary hover:bg-black text-white shadow-lg shadow-black/[0.025] rounded-md mt-5 lg:mt-0 lg:ml-6 transition-all duration-500"
        >
          Check
        </button>
      </form>

      <div className="mt-16">
        <button
          onClick={() => setGameRulesOpen(true)}
          className="text-sm font-semibold text-primary outline-none"
        >
          View game rules
        </button>
      </div>
      <HintModal />
      <GameRules />
    </div>
  );
}

export default GamePlay;
