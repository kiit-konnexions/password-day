/* eslint-disable @next/next/no-img-element */
import StateContext from "@/context/StateContext";
import React, { useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";

function Ended() {
  const { fragmentState, setFragmentState } = useContext(StateContext);
  return (
    <div className="pb-8 lg:pb-0">
      <h1 className="font-extrabold text-primary text-4xl lg:text-6xl mt-8">
        We are done for this year!
      </h1>
      <p className="lg:max-w-[70%] leading-7 lg:leading-8 font-medium text-xs lg:text-sm mt-6 text-primary">
        See you next year! :)
      </p>
    </div>
  );
}

export default Ended;
