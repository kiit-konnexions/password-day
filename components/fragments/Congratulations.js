/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import StateContext from "@/context/StateContext";
import { client, gql } from "@/helper/graph";
import React, { useContext, useLayoutEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Footer from "../Footer";
import Header from "../Header";

function Congratulations() {
  const { fragmentState, setFragmentState, loading, setLoading } =
    useContext(StateContext);

  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");

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

  const handleSubmit = async () => {
    if (name.length == 0) {
      toast.error("Enter a valid name");
      return;
    }
    if (instagram.length == 0) {
      toast.error("Enter a valid instagra id");
      return;
    }
    setLoading(true);
    const revealedHints = await getListOfRevealedHints();
    const mutation = gql`
      mutation MyMutation {
        createResponse(data: { name: "${name}", instagram: "${instagram}", hintsUsed: ${revealedHints} }) {
          id
        }
      }
    `;

    try {
      const { createResponse } = await client.request(mutation);
      if (!createResponse) throw new Error("Something went wrong");
      setLoading(false);
      setFragmentState("thankYou");
      localStorage.setItem("sub-r", "1");
    } catch (error) {
      setLoading(false);
      let message = error.message;
      if (error.message.includes("instagram"))
        message = "Instagram is already registered";
      toast.error(message);
    }
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("sub-r") === "1") setFragmentState("oops");
  }, []);
  return (
    <div className="pb-32 lg:pb-0">
      <h1 className="font-extrabold text-primary text-4xl lg:text-6xl mt-8">
        Congratulations !
      </h1>
      <p className="lg:max-w-[70%] leading-7 lg:leading-8 font-medium text-xs lg:text-sm mt-6 text-primary">
        You have successfully cracked the password. Fill the details below to
        get noticed !
      </p>
      <div className="mt-12"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="lg:w-[500px] h-14 lg:h-16 bg-white focus-within:shadow-2xl focus-within:shadow-black/[0.05] border border-transparent focus-within:border-[#133852] rounded-md transition-all">
          <input
            type="text"
            className="h-full w-full bg-transparent px-6 outline-none"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name=""
            id=""
          />
        </div>
        <div className="mt-5 px-6 flex items-center lg:mt-8 lg:w-[500px] h-14 lg:h-16 bg-white focus-within:shadow-2xl focus-within:shadow-black/[0.05] border border-transparent focus-within:border-[#133852] rounded-md transition-all">
          <span className="opacity-50">https://www.instagram.com/</span>
          <input
            type="text"
            className="h-full w-full bg-transparent outline-none"
            placeholder="@username"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            name=""
            id=""
          />
        </div>
        <div className="flex items-center space-x-7">
          <button
            type="submit"
            className="w-fit mt-12 lg:w-fit font-medium bg-primary active:bg-black lg:hover:bg-black px-7 text-sm text-white h-12 lg:h-14 rounded-full transition-all duration-500"
          >
            Save response
          </button>
          <button
            onClick={() => {
              setFragmentState("gamePlay");
            }}
            className="w-fit mt-12 lg:w-fit text-sm font-medium"
          >
            Back to home
          </button>
        </div>
      </form>
    </div>
  );
}

export default Congratulations;
