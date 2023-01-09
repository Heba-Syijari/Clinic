/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditAccountRevenue({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const [Method, SetMethod] = useState("exports");
  const [Datee, SetDate] = useState(new Date());
  const [RevenuesDate, SetRevenuesDate] = useState(new Date());

  const DateInput = React.forwardRef((props, ref) => {
    return (
      <div
        onClick={props.onClick}
        className=" p-2  justify-between   outline-0  border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-[0.80rem] px-4  relative  border-[1px] rounded-xl "
      >
        <label className="text-[#98A2B3] text-xs mr-10 font-Poppins-Regular">
          Date
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black  text-xs font-Poppins-Medium"
          >
            {props.value || props.placeholder}
          </label>
          <IoCalendarOutline
            onClick={props.onClick}
            className="ml-5 text-[#98A2B3]"
          />
        </div>
      </div>
    );
  });

  const RevenuesDateInput = React.forwardRef((props, ref) => {
    return (
      <div
        onClick={props.onClick}
        className=" p-2  justify-between   outline-0  border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-[0.80rem] px-4  relative  border-[1px] rounded-xl "
      >
        <label className="text-[#98A2B3] text-xs mr-10 font-Poppins-Regular">
          Date
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black  text-xs font-Poppins-Medium"
          >
            {props.value || props.placeholder}
          </label>
          <IoCalendarOutline
            onClick={props.onClick}
            className="ml-5 text-[#98A2B3]"
          />
        </div>
      </div>
    );
  });
  const exportbtn = (e) => {
    if (e.target.checked) {
      document
        .getElementById("radio-1-text")
        .classList.remove("text-[#101828]", "text-[#B7C835]");
      document.getElementById("radio-1-text").classList.add("text-[#B7C835]");

      document
        .getElementById("radio-2-text")
        .classList.remove("text-[#101828]", "text-[#B7C835]");
      SetMethod("exports");
    }
  };

  const revenuesbtn = (e) => {
    if (e.target.checked) {
      document
        .getElementById("radio-1-text")
        .classList.remove("text-[#101828]", "text-[#B7C835]");
      document
        .getElementById("radio-2-text")
        .classList.remove("text-[#101828]", "text-[#B7C835]");
      document.getElementById("radio-2-text").classList.add("text-[#B7C835]");
      SetMethod("Revenues");
    }
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
                        Payment
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="flex flex-col space-y-5 w-full m-auto mt-10">
                      <div className={`space-y-5 flex-col`}>
                        <div>
                          <ReactDatePicker
                            id="date"
                            dateFormat="yyyy/MM/dd"
                            className=" "
                            customInput={<DateInput />}
                            selected={Datee}
                            onChange={(date) => SetDate(date)}
                          />
                        </div>
                        <div
                          id="DayContainer"
                          className="text-xs border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                        >
                          <input
                            name="Day"
                            id="Day"
                            placeholder="Day"
                            type="text"
                            className=" w-full  font-Poppins-Medium placeholder:text-[#98A2B3] bg-[#F9FAFF] outline-0 ring-0"
                          />
                        </div>

                        <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            name="PaymentAmount"
                            placeholder="Payment amount"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                        <div className="w-full relative lg:col-start-1 lg:col-end-3">
                          <textarea
                            id="NotesInput"
                            className=" bg-[#F9FAFF] placeholder:text-[#98A2B3] font-Poppins-Medium border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-3 px-4 outline-0 ring-0   relative m-auto border-[1px] rounded-xl text-xs "
                            rows={4}
                            placeholder="Notes"
                          />
                        </div>
                        <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                          <button
                            type="button"
                            className="flex flex-grow py-3 text-sm font-Poppins-Medium  bg-[#B7C835] justify-center rounded-xl text-white"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
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
