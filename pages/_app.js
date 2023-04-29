import StateContext from "@/context/StateContext";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [fragmentState, setFragmentState] = useState("gamePlay");
  const [gameRulesOpen, setGameRulesOpen] = useState(false);

  return (
    <StateContext.Provider
      value={{
        fragmentState,
        setFragmentState,
        gameRulesOpen,
        setGameRulesOpen,
      }}
    >
      <Component {...pageProps} />
    </StateContext.Provider>
  );
}
