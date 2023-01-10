import React, { useState } from "react";
import SideBar from "./components/SideBar";
import "react-datepicker/dist/react-datepicker.css";
import profile from "./Images/profile.jpg";
import { IoIosClose } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { VscListFlat } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";


import Header from "./components/Header";
import { useTranslation } from "react-i18next";
function EditEmployee() {
  const { t, i18n } = useTranslation();

  const [BirthDate, setBirthDate] = useState(new Date());
  const [WorkDate, setWorkDate] = useState(new Date());

  const [To, ToonChange] = useState("10:00");
  const [From, FromonChange] = useState("10:00");

  const BirthInput = React.forwardRef((props, ref) => {
    return (
      <div className=" p-3  justify-between   outline-0  border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4  relative m-auto border-[1px] rounded-xl ">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Medium">
          {t("Date of birth")}
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black text-xs font-Poppins-Medium"
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
      <div className="flex bg-[#F9FAFF] p-3 py-4 rounded-xl justify-between items-center w-full outline-0 border-2 ">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Medium">
          {t("Work start")}
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black text-xs font-Poppins-Medium"
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
  function drawer() {
    document.getElementById("drawerBody").classList.remove("hidden");
    document
      .getElementById("drawerBody")
      .classList.add(
        "flex",
        "fixed",
        "h-screen",
        "w-full",
        "bg-transparent",
        "top-0",
        "left-0",
        "lg:hidden",
        "z-10"
      );
  }
  function closeDrawer() {
    document.getElementById("drawerBody").classList.add("hidden");
  }

  return (
    <div className="w-full h-full pr-5 p-5">
      <div className="w-full flex ">
        <div className="bg-white mr-[-1rem] lg:mr-0 rounded-l-xl ">
          <VscListFlat
            id="drawerbtn"
            className="text-black  text-xl m-2  cursor-pointer w-10 h-20 lg:hidden "
            onClick={() => drawer()}
          />
        </div>
        <Header />
      </div>
      <div className="flex ">
        <SideBar page="Staff" />
        <div className="w-full h-full ml-8 mt-10">
          <div className="flex flex-col w-full justify-between">
            <div className="flex flex-col md:flex-row w-full space-x-2 justify-between border-b-[1px] pb-5">
              <div className="w-fit pr-2  rounded-lg flex items-center mr-5 space-x-5">
                <img
                  src={profile}
                  className="rounded-full w-[56px] h-[56px]  ml-2"
                />
                <h1 className="font-Poppins-Bold  text-xl">Ali Abu Samra</h1>
              </div>

              <div className="flex space-x-5 justify-between items-center">
                <div className="flex items-center">
                  <p className="font-Poppins-Medium text-[#98A2B3] text-sm font-medium">
                    Added on 26/10/2022
                  </p>
                </div>
                <div className="bg-[#F04438] w-fit py-3  flex items-center justify-center px-10 md:px-20 rounded-xl cursor-pointer ">
                  <p className="text-sm flex items-center justify-center font-Poppins-Medium text-white">
                    {t("Delete")}
                  </p>
                </div>
              </div>
            </div>

            <div className=" mt-5">
              <div className="flex space-y-5 lg:space-y-0  lg:flex-row flex-col lg:space-x-5 w-full">
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 lg:w-[60%]">
                  <div className="relative mx-auto w-fit h-full rounded-2xl flex   bg-no-repeat">
                    <img
                      src={profile}
                      className="w-[270px] h-[270px] bg-cover rounded-2xl "
                    />
                    <div className="w-full h-full pt-3 absolute flex justify-end ">
                      <IoIosClose className=" text-2xl  text-[#F04438] bg-[#FFFFFF] rounded-full  mr-2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 md:w-1/2 flex-grow">
                    <div className="bg-[#F9FAFF]  border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-4 px-4    relative  border-[1px] rounded-xl ">
                      <input
                        name="Name"
                        placeholder={t("Name")}
                        type="text"
                        className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                      />
                    </div>
                    <div className="bg-[#F9FAFF]  border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-4 px-4    relative  border-[1px] rounded-xl ">
                      <input
                        name="Email"
                        placeholder={t("Email")}
                        type="email"
                        className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                      />
                    </div>
                    <div className="bg-[#F9FAFF]  border-[#E4E7EC] w-full h-fit  flex space-x-2 items-center py-4 px-4    relative  border-[1px] rounded-xl ">
                      <input
                        name="Phone number"
                        placeholder={t("Phone number")}
                        type="tel"
                        className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                      />
                    </div>
                    <div className="">
                      <ReactDatePicker
                        id="date"
                        dateFormat="yyyy/MM/dd"
                        className=" "
                        customInput={<BirthInput />}
                        selected={BirthDate}
                        onChange={(date) => setBirthDate(date)}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 lg:w-[40%]">
                  <textarea
                    placeholder={t("Experience")}
                    name="Experience"
                    className=" bg-[#F9FAFF] row-span-2 text-xs border-[#E4E7EC] w-full h-full  flex  items-center py-3 px-4 outline-0 ring-0   relative  border-[1px] rounded-xl "
                    rows={6}
                  />
                  <div className="bg-[#F9FAFF]  border-[#E4E7EC] w-full h-fit  flex  items-center py-4 px-4    relative  border-[1px] rounded-xl ">
                    <input
                      name="College"
                      placeholder={t("College")}
                      type="text"
                      className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                    />
                  </div>
                  <div className="bg-[#F9FAFF]  border-[#E4E7EC] w-full h-fit  flex  items-center py-4 px-4    relative  border-[1px] rounded-xl ">
                    <input
                      name="Salary rate"
                      placeholder={t("Salary rate")}
                      type="text"
                      className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                    />
                  </div>
                </div>
              </div>
              <div className="flex space-y-5 lg:space-y-0  lg:space-x-5 lg:flex-row flex-col  mt-5">
                <div className="flex flex-col space-y-5 lg:w-[60%]">
                  <div className=" bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit  flex  items-center py-4 px-4    relative  border-[1px] rounded-xl ">
                    <input
                      name="Address"
                      placeholder={t("Address")}
                      type="text"
                      className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                    />
                  </div>
                  <div className=" flex space-x-5 justify-between">
                    <div className="w-1/4 lg:w-full pr-2  bg-[#F9FAFF] rounded-lg flex border-[1px] border-[#E4E7EC]  items-center lg:mr-5">
                      <select
                        name="JobTitle"
                        className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Medium  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
                      >
                        <option value="" selected disabled hidden className="">
                          {t("Job title")}
                        </option>
                      </select>
                    </div>
                    <div className="w-full">
                      <ReactDatePicker
                        id="date"
                        dateFormat="yyyy/MM/dd"
                        className=" "
                        customInput={<WorkInput />}
                        selected={WorkDate}
                        onChange={(date) => setWorkDate(date)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-5 lg:w-[40%]">
                  <div className="w-full py-1 lg:py-0 flex-grow pr-2 bg-[#F9FAFF] rounded-lg flex border-[1px] border-[#E4E7EC]  items-center mr-5">
                    <select
                      name="Specialization"
                      className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Medium  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
                    >
                      <option value="" selected disabled hidden className="">
                        {t("Specialization")}
                      </option>
                    </select>
                  </div>
                  <div className="flex py-2 lg:py-0  bg-[#F9FAFF] items-center justify-end rounded-xl flex-grow">
                    <p className="bg-[#F9FAFF] opacity-80 font-Poppins-Medium text-xs text-[#98A2B3] pl-5">
                      {t("Worktime")}
                    </p>
                    <div className="flex x items-center justify-end rounded-xl flex-grow">
                      <div className="bg-[#F9FAFF] border-[#E4E7EC] px-4 py-2  h-fit  flex  items-center   border-r-[1px] rounded-l-xl">
                        <TimePicker
                          disableClock={true}
                          onChange={FromonChange}
                          value={From}
                          clearIcon={""}
                          className="w-fit text-xs"
                        />
                        <IoMdTime className="text-[#98A2B3] w-[20px] h-[20px]" />
                      </div>
                      <div className="bg-[#F9FAFF] border-[#E4E7EC] px-4  h-fit  flex  items-center   border-l-[1px] rounded-r-xl">
                        <TimePicker
                          disableClock={true}
                          onChange={ToonChange}
                          clearIcon={""}
                          value={To}
                          className="w-fit text-xs"
                        />
                        <IoMdTime className="text-[#98A2B3] w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <textarea
                placeholder={t("Notes")}
                name="Notes"
                className="mt-8  text-xs font-Poppins-Medium placeholder:text-[#98A2B3] bg-[#F9FAFF] border-[#E4E7EC] w-full h-full  flex  items-center py-3 px-4 outline-0 ring-0   relative  border-[1px] rounded-xl "
                rows={5}
              />
              <div className="flex md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-6 justify-end space-x-2 mt-20">
                <Link
                  to="/Staff"
                  className="bg-transparent border-[1px]  border-[#D0D5DD] w-fit  flex items-center justify-center lg:px-16 px-8 py-2 rounded-xl cursor-pointer "
                >
                  <p className="text-sm flex items-center justify-center text-black font-Poppins-Regular">
                    {t("Cancel")}
                  </p>
                </Link>
                <div className="bg-transparent border-[1px] border-[#D0D5DD] w-fit  flex items-center justify-center lg:px-16 px-8 py-2 rounded-xl cursor-pointer ">
                  <p className="text-sm flex items-center justify-center text-black font-Poppins-Regular">
                    {t("Print")}
                  </p>
                </div>
                <div className="bg-[#B7C835] w-fit  flex items-center justify-center lg:px-32 px-16 py-3 rounded-xl cursor-pointer ">
                  <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
                    {t("Add")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Drawer */}
      <div id="drawerBody" className=" hidden  ">
        <div
          id="drawer"
          className=" w-full bg-[#0D2135] opacity-80 h-full md:w-1/2"
        >
          <div className="p-4">
            <AiOutlineClose
              className="text-xl text-white cursor-pointer "
              onClick={() => closeDrawer()}
            />
          </div>
          <div className="flex flex-col ml-10 md:ml-20 space-y-1 w-full justify-center  h-4/5 text-white ">
            {/* border-b-2 border-[#847244] */}
            <Link
              to="/"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center  text-xl  p-2 md:w-1/2 w-3/4"
            >
              <div className="font-Poppins-Regular text-sm">{t("Home")}</div>
            </Link>
            <Link
              to="/Patients"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 "
            >
              <div className="font-Poppins-Regular text-sm">
                {t("Patients")}{" "}
              </div>
            </Link>
            <Link
              to="/Analytic"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">
                {t("Analytics")}
              </div>
            </Link>
            <Link
              to="/Doctors"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Doctors")}</div>
            </Link>
            <Link
              to="/Labs"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Labs")} </div>
            </Link>
            <Link
              to="/Staff"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Staff")}</div>
            </Link>
            <Link
              to="/Store"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Store")}</div>
            </Link>
            <Link
              to="/Reports"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Reports")}</div>
            </Link>
            <Link
              to="/"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">
                {t("Accounting")}
              </div>
            </Link>
            <Link
              to="/Suppliers"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">
                {t("Suppliers")}
              </div>
            </Link>
            <Link
              to="/Settings"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Setting")}</div>
            </Link>
            <Link
              to="/"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Logout")}</div>
            </Link>
          </div>
        </div>
        <div className="hidden sm:block h-full w-full bg-black opacity-40" />
      </div>
    </div>
  );
}

export default EditEmployee;
