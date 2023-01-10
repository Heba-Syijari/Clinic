/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LabNameContainer from "./AddLab/LabNameContainer";
import { t } from "i18next";

export default function AddLab({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const [Method, SetMethod] = useState("WithSystem");

  const WithSystem = (e) => {
    SetMethod("WithSystem");
  };

  const WithoutSystem = (e) => {
    SetMethod("WithOutSystem");
  };

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
                <Dialog.Panel className="relative px-10 pb-8 bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:max-w-xl sm:w-full ">
                  <div className="bg-white ">
                    <div className="w-full flex  h-full items-center mt-5">
                      <p className="  justify-center font-Poppins-SemiBold flex flex-grow text-lg ml-10">
                        {t("Add Lab")}
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="flex flex-col space-y-5 w-full m-auto mt-10">
                      <div className="flex space-x-5">
                        <div
                          className={`${
                            Method === "WithSystem"
                              ? "bg-[#0D2135] "
                              : "bg-transparent"
                          } flex border-[1px] p-2 rounded-xl w-full py-3  justify-center cursor-pointer `}
                          onClick={() => WithSystem()}
                        >
                          <p
                            className={`${
                              Method === "WithSystem"
                                ? "text-white "
                                : "text-[#98A2B3]"
                            }  text-sm font-Poppins-Medium  `}
                          >
                            {t("With system")}
                          </p>
                        </div>

                        <div
                          className={`${
                            Method === "WithOutSystem"
                              ? "bg-[#0D2135] "
                              : "bg-transparent"
                          } flex border-[1px] p-2 rounded-xl w-full py-3  justify-center cursor-pointer `}
                          onClick={() => WithoutSystem()}
                        >
                          <p
                            className={`${
                              Method === "WithOutSystem"
                                ? "text-white "
                                : "text-[#98A2B3]"
                            }  text-sm font-Poppins-Medium  `}
                          >
                            {t("Without system")}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${
                          Method === "WithSystem" ? "block" : "hidden"
                        } space-y-5 flex-col `}
                      >
                        <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="Code"
                            placeholder={t("Code")}
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <LabNameContainer />
                      </div>

                      <div
                        className={`${
                          Method === "WithOutSystem" ? "block" : "hidden"
                        } space-y-5 flex-col `}
                      >
                        <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="LabName"
                            placeholder={t("Lab name")}
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#908F8F] outline-0 ring-0"
                          />
                        </div>
                        <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="Address"
                            placeholder={t("Address")}
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#908F8F] outline-0 ring-0"
                          />
                        </div>
                        <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="PhoneNumber"
                            placeholder={t("Phone number")}
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#908F8F] outline-0 ring-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                    <button
                      type="button"
                      className="flex flex-grow font-medium text-sm py-3 bg-[#B7C835] justify-center rounded-xl text-white"
                    >
                      {t("Add Lab")}
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
