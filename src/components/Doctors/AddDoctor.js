/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosMale } from "react-icons/io";
import { IoFemaleSharp } from "react-icons/io5";
import { BsPercent } from "react-icons/bs";
import { FiLock } from "react-icons/fi";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddDoctor({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const [Image, SetImage] = useState();
  const [Gender, SetGender] = useState();

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
  function close() {
    setOpen(false);
  }
  const GenderChange = (e) => {
    console.log(e.target.id);
    if (e.target.id === "radio-2") {
      document
        .getElementById("radio-2-text")
        .classList.remove("text-[#98A2B3]");
      document
        .getElementById("radio-1-text")
        .classList.remove("text-[#12B76A]");
      ///#9E77ED female
      ///#12B76A male
      ///#98A2B3 gray
      document.getElementById("radio-2-text").classList.add("text-[#9E77ED]");
      document.getElementById("radio-1-text").classList.add("text-[#98A2B3]");

      document
        .getElementById("radio-2-icon")
        .classList.remove("text-[#98A2B3]");
      document
        .getElementById("radio-1-icon")
        .classList.remove("text-[#12B76A]");

      document.getElementById("radio-2-icon").classList.add("text-[#9E77ED]");
      document.getElementById("radio-1-icon").classList.add("text-[#98A2B3]");
    } else if (e.target.id === "radio-1") {
      document
        .getElementById("radio-1-text")
        .classList.remove("text-[#98A2B3]");
      document
        .getElementById("radio-2-text")
        .classList.remove("text-[#9E77ED]");

      document.getElementById("radio-1-text").classList.add("text-[#12B76A]");
      document.getElementById("radio-2-text").classList.add("text-[#98A2B3]");

      document
        .getElementById("radio-1-icon")
        .classList.remove("text-[#98A2B3]");
      document
        .getElementById("radio-2-icon")
        .classList.remove("text-[#9E77ED]");

      document.getElementById("radio-1-icon").classList.add("text-[#12B76A]");
      document.getElementById("radio-2-icon").classList.add("text-[#98A2B3]");
    }
    if (e.target.checked) {
      SetGender(e.target.value);
    }
  };

  const NameClicked = () => {
    document.getElementById("Name").classList.remove("hidden");
    document
      .getElementById("NameContainer")
      .classList.remove("border-[#E4E7EC]");
    document
      .getElementById("NameIcon")
      .classList.remove("text-[#98A2B3]", "opacity-40");

    document.getElementById("NameContainer").classList.remove("bg-[#F9FAFF]");
    document.getElementById("NameContainer").classList.add("border-[#B7C835]");
    document.getElementById("NameContainer").classList.add("bg-white");
    document.getElementById("NameIcon").classList.add("text-[#B7C835]");

    document.getElementById("NameInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("NameInput").classList.add("bg-white");
  };

  const EmailClicked = () => {
    document.getElementById("Email").classList.remove("hidden");
    document
      .getElementById("EmailContainer")
      .classList.remove("border-[#E4E7EC]");
    document
      .getElementById("EmailIcon")
      .classList.remove("text-[#98A2B3]", "opacity-40");

    document.getElementById("EmailContainer").classList.remove("bg-[#F9FAFF]");
    document.getElementById("EmailContainer").classList.add("border-[#B7C835]");
    document.getElementById("EmailContainer").classList.add("bg-white");
    document.getElementById("EmailIcon").classList.add("text-[#B7C835]");

    document.getElementById("EmailInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("EmailInput").classList.add("bg-white");
  };

  const PhoneClicked = () => {
    document.getElementById("Phone").classList.remove("hidden");
    document
      .getElementById("PhoneContainer")
      .classList.remove("border-[#E4E7EC]");
    document
      .getElementById("PhoneIcon")
      .classList.remove("text-[#98A2B3]", "opacity-40");

    document.getElementById("PhoneContainer").classList.remove("bg-[#F9FAFF]");
    document.getElementById("PhoneContainer").classList.add("border-[#B7C835]");
    document.getElementById("PhoneContainer").classList.add("bg-white");
    document.getElementById("PhoneIcon").classList.add("text-[#B7C835]");

    document.getElementById("PhoneInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("PhoneInput").classList.add("bg-white");
  };

  const DoctorAddressClicked = () => {
    document.getElementById("DoctorAddress").classList.remove("hidden");
    document
      .getElementById("DoctorAddressContainer")
      .classList.remove("border-[#E4E7EC]");
    document
      .getElementById("DoctorAddressIcon")
      .classList.remove("text-[#98A2B3]", "opacity-40");

    document
      .getElementById("DoctorAddressContainer")
      .classList.remove("bg-[#F9FAFF]");
    document
      .getElementById("DoctorAddressContainer")
      .classList.add("border-[#B7C835]");
    document.getElementById("DoctorAddressContainer").classList.add("bg-white");
    document
      .getElementById("DoctorAddressIcon")
      .classList.add("text-[#B7C835]");

    document
      .getElementById("DoctorAddressInput")
      .classList.remove("bg-[#F9FAFF]");
    document.getElementById("DoctorAddressInput").classList.add("bg-white");
  };

  const PasswordClicked = () => {
    document.getElementById("Password").classList.remove("hidden");
    document
      .getElementById("PasswordContainer")
      .classList.remove("border-[#E4E7EC]");
    document
      .getElementById("PasswordIcon")
      .classList.remove("text-[#98A2B3]", "opacity-40");

    document
      .getElementById("PasswordContainer")
      .classList.remove("bg-[#F9FAFF]");
    document
      .getElementById("PasswordContainer")
      .classList.add("border-[#B7C835]");
    document.getElementById("PasswordContainer").classList.add("bg-white");
    document.getElementById("PasswordIcon").classList.add("text-[#B7C835]");

    document.getElementById("PasswordInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("PasswordInput").classList.add("bg-white");
  };

  const DoctorRatioClicked = () => {
    document.getElementById("DoctorRatio").classList.remove("hidden");
    document
      .getElementById("DoctorRatioContainer")
      .classList.remove("border-[#E4E7EC]");
    document
      .getElementById("DoctorRatioIcon")
      .classList.remove("text-[#98A2B3]", "opacity-40");

    document
      .getElementById("DoctorRatioBorder")
      .classList.remove("border-[#98A2B3]");

    document
      .getElementById("DoctorRatioContainer")
      .classList.remove("bg-[#F9FAFF]");
    document
      .getElementById("DoctorRatioContainer")
      .classList.add("border-[#B7C835]");
    document.getElementById("DoctorRatioContainer").classList.add("bg-white");
    document.getElementById("DoctorRatioIcon").classList.add("text-[#B7C835]");
    document
      .getElementById("DoctorRatioBorder")
      .classList.add("border-[#B7C835]");

    document
      .getElementById("DoctorRatioInput")
      .classList.remove("bg-[#F9FAFF]");
    document.getElementById("DoctorRatioInput").classList.add("bg-white");
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
                      <p className=" font-semibold justify-center flex flex-grow text-2xl ml-10">
                        Add doctor
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
                          className={`h-[21.5px] w-[21.5px] mb-2 ${
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
                          <BsPersonCircle
                            id="NameIcon"
                            className="w-6 h-6 opacity-40 text-[#98A2B3]"
                          />
                          <input
                            placeholder="Doctor name"
                            name="name"
                            id="NameInput"
                            type="text"
                            className=" w-full bg-[#F9FAFF]  font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="Name"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Doctor name
                          </p>
                        </div>

                        <div
                          id="EmailContainer"
                          className="bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => EmailClicked()}
                        >
                          <MdOutlineMail
                            id="EmailIcon"
                            className="w-6 h-6 opacity-40 text-[#98A2B3]"
                          />
                          <input
                            name="Email"
                            id="EmailInput"
                            placeholder="Email"
                            type="email"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="Email"
                            className="hidden font-Poppins-Regular text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Email
                          </p>
                        </div>
                        <div
                          id="PhoneContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => PhoneClicked()}
                        >
                          <HiOutlineDevicePhoneMobile
                            id="PhoneIcon"
                            className="w-6 h-6 opacity-40 text-[#98A2B3]"
                          />
                          <input
                            id="PhoneIcon"
                            name="PhoneNumber"
                            placeholder="Phone number"
                            type="tel"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="Phone"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Phone number
                          </p>
                        </div>
                        <div className="text-xs col-start-1 col-end-3 border-[#E4E7EC] w-full h-fit bg-white flex space-x-2 items-center py-2 px-4    relative m-auto border-[1px] rounded-xl ">
                          <p className="font-Poppins-Medium text-xs absolute top-[-0.6rem] bg-white left-[0.9rem]  px-1 text-[#98A2B3] font-medium">
                            Gender
                          </p>
                          <div className="justify-center items-center w-full flex">
                            <div class="flex p-2 space-x-8 rounded  ">
                              <div class="flex items-center ml-2 text-sm">
                                <label
                                  for="radio-1"
                                  id="radio-1-text"
                                  class="font-medium text-[#98A2B3]  cursor-pointer"
                                >
                                  <div className="flex items-center text-xs space-x-2">
                                    <IoIosMale
                                      id="radio-1-icon"
                                      className="w-[15.38px] h-[15.38px] text-[#98A2B3]"
                                    />
                                    <p>Male</p>
                                  </div>
                                </label>
                              </div>
                              <div class="flex items-center h-5">
                                <input
                                  id="radio-1"
                                  name="radio"
                                  type="radio"
                                  value="Male"
                                  class="w-[16.2px] h-[16.2px] cursor-pointer appearance-none border-[1px] border-gray-400 bg-clip-content p-[2px]  rounded-[50%]  checked:bg-[#12B76A] checked:border-[#12B76A]"
                                  onClick={(e) => GenderChange(e)}
                                />
                              </div>
                            </div>

                            <div class="flex p-2 space-x-8 rounded  ">
                              <div class="ml-2 flex items-center text-sm">
                                <label
                                  for="radio-2"
                                  id="radio-2-text"
                                  class="font-medium text-[#98A2B3] cursor-pointer"
                                >
                                  <div className="flex items-center text-xs space-x-2">
                                    <IoFemaleSharp
                                      id="radio-2-icon"
                                      className="w-[15.38px] h-[15.38px] text-[#98A2B3]"
                                    />
                                    <p>Female</p>
                                  </div>
                                </label>
                              </div>
                              <div class="flex items-center  border-gray-500 h-5">
                                <input
                                  id="radio-2"
                                  name="radio"
                                  type="radio"
                                  value="Female"
                                  class="w-4 h-4 cursor-pointer  appearance-none border-[1px] border-gray-400 bg-clip-content p-[2px]  rounded-[50%]  checked:bg-[#9E77ED] checked:border-[#9E77ED] "
                                  onClick={(e) => GenderChange(e)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="DoctorAddressContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => DoctorAddressClicked()}
                        >
                          <CiLocationOn
                            id="DoctorAddressIcon"
                            className="w-6 h-6 text-[#98A2B3]"
                          />
                          <input
                            id="DoctorAddressInput"
                            name="DoctorAddress"
                            placeholder="Doctor address"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="DoctorAddress"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Doctor Address
                          </p>
                        </div>

                        <div
                          id="DoctorRatioContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => DoctorRatioClicked()}
                        >
                          <div
                            id="DoctorRatioBorder"
                            className="w-6 h-6 border-[1px] rounded-lg border-[#98A2B3] p-[0.10rem] flex items-center mr-1"
                          >
                            <BsPercent
                              id="DoctorRatioIcon"
                              className=" text-[#98A2B3]  opacity-40"
                            />
                          </div>
                          <input
                            id="DoctorRatioInput"
                            name="DoctorRatio"
                            placeholder="Doctor ratio"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="DoctorRatio"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Doctor's Ratio
                          </p>
                        </div>

                        <div
                          id="PasswordContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => PasswordClicked()}
                        >
                          <FiLock
                            id="PasswordIcon"
                            className=" text-[#98A2B3] opacity-40 w-6 h-6 mr-2"
                          />
                          <input
                            id="PasswordInput"
                            name="Password"
                            placeholder="Password"
                            type="password"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="Password"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            Password
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                    <button
                      type="button"
                      className="text-sm font-Poppins-Medium flex flex-grow py-4 bg-[#B7C835] justify-center rounded-xl text-white"
                    >
                      Add doctor
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
