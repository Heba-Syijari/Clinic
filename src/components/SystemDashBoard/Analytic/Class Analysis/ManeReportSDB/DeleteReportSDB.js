/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromDBManeReport,
  selectDBManeReports,
} from "../../../../../GlobalData/SystemDashBoard/ManeReportSDBSlice";

export default function DeleteReportSDB({ open, setOpen, id }) {
  const cancelButtonRef = useRef(null);
  const ManeReportSelector = useSelector(selectDBManeReports);
  const dispatch = useDispatch();

  function close() {
    setOpen(false);
  }
  const remove = async () => {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmU1OTAyOTQwNjY1OWQ1OGVlMzQ4MTMzOWZkNDlmOThhYzAxMDNjODcyZjgyNzVjNjY2ODc4NThhZDNkZjBjOGFhOGVmZTM4YjJkZmQyZjAiLCJpYXQiOjE2NzMwMjY0ODAuNjE5OTI2LCJuYmYiOjE2NzMwMjY0ODAuNjE5OTI5LCJleHAiOjE3MDQ1NjI0ODAuNjE0MTE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.alMtvstRFur9U7Ue5bvu2QDE_QVsQBDmw-VW7t7LEOO7feDxspvm77Zt-7Yi9JpWZ1hgOj2xRYF3LkkG4oakLXA2as8JwAxU7cTrD1jOoVdHsQTL2qwMj63hYKi9TwYw-JqAWB5F9aoULfW9MlCgOAkUIFvlZAIHuPAjwEhDKvFQhpQbpWAAs3MswitX0s8XR6roWEooTAi6ITWulnnOKComQTRnYxPh_ziy8iJUovjzW2sZ6TWY7nJdu1mjtYUaBRF0qlLCUEpv8EAu7-z4r3vNTIhFSp5jjtbWX3Cc_0SphfxApim1wCVPRJ6Ba2oI9DWf8MvILHKCxICRyybH4R5rCe64PkZqItY2ft9_K1TypWs-xiULh1-5-_Bg6Ris9sEdP7x-zQy4bxv0ioD1XO9sFT8a9btQdMGkReXDaXzcbIQxrWl_T1BA-XPAg9mNrZY6buhJPPw_CqbPzyZ7ZaQiFReVJBMCoH3BBApdKG4XXUnGlsjidPeyaC2s1ibUBYlwrQUpm6hnvMxNJivyH8IZ76hRSsc8_LDfRKcZ3rzb5UOxm27TjJaL1A1U6xsUwXRfFhW1C4oj1ASaSnk68h-pfvpZqn_fctEl9veSEx_4-Is2Wnw9h4mSS3KRynGgLmqp_jj7dQojFkrQxgsVkfNYkgYkDlCIh4FG6Y2tLqM";
    let selected =
      ManeReportSelector[
        ManeReportSelector.findIndex((reportItem) => reportItem.id === id)
      ];

    dispatch(removeFromDBManeReport(selected));
    setOpen(false);
  };
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
                        Delete Report
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="flex flex-col space-y-5 w-full m-auto mt-10">
                      <div className={`space-y-5 flex-col `}>
                        <div className="w-full ">
                          <p className="w-fit  font-Poppins-Medium text-sm ">
                            Do you want to delete? :{" "}
                            <span className="text-black ml-5">
                              {
                                ManeReportSelector[
                                  ManeReportSelector.findIndex(
                                    (ReportItem) => ReportItem.id === id
                                  )
                                ]?.gender
                              }{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-5">
                    <button
                      type="button"
                      className="flex  font-medium text-sm py-3 px-6 bg-red-600 justify-center rounded-xl text-white"
                      onClick={() => remove()}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="flex  font-medium text-sm py-3 px-6 bg-gray-500 justify-center rounded-xl text-white"
                      onClick={() => close()}
                    >
                      No
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
