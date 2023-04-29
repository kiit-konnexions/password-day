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
            <div className="fixed inset-0 bg-black/50" />
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
                <Dialog.Panel className="w-screen h-screen lg:w-[600px] lg:h-fit bg-primary px-6 py-10 lg:p-10 lg:rounded-xl">
                  <h1 className="text-3xl font-extrabold text-white">
                    Game Rules
                  </h1>
                  <ul className="mt-10 list-disc text-white ml-4 space-y-3">
                    <li className="pl-2">The game consists of 5 levels.</li>
                    <li className="pl-2">The game consists of 5 levels.</li>
                    <li className="pl-2">The game consists of 5 levels.</li>
                    <li className="pl-2">The game consists of 5 levels.</li>
                  </ul>
                  <div className="mt-10 ml-auto">
                    <button
                      type="button"
                      className="inline-flex outline-none justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
