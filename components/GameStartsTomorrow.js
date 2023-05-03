import StateContext from "@/context/StateContext";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useEffect } from "react";

function GameStartsTomorrow() {
  const { gameStartsOpen, setGameStartsOpen } = useContext(StateContext);

  const getTodaysDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    if (dd.toString() == "03") {
      return 1;
    } else if (dd.toString() == "04") {
      return 0;
    } else {
      return -1;
    }
  };

  useEffect(() => {
    getTodaysDate();
  }, []);

  function closeModal() {
    setGameStartsOpen(false);
  }

  function openModal() {
    setGameStartsOpen(true);
  }

  return (
    <>
      <Transition appear show={gameStartsOpen} as={Fragment}>
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
                <Dialog.Panel className="w-[90%] lg:mt-0 lg:w-[600px] h-fit bg-white overflow-hidden rounded-xl lg:rounded-xl">
                  <div className="ml-auto px-6 py-7 lg:p-7">
                    <h1 className="font-bold text-2xl text-primary">
                      {getTodaysDate() == 0
                        ? "Game starts at 11am"
                        : getTodaysDate() == 1
                        ? "Game starts tomorrow 🎊"
                        : "Game has already ended"}
                    </h1>
                    <p className="text-sm leading-7 mt-2 text-zinc-600">
                      On the occasion of World Password Day, KIIT and Konnexions
                      are celebrating it in a new fashion where we would empower
                      you to crack the puzzle. Can you crack it?
                    </p>

                    <div className="mt-6 font-poppins text-xs flex items-center">
                      <i class="bi bi-calendar-check text-xl mr-3"></i>
                      <span>04th May 2023, 11:00 AM onwards</span>
                    </div>
                    <div className="flex mt-8 lg:mt-10 items-center space-x-8">
                      <button
                        type="button"
                        className="inline-flex outline-none justify-center rounded-md border border-transparent bg-primary text-white px-4 py-3 text-sm font-medium w-fit"
                        onClick={() => {
                          try {
                            navigator
                              .share({
                                title: "Share with friends",
                                text: `On the occasion of World Password Day, KIIT and Konnexions are celebrating it in a new fashion where we would empower you to crack the puzzle. Can you crack it?`,
                                url: "https://passwordday.vercel.app/",
                              })
                              .then(() => {
                                toast.success("Shared successfully");
                              })
                              .catch(() => {
                                navigator.clipboard.writeText(
                                  `On the occasion of World Password Day, KIIT and Konnexions are celebrating it in a new fashion where we would empower you to crack the puzzle.. Can you crack it? \n https://passwordday.vercel.app/`
                                );
                                toast.success("Copied to clipboard");
                              });
                          } catch (error) {}
                        }}
                      >
                        Share with friends
                      </button>
                      <button
                        onClick={closeModal}
                        className="text-primary text-sm font-medium"
                      >
                        Close
                      </button>
                    </div>
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

export default GameStartsTomorrow;
