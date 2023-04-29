import StateContext from "@/context/StateContext";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [fragmentState, setFragmentState] = useState("gamePlay");

  return (
    <StateContext.Provider
      value={{
        fragmentState,
        setFragmentState,
      }}
    >
      <Component {...pageProps} />
    </StateContext.Provider>
  );
}
