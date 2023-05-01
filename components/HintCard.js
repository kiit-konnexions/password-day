import StateContext from "@/context/StateContext";
import React, { useContext, useEffect, useState } from "react";

function HintCard({ hint }) {
  const [timeDifference, setTimeDifference] = useState("");

  // calculate time difference between current time and hint updated time
  const timeDiff = (current, previous) => {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) > 1
        ? Math.round(elapsed / msPerMinute) + " minutes ago"
        : Math.round(elapsed / msPerMinute) + " minute ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + " months ago";
    } else {
      return Math.round(elapsed / msPerYear) + " years ago";
    }
  };

  useEffect(() => {
    if (hint.published) {
      setTimeDifference(timeDiff(new Date(), new Date(hint.publishedDateTime)));
    }
  }, [timeDifference]);

  return (
    <div className="flex items-center hover:bg-primary/10 lg:w-fit p-4 rounded-xl transition-all duration-500 shrink-0">
      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
        {hint.published ? (
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
              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        )}
      </div>
      <div className="ml-4">
        <h1 className="font-medium text-primary">{hint.name}</h1>
        <p className="text-[10px] text-primary/80 mt-1">
          {hint.published ? timeDifference : "Coming soon"}
        </p>
      </div>
    </div>
  );
}

export default HintCard;
