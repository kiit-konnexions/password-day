/* eslint-disable react-hooks/exhaustive-deps */
import StateContext from "@/context/StateContext";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useEffect, useState } from "react";

function HintModal() {
  const { hintModalOpen, setHintModalOpen } = useContext(StateContext);
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
          setProgressWidth(progressWidth + 0.2);
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
                <Dialog.Panel className="w-screen mt-auto lg:mt-0 lg:w-[600px] h-fit bg-white rounded-t-xl lg:rounded-xl overflow-hidden">
                  <div
                    style={{
                      width: `${progressWidth}%`,
                    }}
                    className={`h-1 bg-primary/50 rounded-full`}
                  ></div>
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

export default HintModal;
