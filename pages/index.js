/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import GamePlay from "@/components/fragments/GamePlay";
import { useContext, useEffect, useState } from "react";
import Congratulations from "@/components/fragments/Congratulations";
import ThankYou from "@/components/fragments/ThankYou";
import Oops from "@/components/fragments/Oops";
import StateContext from "@/context/StateContext";
import { client, gql } from "@/helper/graph";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GameStartsTomorrow from "@/components/GameStartsTomorrow";
import Ended from "@/components/fragments/Ended";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  const { fragmentState, setFragmentState } = useContext(StateContext);
  const [password, setPassword] = useState(null);

  //   const getPasswords = async () => {
  //     const query = gql`
  //       query MyQuery {
  //         passwords {
  //           hints {
  //             name
  //             description
  //             publishedDateTime
  //             published
  //             coverImage {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     `;
  //     try {
  //       const { passwords } = await client.request(query);
  //       setPassword(passwords[0]);
  //     } catch (error) {
  //       setPassword(null);
  //     }
  //   };

  //   useEffect(() => {
  //     (async () => {
  //       password == null && (await getPasswords());
  //     })();
  //   }, []);

  return (
    <div className="h-screen w-screen fixed inset-0 overflow-hidden">
      <Head>
        <title>World Password Day 2023</title>
        <meta
          name="description"
          content="Today is World Password Day, it's an effort to educate people about
        the dangers of using weak passwords. On this occasion, KIIT and
        Konnexions are celebrating it in a new fashion where we would empower
        you to crack the puzzle."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="World Password Day 2023" />
        <meta
          property="og:description"
          content="Today is World Password Day, it's an effort to educate people about
        the dangers of using weak passwords. On this occasion, KIIT and
        Konnexions are celebrating it in a new fashion where we would empower
        you to crack the puzzle."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:url" content="https://passwordday.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Password Day 2023" />
      </Head>
      {password != null && (
        <>
          <div className="relative h-screen w-screen overflow-hidden">
            <Header className="sticky top-0 inset-x-0" />
            <img
              src="/lock.png"
              className="absolute z-0 bottom-6 right-0 w-[250px] hidden lg:block"
              alt=""
            />
            <div className="absolute z-10 inset-0 h-screen w-screen overflow-y-auto px-6 lg:px-28 pt-16 lg:pt-24 pb-32 lg:pb-44 font-poppins">
              <Ended />
              {/* {fragmentState === "gamePlay" ? (
                <GamePlay password={password} />
              ) : fragmentState === "congratulations" ? (
                <Congratulations />
              ) : fragmentState === "thankYou" ? (
                <ThankYou />
              ) : fragmentState === "oops" ? (
                <Oops />
              ) : null} */}
              <Footer />
            </div>
          </div>
          <GameStartsTomorrow />
        </>
      )}
    </div>
  );
}
