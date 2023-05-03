import Loading from "@/components/Loading";
import StateContext from "@/context/StateContext";
import "@/styles/globals.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const getTodaysDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    if (dd.toString() == "03") {
      return false;
    } else if (dd.toString() == "04") {
      return true;
    } else {
      return -1;
    }
  };

  const [fragmentState, setFragmentState] = useState("gamePlay");
  const [gameRulesOpen, setGameRulesOpen] = useState(false);
  const [hintModalOpen, setHintModalOpen] = useState(false);
  const [gameStartsOpen, setGameStartsOpen] = useState(true);
  const [hintModalData, setHintModalData] = useState({
    image: "",
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    <StateContext.Provider
      value={{
        fragmentState,
        setFragmentState,
        gameRulesOpen,
        setGameRulesOpen,
        hintModalOpen,
        setHintModalOpen,
        hintModalData,
        setHintModalData,
        loading,
        setLoading,
        gameStartsOpen,
        setGameStartsOpen,
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
      <Loading loading={loading} />
    </StateContext.Provider>
  );
}
