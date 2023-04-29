import StateContext from "@/context/StateContext";
import React, { useContext } from "react";

function Congratulations() {
  const { fragmentState, setFragmentState } = useContext(StateContext);
  return (
    <div className="pb-32 lg:pb-0">
      <p className="font-medium text-sm lg:text-base text-primary">
        4th May 2023
      </p>
      <h1 className="font-extrabold text-primary text-4xl lg:text-6xl mt-8">
        Congratulations !
      </h1>
      <p className="lg:max-w-[70%] leading-7 lg:leading-8 font-medium text-xs lg:text-sm mt-6 text-primary">
        You have successfully cracked the password. Fill the details below to
        get noticed !
      </p>
      <div className="mt-12"></div>
      <div className="lg:w-[500px] h-14 lg:h-16 bg-white focus-within:shadow-2xl focus-within:shadow-black/[0.05] border border-transparent focus-within:border-[#133852] rounded-md transition-all">
        <input
          type="text"
          className="h-full w-full bg-transparent px-6 outline-none"
          placeholder="Full name"
          name=""
          id=""
        />
      </div>
      <div className="mt-5 lg:mt-8 lg:w-[500px] h-14 lg:h-16 bg-white focus-within:shadow-2xl focus-within:shadow-black/[0.05] border border-transparent focus-within:border-[#133852] rounded-md transition-all">
        <input
          type="text"
          className="h-full w-full bg-transparent px-6 outline-none"
          placeholder="@instgram_username"
          name=""
          id=""
        />
      </div>
      <div className="flex items-center space-x-7">
        <button
          onClick={() => {
            setFragmentState("thankYou");
          }}
          className="w-fit mt-12 lg:w-fit font-medium bg-primary active:bg-black lg:hover:bg-black px-7 text-sm text-white h-12 lg:h-14 rounded-full transition-all duration-500"
        >
          Save response
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

export default Congratulations;
