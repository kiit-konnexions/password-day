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
import Head from "next/head";
import Footer from "@/components/Footer";

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
        <meta
          property="og:image"
          content="https://media.istockphoto.com/id/1363430976/photo/password-online-form-cyber-security-concept-image.jpg?b=1&s=170667a&w=0&k=20&c=I_2d_2g19BTYJ3jSjofAeDYZ3zyleWjfIQLAnFxsk1s="
        />
        <meta property="og:url" content="https://passwordday.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Password Day 2023" />
      </Head>
      <div className="relative h-screen w-screen overflow-hidden">
        <img
          src="/lock.png"
          className="absolute z-0 bottom-6 right-0 w-[250px] hidden lg:block"
          alt=""
        />
        <div className="absolute z-10 inset-0 h-screen w-screen overflow-y-auto px-6 py-6 lg:px-28 lg:py-10 font-poppins">
          {fragmentState === "gamePlay" ? (
            <GamePlay password={password} />
          ) : fragmentState === "congratulations" ? (
            <Congratulations />
          ) : fragmentState === "thankYou" ? (
            <ThankYou />
          ) : fragmentState === "oops" ? (
            <Oops />
          ) : null}
          <Footer />
        </div>
      </div>
    </div>
  );
}
