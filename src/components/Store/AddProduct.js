/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { t } from "i18next";

export default function AddProduct({ open, setOpen }) {
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
          {t("Date of birth")}
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
          {t("Work start")}
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
  function close() {
    setOpen(false);
  }

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

  const DescriptionClicked = () => {
    document.getElementById("Description").classList.remove("hidden");
    document
      .getElementById("DescriptionInput")
      .classList.remove("border-[#E4E7EC]");

    document
      .getElementById("DescriptionInput")
      .classList.remove("bg-[#F9FAFF]");
    document
      .getElementById("DescriptionInput")
      .classList.add("border-[#B7C835]");
    document.getElementById("DescriptionInput").classList.add("bg-white");

    document
      .getElementById("DescriptionInput")
      .classList.remove("bg-[#F9FAFF]");
    document.getElementById("DescriptionInput").classList.add("bg-white");
  };

  const CompanyClicked = () => {
    document.getElementById("Company").classList.remove("hidden");
    document
      .getElementById("CompanyContainer")
      .classList.remove("border-[#E4E7EC]");

    document
      .getElementById("CompanyContainer")
      .classList.remove("bg-[#F9FAFF]");
    document
      .getElementById("CompanyContainer")
      .classList.add("border-[#B7C835]");
    document.getElementById("CompanyContainer").classList.add("bg-white");

    document.getElementById("CompanyInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("CompanyInput").classList.add("bg-white");
  };

  const ExpClicked = () => {
    document.getElementById("Exp").classList.remove("hidden");
    document
      .getElementById("ExpContainer")
      .classList.remove("border-[#E4E7EC]");

    document.getElementById("ExpContainer").classList.remove("bg-[#F9FAFF]");
    document.getElementById("ExpContainer").classList.add("border-[#B7C835]");
    document.getElementById("ExpContainer").classList.add("bg-white");

    document.getElementById("ExpInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("ExpInput").classList.add("bg-white");
  };

  const ModelClicked = () => {
    document.getElementById("Model").classList.remove("hidden");
    document
      .getElementById("ModelContainer")
      .classList.remove("border-[#E4E7EC]");

    document.getElementById("ModelContainer").classList.remove("bg-[#F9FAFF]");
    document.getElementById("ModelContainer").classList.add("border-[#B7C835]");
    document.getElementById("ModelContainer").classList.add("bg-white");

    document.getElementById("ModelInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("ModelInput").classList.add("bg-white");
  };

  const QuantityClicked = () => {
    document.getElementById("Quantity").classList.remove("hidden");
    document
      .getElementById("QuantityContainer")
      .classList.remove("border-[#E4E7EC]");

    document
      .getElementById("QuantityContainer")
      .classList.remove("bg-[#F9FAFF]");
    document
      .getElementById("QuantityContainer")
      .classList.add("border-[#B7C835]");
    document.getElementById("QuantityContainer").classList.add("bg-white");

    document.getElementById("QuantityInput").classList.remove("bg-[#F9FAFF]");
    document.getElementById("QuantityInput").classList.add("bg-white");
  };

  const MeasuringUnitChanged = () => {
    document.getElementById("MeasuringUnit").classList.remove("hidden");
    document
      .getElementById("MeasuringUnitContainer")
      .classList.remove("border-[#E4E7EC]");

    document
      .getElementById("MeasuringUnitContainer")
      .classList.remove("bg-[#F9FAFF]");
    document
      .getElementById("MeasuringUnitContainer")
      .classList.add("border-[#B7C835]");
    document.getElementById("MeasuringUnitContainer").classList.add("bg-white");

    document
      .getElementById("MeasuringUnitInput")
      .classList.remove("bg-[#F9FAFF]");
    document.getElementById("MeasuringUnitInput").classList.add("bg-white");
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
                        {t("Add Product")}
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
                          {t("Drop your here, or")}{" "}
                          <span
                            className="text-[#B7C835] mt-1 underline underline-[#B7C835] cursor-pointer"
                            onClick={(e) => filebrowser(e)}
                          >
                            {t("select click to browse")}
                          </span>
                        </h1>
                      </div>

                      <div className="flex flex-col space-y-5 h-full mt-10">
                        <div
                          id="NameContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => NameClicked()}
                        >
                          <input
                            placeholder={t("Product name")}
                            name="name"
                            id="NameInput"
                            type="text"
                            className=" w-full bg-[#F9FAFF]  font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="Name"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            {t("Product name")}
                          </p>
                        </div>
                        <div className="w-full relative">
                          <textarea
                            id="DescriptionInput"
                            placeholder={t("Description")}
                            className="bg-[#F9FAFF] font-Poppins-Medium placeholder:text-[#98A2B3] text-xs border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-4 px-4 outline-0 ring-0   relative m-auto border-[1px] rounded-xl "
                            rows={3}
                            onClick={() => DescriptionClicked()}
                          />
                          <p
                            id="Description"
                            className="hidden font-Poppins-Medium text-xs absolute  top-[-0.8rem] bg-white left-[0.8rem]  px-1 text-[#B7C835] font-medium"
                          >
                            {t("Description")}
                          </p>
                        </div>
                        <div
                          id="CompanyContainer"
                          className="bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => CompanyClicked()}
                        >
                          <input
                            id="CompanyInput"
                            name="Company"
                            placeholder={t("Company")}
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="Company"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            {t("Company")}
                          </p>
                        </div>

                        <div
                          id="ExpContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => ExpClicked()}
                        >
                          <input
                            id="ExpInput"
                            name="Exp"
                            placeholder={t("Exp")}
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="Exp"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            {t("Exp")}
                          </p>
                        </div>

                        <div
                          id="ModelContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => ModelClicked()}
                        >
                          <input
                            id="ModelInput"
                            name="Model"
                            placeholder={t("Model")}
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="Model"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            {t("Model")}
                          </p>
                        </div>

                        <div
                          id="MeasuringUnitContainer"
                          className="w-full pr-2 bg-[#F9FAFF] rounded-lg flex border-[1px] border-[#E4E7EC] relative  items-center mr-5"
                          onClick={() => MeasuringUnitChanged()}
                        >
                          <select
                            id="MeasuringUnitInput"
                            name="MeasuringUnit"
                            className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Medium  text-[#98A2B3] text-xs  outline-none px-4 py-3 cursor-pointer"
                          >
                            <option
                              value=""
                              selected
                              disabled
                              hidden
                              className=""
                            >
                             {t("Measuring unit")}
                            </option>
                          </select>
                          <p
                            id="MeasuringUnit"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.8rem]  px-1 text-[#B7C835] font-medium"
                          >
                            {t("Measuring unit")}
                          </p>
                        </div>

                        <div
                          id="QuantityContainer"
                          className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl "
                          onClick={() => QuantityClicked()}
                        >
                          <input
                            id="QuantityInput"
                            name="Quantity"
                            placeholder={t("Quantity")}
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                          <p
                            id="Quantity"
                            className="hidden font-Poppins-Medium text-xs absolute top-[-0.8rem] bg-white left-[0.2rem]  px-1 text-[#B7C835] font-medium"
                          >
                            {t("Quantity")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                    <button
                      type="button"
                      className="flex flex-grow py-3 text-sm font-Poppins-Medium bg-[#B7C835] justify-center rounded-xl text-white"
                    >
                      {t("Add Product")}
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
