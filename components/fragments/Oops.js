import React from "react";

function Oops() {
  return (
    <div className="pb-32 lg:pb-0">
      <p className="font-medium text-sm lg:text-base text-primary">
        4th May 2023
      </p>
      <h1 className="font-extrabold text-primary text-4xl lg:text-6xl mt-8">
        Oops !
      </h1>
      <p className="lg:max-w-[70%] leading-7 lg:leading-8 font-medium text-xs lg:text-sm mt-6 text-primary">
        It seems you have already responded.
      </p>

      <div className="flex items-center space-x-7">
        <button className="w-fit mt-12 lg:w-fit font-medium bg-primary active:bg-black lg:hover:bg-black px-7 text-sm text-white h-12 lg:h-14 rounded-full transition-all duration-500">
          Share with friends
        </button>
        <button className="w-fit mt-12 lg:w-fit text-sm font-medium">
          Back to home
        </button>
      </div>
    </div>
  );
}

export default Oops;