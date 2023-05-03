import StateContext from "@/context/StateContext";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";

function GameRules() {
  const { gameRulesOpen, setGameRulesOpen } = useContext(StateContext);

  function closeModal() {
    setGameRulesOpen(false);
  }

  function openModal() {
    setGameRulesOpen(true);
  }

  return (
    <>
      <Transition appear show={gameRulesOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-screen mt-auto lg:mt-0 lg:w-[600px] h-fit bg-white overflow-hidden rounded-t-xl lg:rounded-xl">
                  <div className="ml-auto px-6 py-7 lg:p-7">
                    <h1 className="font-bold text-2xl text-primary">
                      Guidelines
                    </h1>
                    <p className="text-sm leading-6 mt-2 text-zinc-600">
                      Here is how the game functions:
                    </p>
                    <ul className="mt-6 pl-5 list-disc text-zinc-700 border-t pt-5 space-y-3 text-sm">
                      <li>The tips will be accessible every three hours.</li>
                      <li>
                        Each clue&apos;s initial letter moves you one step
                        closer to the password.
                      </li>
                      <li>
                        The hints are specific to KIIT and the KIIT
                        neighbourhood.
                      </li>
                      <li>You can attempt multiple times.</li>
                    </ul>
                    <button
                      type="button"
                      className="inline-flex outline-none justify-center rounded-md border border-transparent bg-primary text-white mt-8 lg:mt-10 px-4 py-3 text-sm font-medium w-full lg:w-fit"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default GameRules;
