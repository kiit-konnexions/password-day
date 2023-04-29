import React from "react";

function HintCard() {
  return (
    <div className="flex items-center hover:bg-primary/10 w-fit p-4 rounded-xl cursor-pointer transition-all duration-500">
      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>
      <div className="ml-4">
        <h1 className="font-medium text-primary">Hint 1</h1>
        <p className="text-xs text-primary/80 mt-1">2 mins ago</p>
      </div>
    </div>
  );
}

export default HintCard;
