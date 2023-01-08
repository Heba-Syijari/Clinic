/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddEmployee({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  const [BirthDate, setBirthDate] = useState(new Date());
  const [WorkDate, setWorkDate] = useState(new Date());
  const [Image, SetImage] = useState();

  const BirthInput = React.forwardRef((props, ref) => {
    return (
      <div
        onClick={props.onClick}
        className=" p-2  justify-between   outline-0  border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative m-auto border-[1px] rounded-xl "
      >
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Regular">
          Date of birth
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black font-Poppins-Regular"
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

  const WorkInput = React.forwardRef((props, ref) => {
    return (
      <div
        onClick={props.onClick}
        className=" p-2  justify-between   outline-0  border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4   relative m-auto border-[1px] rounded-xl "
      >
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Regular">
          Work start
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black font-Poppins-Regular"
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

  const filebrowser = (e) => {
    e.preventDefault();
    document.getElementById("fileInput").click();
  };
  const getImage = (e) => {
    let type = e.target.files[0].type;
    let files = e.target.files[0];
    let ext = type.substring(type.indexOf("/") + 1);
    if (type.substring(0, type.indexOf("/")) === "image") {
      SetImage(window.URL.createObjectURL(new Blob(e.target.files)));
      //   if (!document.getElementById('ImageMessage').classList.contains("hidden")) {
      //     document.getElementById('ImageMessage').classList.add("hidden");
      //   }

      // } else {
      //   document.getElementById('ImageMessage').classList.remove("hidden");
      //   document.getElementById('ImageMessage').textContent = "الرجاء الانتباه على اختيار صورة فقط";
      //   SetImage(null);
    }
  };

  const NameClicked = () => {
    document.getElementById("Name").classList.remove("hidden");
    document
      .getElementById("NameContainer")
      .classList.remove("border-[#E4E7EC]");
    document.getElementById("NameContainer").classList.remove("bg-[#F9FAFF]");
    document.getElementById("NameContainer").classList.add("border-[#B7C835]");
    document.getElementById("NameContainer").classList.add("bg-white");
    document.getElementById("NameInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("NameInput").classList.add("bg-white");
  };

  const EmailClicked = () => {
    document.getElementById("Email").classList.remove("hidden");
    document
      .getElementById("EmailContainer")
      .classList.remove("border-[#E4E7EC]");
    document.getElementById("EmailContainer").classList.remove("bg-[#F9FAFF]");
    document.getElementById("EmailContainer").classList.add("border-[#B7C835]");
    document.getElementById("EmailContainer").classList.add("bg-white");
    document.getElementById("EmailInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("EmailInput").classList.add("bg-white");
  };

  const PhoneClicked = () => {
    document.getElementById("Phone").classList.remove("hidden");
    document
      .getElementById("PhoneContainer")
      .classList.remove("border-[#E4E7EC]");
    document.getElementById("PhoneContainer").classList.remove("bg-[#F9FAFF]");
    document.getElementById("PhoneContainer").classList.add("border-[#B7C835]");
    document.getElementById("PhoneContainer").classList.add("bg-white");
    document.getElementById("PhoneInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("PhoneInput").classList.add("bg-white");
  };

  const AddressClicked = () => {
    document.getElementById("Address").classList.remove("hidden");
    document
      .getElementById("AddressContainer")
      .classList.remove("border-[#E4E7EC]");
    document
      .getElementById("AddressContainer")
      .classList.remove("bg-[#F9FAFF]");
    document
      .getElementById("AddressContainer")
      .classList.add("border-[#B7C835]");
    document.getElementById("AddressContainer").classList.add("bg-white");
    document.getElementById("AddressInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("AddressInput").classList.add("bg-white");
  };

  const NotesClicked = () => {
    document.getElementById("Notes").classList.remove("hidden");
    document.getElementById("NotesInput").classList.remove("border-[#E4E7EC]");
    document.getElementById("NotesInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("NotesInput").classList.add("border-[#B7C835]");
    document.getElementById("NotesInput").classList.add("bg-white");
    document.getElementById("NotesInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("NotesInput").classList.add("bg-white");
  };

  const JobTitleChanged = () => {
    document.getElementById("JobTitle").classList.remove("hidden");
    document
      .getElementById("JobTitleContainer")
      .classList.remove("border-[#E4E7EC]");
    document
      .getElementById("JobTitleContainer")
      .classList.remove("bg-[#F9FAFF]");
    document
      .getElementById("JobTitleContainer")
      .classList.add("border-[#B7C835]");
    document.getElementById("JobTitleContainer").classList.add("bg-white");
    document.getElementById("JobTitleInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("JobTitleInput").classList.add("bg-white");
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
                      <p className=" font-semibold justify-center flex flex-grow text-2xl ml-10">
                        Add employee
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="w-full m-auto mt-10">
                      <div
                        className={` ${
                          Image == null
                            ? "w-fit border-dashed border-2"
                            : "w-40 h-40"
                        }  flex items-center flex-col  m-auto rounded-full  py-12 px-5 bg-cover bg-no-repeat bg-center`}
                        style={{ backgroundImage: `url(${Image})` }}
                      >
                        <input
                          id="fileInput"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => getImage(e)}
                        />
                        <CiImageOn
                          className={`text-2xl mb-2 ${
                            Image == null ? "block" : "hidden"
                          }`}
                        />
                        <h1
                          className={`flex flex-col items-center text-[#101828] font-Poppins-Regular text-xs ${
                            Image == null ? "flex" : "hidden"
                          }`}
                        >
                          Drop your here, or{" "}
                          <span
                            className="text-[#B7C835] mt-1 underline underline-[#B7C835] cursor-pointer"
                            onClick={(e) => filebrowser(e)}
                          >
                            select click to browse
                          </span>
                        </h1>
                      </div>

                      <div className="flex flex-col space-y-5 h-full mt-10">
                        <div
                          id="NameContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => NameClicked()}
                        >
                          <input
                            name="name"
                            id="NameInput"
                            placeholder="Employee name"
                            type="text"
                            className=" w-full  font-Poppins-Regular bg-[#F9FAFF] text-sm text-[#707070] outline-0 ring-0"
                          />
                          <p
                            id="Name"
                            className="hidden font-Poppins-Regular text-sm absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Employee name
                          </p>
                        </div>

                        <div
                          id="EmailContainer"
                          className="bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => EmailClicked()}
                        >
                          <input
                            name="Email"
                            id="EmailInput"
                            placeholder="Email"
                            type="email"
                            className="w-full bg-[#F9FAFF] font-Poppins-Regular text-sm text-[#707070] outline-0 ring-0"
                          />
                          <p
                            id="Email"
                            className="hidden font-Poppins-Regular text-sm absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Email
                          </p>
                        </div>

                        <div
                          id="PhoneContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => PhoneClicked()}
                        >
                          <input
                            id="PhoneInput"
                            name="Phone"
                            placeholder="Phone number"
                            type="tel"
                            className="w-full bg-[#F9FAFF] font-Poppins-Regular text-sm text-[#707070] outline-0 ring-0"
                          />
                          <p
                            id="Phone"
                            className="hidden font-Poppins-Regular text-sm absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Phone number
                          </p>
                        </div>
                        <div>
                          <ReactDatePicker
                            id="date"
                            dateFormat="yyyy/MM/dd"
                            className=" "
                            customInput={<BirthInput />}
                            selected={BirthDate}
                            onChange={(date) => setBirthDate(date)}
                          />
                        </div>
                        <div
                          id="AddressContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => AddressClicked()}
                        >
                          <input
                            id="AddressInput"
                            name="Address"
                            placeholder="Address"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Regular text-sm text-[#707070] outline-0 ring-0"
                          />
                          <p
                            id="Address"
                            className="hidden font-Poppins-Regular text-sm absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Address
                          </p>
                        </div>
                        <div>
                          <ReactDatePicker
                            id="date"
                            dateFormat="yyyy/MM/dd"
                            className=" "
                            customInput={<WorkInput />}
                            selected={WorkDate}
                            onChange={(date) => setWorkDate(date)}
                          />
                        </div>
                        <div
                          id="JobTitleContainer"
                          className="w-full pr-2 bg-[#F9FAFF] rounded-lg flex border-[1px] border-[#E4E7EC]  items-center mr-5"
                        >
                          <select
                            id="NotesInput"
                            name="Notes"
                            className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Regular  text-[#98A2B3] text-sm  outline-none px-4 py-2 cursor-pointer"
                            onChange={() => JobTitleChanged()}
                          >
                            <option
                              value=""
                              selected
                              disabled
                              hidden
                              className=""
                            >
                              Job title
                            </option>
                          </select>
                          <p
                            id="JobTitle"
                            className="hidden font-Poppins-Regular text-sm absolute top-[-0.8rem] bg-white left-[0.9rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Job title
                          </p>
                        </div>
                        <div className="relative w-full">
                          <textarea
                            id="NotesInput"
                            placeholder="Notes"
                            className="bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-3 px-4 outline-0 ring-0   relative m-auto border-[1px] rounded-xl "
                            rows={3}
                            onClick={() => NotesClicked()}
                          />
                          <p
                            id="Notes"
                            className="hidden font-Poppins-Regular text-sm absolute top-[-0.8rem] bg-white left-[0.9rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Notes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                    <button
                      type="button"
                      className="flex flex-grow py-2 bg-[#B7C835] justify-center rounded-xl text-white"
                    >
                      Add worker
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
