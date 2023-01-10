import React, { useState } from "react";
import SideBar from "./components/SideBar";

import "react-datepicker/dist/react-datepicker.css";
import AnalysisCount from "./components/Reports/AnalysisCount";
import Reviewers from "./components/Reports/Reviewers";
import Revenues from "./components/Reports/Revenues";
import Expenses from "./components/Reports/Expenses";
import Store from "./components/Reports/Store";
import DoctorsReport from "./components/Reports/DoctorsReport";
import OfficesReport from "./components/Reports/OfficesReport";
import Examinations from "./components/Reports/Examinations";
import CollectedMoney from "./components/Reports/CollectedMoney";
import Debt from "./components/Reports/Debt";
import { VscListFlat } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import Header from "./components/Header";
import { useTranslation } from "react-i18next";

function Reports() {
  const { t, i18n } = useTranslation();

  const [Section, setSection] = useState("Analysis");

  const RevenuesSection = () => {
    setSection("Revenues");
  };

  const AnalysisSection = () => {
    setSection("Analysis");
  };

  const ReviewersSection = () => {
    setSection("Reviewers");
  };

  const ExpensesSection = () => {
    setSection("Expenses");
  };

  const StoreSection = () => {
    setSection("Store");
  };

  const DoctorsSection = () => {
    setSection("Doctors");
  };

  const MoneySection = () => {
    setSection("Money");
  };

  const DebtSection = () => {
    setSection("Debt");
  };
  const ExaminationsSection = () => {
    setSection("Examinations");
  };
  const officesSection = () => {
    setSection("offices");
  };

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
        <SideBar page="Reports" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full justify-between">
            <div className="flex w-full space-x-5 md:space-x-2 bg-white h-fit p-3 rounded-2xl overflow-x-scroll scrollbar-hide">
              <div
                className={`${
                  Section === "Analysis" ? "bg-[#0D2135]" : "bg-white"
                }  w-fit px-1 flex items-center justify-center  rounded-2xl cursor-pointer py-3 flex-[0_0_14.5%]`}
                onClick={() => AnalysisSection()}
              >
                <p
                  className={`font-Poppins-Medium text-sm flex text-center items-center justify-center ${
                    Section === "Analysis" ? "text-white" : "text-black"
                  } `}
                >
                  {t("Analysis count")}
                </p>
              </div>

              <div
                className={`${
                  Section === "Reviewers" ? "bg-[#0D2135]" : "bg-white"
                } w-fit px-1 flex items-center text-center  justify-center  rounded-2xl cursor-pointer py-3  flex-[0_0_14.5%]`}
                onClick={() => ReviewersSection()}
              >
                <p
                  className={`font-Poppins-Medium text-sm flex items-center justify-center ${
                    Section === "Reviewers" ? "text-white" : "text-black"
                  } `}
                >
                  {t("Reviewers")}
                </p>
              </div>
              <div
                className={`${
                  Section === "Revenues" ? "bg-[#0D2135]" : "bg-white"
                } w-fit px-1 flex items-center justify-center text-center  rounded-2xl cursor-pointer py-3  flex-[0_0_14.5%]`}
                onClick={() => RevenuesSection()}
              >
                <p
                  className={`font-Poppins-Medium text-sm flex items-center justify-center ${
                    Section === "Revenues" ? "text-white" : "text-black"
                  } `}
                >
                  {t("Revenues")}
                </p>
              </div>

              <div
                className={`${
                  Section === "Expenses" ? "bg-[#0D2135]" : "bg-white"
                } w-fit px-1 flex items-center justify-center text-center  rounded-2xl cursor-pointer py-3  flex-[0_0_14.5%]`}
                onClick={() => ExpensesSection()}
              >
                <p
                  className={`font-Poppins-Medium text-sm flex items-center justify-center ${
                    Section === "Expenses" ? "text-white" : "text-black"
                  } `}
                >
                  {t("Expenses")}
                </p>
              </div>

              <div
                className={`${
                  Section === "Store" ? "bg-[#0D2135]" : "bg-white"
                }  w-fit px-1 flex items-center justify-center text-center  rounded-2xl cursor-pointer py-3  flex-[0_0_14.5%]`}
                onClick={() => StoreSection()}
              >
                <p
                  className={`font-Poppins-Medium text-sm flex items-center justify-center ${
                    Section === "Store" ? "text-white" : "text-black"
                  } `}
                >
                  {t("Store")}
                </p>
              </div>

              <div
                className={`${
                  Section === "Doctors" ? "bg-[#0D2135]" : "bg-white"
                } w-fit px-1 flex items-center justify-center text-center  rounded-2xl cursor-pointer py-3  flex-[0_0_14.5%]`}
                onClick={() => DoctorsSection()}
              >
                <p
                  className={`font-Poppins-Medium text-sm flex items-center justify-center  ${
                    Section === "Doctors" ? "text-white" : "text-black"
                  } `}
                >
                  {t("Doctors")}
                </p>
              </div>

              <div
                className={`${
                  Section === "offices" ? "bg-[#0D2135]" : "bg-white"
                } w-fit px-1 flex items-center justify-center text-center  rounded-2xl cursor-pointer py-3  flex-[0_0_14.5%]`}
                onClick={() => officesSection()}
              >
                <p
                  className={`font-Poppins-Medium text-sm flex items-center justify-center ${
                    Section === "offices" ? "text-white" : "text-black"
                  }`}
                >
                  {t("Scientific offices")}
                </p>
              </div>

              <div
                className={`${
                  Section === "Examinations" ? "bg-[#0D2135]" : "bg-white"
                } w-fit px-1 flex items-center justify-center text-center  rounded-2xl cursor-pointer py-3  flex-[0_0_14.5%]`}
                onClick={() => ExaminationsSection()}
              >
                <p
                  className={` font-Poppins-Medium text-sm flex items-center justify-center ${
                    Section === "Examinations" ? "text-white" : "text-black"
                  } `}
                >
                  {t("Examinations")}
                </p>
              </div>

              <div
                className={`${
                  Section === "Money" ? "bg-[#0D2135]" : "bg-white"
                } w-fit px-1 flex items-center justify-center text-center  rounded-2xl cursor-pointer py-3  flex-[0_0_14.5%]`}
                onClick={() => MoneySection()}
              >
                <p
                  className={`font-Poppins-Medium text-sm flex items-center justify-center ${
                    Section === "Money" ? "text-white" : "text-black"
                  }`}
                >
                  {t("Collected money")}
                </p>
              </div>

              <div
                className={`${
                  Section === "Debt" ? "bg-[#0D2135]" : "bg-white"
                } w-fit px-1 flex items-center justify-center text-center  rounded-2xl cursor-pointer py-3  flex-[0_0_14.5%]`}
                onClick={() => DebtSection()}
              >
                <p
                  className={`font-Poppins-Medium text-sm flex items-center justify-center  ${
                    Section === "Debt" ? "text-white" : "text-black"
                  }`}
                >
                  {t("Debt")}
                </p>
              </div>
            </div>
          </div>

          {/* Pangration */}
          <AnalysisCount section={Section} />
          <Reviewers section={Section} />
          <Revenues section={Section} />
          <Expenses section={Section} />
          <Store section={Section} />
          <DoctorsReport section={Section} />
          <OfficesReport section={Section} />
          <Examinations section={Section} />
          <CollectedMoney section={Section} />
          <Debt section={Section} />

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
                  <div className="font-Poppins-Regular text-sm">
                    {t("Home")}
                  </div>
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
                  <div className="font-Poppins-Regular text-sm">
                    {t("Doctors")}
                  </div>
                </Link>
                <Link
                  to="/Labs"
                  className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2"
                >
                  <div className="font-Poppins-Regular text-sm">
                    {t("Labs")}{" "}
                  </div>
                </Link>
                <Link
                  to="/Staff"
                  className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                >
                  <div className="font-Poppins-Regular text-sm">
                    {t("Staff")}
                  </div>
                </Link>
                <Link
                  to="/Store"
                  className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                >
                  <div className="font-Poppins-Regular text-sm">
                    {t("Store")}
                  </div>
                </Link>
                <Link
                  to="/Reports"
                  className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                >
                  <div className="font-Poppins-Regular text-sm">
                    {t("Reports")}
                  </div>
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
                  <div className="font-Poppins-Regular text-sm">
                    {t("Setting")}
                  </div>
                </Link>
                <Link
                  to="/"
                  className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                >
                  <div className="font-Poppins-Regular text-sm">
                    {t("Logout")}
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden sm:block h-full w-full bg-black opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
