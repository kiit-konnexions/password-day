/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import HintCard from "@/components/HintCard";
import GamePlay from "@/components/fragments/GamePlay";
import { useContext, useState } from "react";
import Congratulations from "@/components/fragments/Congratulations";
import ThankYou from "@/components/fragments/ThankYou";
import Oops from "@/components/fragments/Oops";
import StateContext from "@/context/StateContext";
import { client, gql } from "@/helper/graph";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const query = gql`
    query MyQuery {
      passwords {
        correctAnswer
        hints {
          name
          description
          publishedDateTime
          published
          coverImage {
            url
          }
        }
      }
    }
  `;
  try {
    const { passwords } = await client.request(query);
    return {
      props: {
        passwords,
      },
    };
  } catch (error) {
    return {
      props: {
        passwords: [],
      },
    };
  }
}

export default function Home({ passwords }) {
  const { fragmentState, setFragmentState } = useContext(StateContext);
  const [password, setPassword] = useState(passwords[0]);

  return (
    <div className="h-screen w-screen fixed inset-0 overflow-hidden">
      <div className="relative h-screen w-screen overflow-hidden">
        <img
          src="/lock.png"
          className="absolute z-0 bottom-6 right-0 w-[250px] hidden lg:block"
          alt=""
        />
        <div className="absolute z-10 inset-0 h-screen w-screen overflow-y-auto px-6 py-6 lg:px-28 lg:py-16 font-poppins">
          {fragmentState === "gamePlay" ? (
            <GamePlay password={password} />
          ) : fragmentState === "congratulations" ? (
            <Congratulations />
          ) : fragmentState === "thankYou" ? (
            <ThankYou />
          ) : fragmentState === "oops" ? (
            <Oops />
          ) : null}
        </div>
      </div>
    </div>
  );
}
