import Loading from "@/components/Loading";
import StateContext from "@/context/StateContext";
import { client, gql } from "@/helper/graph";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const getListOfRevealedHints = async () => {
    const query = gql`
      query MyQuery {
        passwords {
          hints(where: { published: true }) {
            id
          }
        }
      }
    `;

    try {
      const { passwords } = await client.request(query);
      const revealedHints = passwords[0].hints.length;
      return revealedHints;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const [fragmentState, setFragmentState] = useState("gamePlay");
  const [gameRulesOpen, setGameRulesOpen] = useState(false);
  const [hintModalOpen, setHintModalOpen] = useState(false);
  const [gameStartsOpen, setGameStartsOpen] = useState(false);
  const [hintModalData, setHintModalData] = useState({
    image: "",
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     (async () => {
  //       const r = await getListOfRevealedHints();
  //       if (r === 0) {
  //         setGameStartsOpen(true);
  //       }
  //     })();
  //   }, []);

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
