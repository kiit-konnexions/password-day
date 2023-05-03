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
                <Dialog.Panel className="w-screen mt-auto lg:mt-0 lg:w-[600px] h-fit bg-white overflow-hidden rounded-t-xl lg:rounded-xl">
                  <div className="ml-auto px-6 py-7 lg:p-7">
                    <h1 className="font-bold text-2xl text-primary">
                      {getTodaysDate() == 0
                        ? "Game starts today"
                        : getTodaysDate() == 1
                        ? "Game starts tomorrow 🎊"
                        : "Game has already ended"}
                    </h1>
                    <p className="text-sm leading-7 mt-2 text-zinc-600">
                      Buckle up, the game is about to start! You can start
                    </p>

                    <div className="mt-6 font-poppins text-xs flex items-center">
                      <i class="bi bi-calendar-check text-xl mr-3"></i>
                      <span>04th May 2023, 11:00 AM onwards</span>
                    </div>
                    <button
                      type="button"
                      className="inline-flex outline-none justify-center rounded-md border border-transparent bg-primary text-white mt-8 lg:mt-10 px-4 py-3 text-sm font-medium w-full lg:w-fit"
                      onClick={() => {
                        try {
                          navigator
                            .share({
                              title: "Share with friends",
                              text: "I just cracked the password for the secret page of the website. Can you?",
                              url: "https://passwordday.vercel.app/",
                            })
                            .then(() => {
                              toast.success("Shared successfully");
                            })
                            .catch(() => {
                              navigator.clipboard.writeText(
                                "https://passwordday.vercel.app/"
                              );
                              toast.success(`
                    I just cracked the password for the secret page of the website. Can you? \n https://passwordday.vercel.app/
                  `);
                            });
                        } catch (error) {}
                      }}
                    >
                      Share with friends
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

export default GameStartsTomorrow;
