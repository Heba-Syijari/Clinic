import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscListFlat } from "react-icons/vsc";
import { GoSettings } from "react-icons/go";
import { BsPrinter } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { RiListSettingsLine } from "react-icons/ri";
import { HiOutlineArrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";
import SideBar from "./components/SideBar";

import Header from "./components/Header";
import { useTranslation } from "react-i18next";
function Settings() {
  const { t, i18n } = useTranslation();

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
    <div className="h-full w-full p-5">
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
      <div className="w-full h-full flex ">
        <SideBar page="Settings" />
        <div className="flex flex-col w-full lg:ml-8 mt-9">
          <h1 className="font-bold text-2xl font-Poppins-Regular ">
            {t("Settings")}
          </h1>
          <div className="w-full  grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            <Link
              to="/Settings/SystemSettings"
              className="bg-white w-full lg:col-start-1 lg:col-end-3 hover:bg-[#B7C835] group p-5 pt-20 rounded-xl cursor-pointer"
            >
              <RiListSettingsLine className="text-4xl text-[#B7C835] group-hover:text-white" />
              <div className="flex space-x-2 group-hover:text-white items-center mt-2">
                <h1 className="font-Poppins-Bold text-lg">
                  {t("System Settings")}
                </h1>
                <HiOutlineArrowRight />
              </div>
            </Link>

            <div className="bg-white w-full lg:col-start-3 lg:col-end-4 hover:bg-[#B7C835] group pl-5 pb-5 pt-20 rounded-xl cursor-pointer">
              <BsPrinter className="text-4xl ml-2 text-[#B7C835] group-hover:text-white" />
              <div className="flex space-x-2 group-hover:text-white items-center mt-2">
                <h1 className="font-Poppins-Bold text-lg">
                  {t("Print Settings")}
                </h1>
                <HiOutlineArrowRight />
              </div>
            </div>

            <Link
              to="/Settings/BasicPlugins"
              className="bg-white w-full hover:bg-[#B7C835] group px-2 pl-3 pb-5 pt-20 rounded-xl cursor-pointer"
            >
              <RiListSettingsLine className="text-4xl ml-2 text-[#B7C835] group-hover:text-white" />
              <div className="flex space-x-2 group-hover:text-white items-center mt-2">
                <h1 className="font-Poppins-Bold text-lg">
                  {t("Basic plugins")}
                </h1>
                <HiOutlineArrowRight />
              </div>
            </Link>

            <div className="bg-white w-full hover:bg-[#B7C835] group pl-5 pb-5 pt-20 rounded-xl cursor-pointer">
              <div className="border-2 w-fit rounded-lg border-[#B7C835] group-hover:border-white">
                <RxPerson className="text-4xl group-hover:text-white text-[#B7C835]" />
              </div>
              <div className="flex space-x-2 items-center group-hover:text-white mt-2">
                <h1 className="font-Poppins-Bold text-lg">
                  {t("System Owner")}
                </h1>
                <HiOutlineArrowRight />
              </div>
            </div>

            <div className="bg-white w-full hover:bg-[#B7C835]  group pl-4 pr-1 pb-5 pt-20 rounded-xl cursor-pointer">
              <div className="border-2 p-1 w-fit rounded-lg border-[#B7C835] group-hover:border-white">
                <GoSettings className="text-3xl group-hover:text-white text-[#B7C835]" />
              </div>
              <div className="flex space-x-2 items-center group-hover:text-white mt-2">
                <h1 className="font-Poppins-Bold text-lg">
                  {t("Premissions")}
                </h1>
                <HiOutlineArrowRight />
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

export default Settings;
