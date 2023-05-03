/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import StateContext from "@/context/StateContext";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useEffect, useState } from "react";

function HintModal() {
  const { hintModalOpen, setHintModalOpen, hintModalData, setHintModalData } =
    useContext(StateContext);
  const [progressWidth, setProgressWidth] = useState(0);
  let timeOut;
  function closeModal() {
    setHintModalOpen(false);
  }
  function openModal() {
    setHintModalOpen(true);
  }

  // update progress bar width

  useEffect(() => {
    if (hintModalOpen) {
      if (progressWidth < 100) {
        timeOut = setTimeout(() => {
          setProgressWidth(progressWidth + 0.1);
        }, 10);
      } else {
        setHintModalOpen(false);
        setProgressWidth(0);
      }
    } else {
      setProgressWidth(0);
      clearTimeout(timeOut);
      timeOut = null;
    }
  }, [progressWidth, hintModalOpen]);

  useEffect(() => {
    if (!hintModalOpen) {
      setProgressWidth(0);
      clearTimeout(timeOut);
    }
  }, [hintModalOpen]);

  return (
    <>
      <Transition appear show={hintModalOpen} as={Fragment}>
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
                <Dialog.Panel className="w-screen mt-auto lg:mt-0 lg:w-[600px] h-fit bg-white rounded-t-xl lg:rounded-xl overflow-hidden relative">
                  <div
                    style={{
                      width: `${progressWidth}%`,
                    }}
                    className={`h-1 bg-sky-500 rounded-full absolute top-0 inset-x-0 z-10`}
                  ></div>
                  <div className="px-6 py-8">
                    <h1 className="font-bold text-2xl text-primary">
                      {hintModalData?.name}
                    </h1>
                    <p className="text-sm leading-7 mt-2 text-zinc-600">
                      {hintModalData?.description}
                    </p>
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

export default HintModal;
