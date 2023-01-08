/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";

import "react-datepicker/dist/react-datepicker.css";

export default function Complete({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  function close() {
    setOpen(false);
  }
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          initialFocus={cancelButtonRef}
          onClose={() => close()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto ">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative  pb-8 bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:max-w-2xl sm:w-full ">
                  <div className="bg-white px-10">
                    <div className="w-full flex  h-full items-center mt-5">
                      <p className="  justify-center font-Poppins-SemiBold flex flex-grow text-lg ml-10">
                        Analysis results
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>
                  </div>

                  <div className="w-full h-full mt-10">
                    <div className="w-full border-t-[1px] relative">
                      <p className="font-Poppins-Medium text-sm absolute top-[-0.8rem] bg-white left-9  px-1 text-[#101828] font-medium">
                        Analysis Type 1
                      </p>
                      <div className="px-10 w-full">
                        <textarea
                          className=" text-xs font-Poppins-Medium col-start-1 my-10 col-end-3 bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-3 px-4 outline-0 ring-0   relative m-auto border-[1px] rounded-xl  "
                          rows={4}
                          placeholder="Notes"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-full mt-10">
                    <div className="w-full border-t-[1px] relative">
                      <p className="font-Poppins-Medium text-sm absolute top-[-0.8rem] bg-white left-9  px-1 text-[#101828] font-medium">
                        Analysis Type 2
                      </p>
                      <div className="px-10 mt-8 space-y-8 w-full">
                        <div className="flex space-x-5">
                          <div className="bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                            <input
                              name="High"
                              placeholder="H"
                              type="text"
                              className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                            />
                          </div>
                          <div className="bg-[#F9FAFF]  border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                            <input
                              name="Low"
                              placeholder="L"
                              type="text"
                              className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                            />
                          </div>
                        </div>
                        <div className="bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="Results"
                            placeholder="Results"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-full mt-10">
                    <div className="w-full border-t-[1px] space-y-2 relative">
                      <p className="font-Poppins-Medium text-sm absolute top-[-0.8rem] bg-white left-9  px-1 text-[#101828] font-medium">
                        Analysis Type 3
                      </p>
                      <div className="px-10 pt-8 flex space-x-5 w-full">
                        <div className="bg-[#F9FAFF] border-[#E4E7EC] w-1/2 h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="SupTest"
                            placeholder="Sup Test"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="bg-[#F9FAFF]  border-[#E4E7EC] w-2/3 h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="HelpResualt"
                            placeholder="Help Resualt"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                      </div>

                      <div className="px-10 flex space-x-5 w-full">
                        <div className="bg-[#F9FAFF] border-[#E4E7EC] w-1/2 h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="SupTest"
                            placeholder="Sup Test"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="bg-[#F9FAFF]  border-[#E4E7EC] w-2/3 h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="HelpResualt"
                            placeholder="Help Resualt"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                      </div>

                      <div className="px-10  flex space-x-5 w-full">
                        <div className="bg-[#F9FAFF] border-[#E4E7EC] w-1/2 h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="SupTest"
                            placeholder="Sup Test"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="bg-[#F9FAFF]  border-[#E4E7EC] w-2/3 h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="HelpResualt"
                            placeholder="Help Resualt"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-full mt-10">
                    <div className="w-full border-t-[1px] space-y-2 relative">
                      <p className="font-Poppins-Medium text-sm absolute top-[-0.8rem] bg-white left-9  px-1 text-[#101828] font-medium">
                        Analysis Type 4
                      </p>
                      <div className="px-10 pt-8 flex space-x-5 w-full">
                        <div className="bg-[#F9FAFF] border-[#E4E7EC] w-1/2 h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="Antibiotic"
                            placeholder="Antibiotic"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="bg-[#F9FAFF]  border-[#E4E7EC]  h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="Result"
                            placeholder="Result"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="bg-[#F9FAFF]  border-[#E4E7EC]  h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="MIC"
                            placeholder="MIC"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                      </div>

                      <div className="px-10  flex space-x-5 w-full">
                        <div className="bg-[#F9FAFF] border-[#E4E7EC] w-1/2 h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="Antibiotic"
                            placeholder="Antibiotic"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="bg-[#F9FAFF]  border-[#E4E7EC]  h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="Result"
                            placeholder="Result"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="bg-[#F9FAFF]  border-[#E4E7EC]  h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="MIC"
                            placeholder="MIC"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                      </div>

                      <div className="px-10  flex space-x-5 w-full">
                        <div className="bg-[#F9FAFF] border-[#E4E7EC] w-1/2 h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="Antibiotic"
                            placeholder="Antibiotic"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="bg-[#F9FAFF]  border-[#E4E7EC]  h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="Result"
                            placeholder="Result"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="bg-[#F9FAFF]  border-[#E4E7EC]  h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="MIC"
                            placeholder="MIC"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white px-10    py-3  flex sm:flex-row-reverse justify-evenly mt-10">
                    <button
                      type="button"
                      className="flex flex-grow py-3 ml-5 bg-[#B7C835] justify-center w-[35%] rounded-xl text-white"
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      className="flex border-[#D0D5DD] ml-5  border-[1px] flex-grow py-3 font-Poppins-Medium text-sm  w-[35%] bg-[#FFFFFF] justify-center rounded-xl text-black"
                    >
                      Print for drawing room
                    </button>

                    <button
                      type="button"
                      className="flex border-[#D0D5DD] border-[1px] flex-grow py-3 font-Poppins-Medium text-sm w-[20%]  bg-[#FFFFFF] justify-center rounded-xl text-black"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
