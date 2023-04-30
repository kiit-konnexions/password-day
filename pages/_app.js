import StateContext from "@/context/StateContext";
import "@/styles/globals.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const [fragmentState, setFragmentState] = useState("gamePlay");
  const [gameRulesOpen, setGameRulesOpen] = useState(false);
  const [hintModalOpen, setHintModalOpen] = useState(false);

  return (
    <StateContext.Provider
      value={{
        fragmentState,
        setFragmentState,
        gameRulesOpen,
        setGameRulesOpen,
        hintModalOpen,
        setHintModalOpen,
      }}
    >
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          // Define default options
          className: "",
          style: {
            background: "#fff",
            color: "#0d1117",
            zIndex: 1,
            borderRadius: "50px",
            fontSize: "14px",
            marginBottom: "10px",
          },
          duration: 5000,
        }}
      />
    </StateContext.Provider>
  );
}
