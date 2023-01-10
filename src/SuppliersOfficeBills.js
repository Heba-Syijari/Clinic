import React, { useState } from "react";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";
import PangrationSuppliersOfficeBill from "./components/Suppliers/PangrationSuppliersOfficeBill";
import EditOfficeBills from "./components/Suppliers/EditOfficeBills";
import DeleteOfficeBill from "./components/Suppliers/DeleteOfficeBill";

import { useTranslation } from "react-i18next";
import Header from "./components/Header";

const products = [
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
];

function SuppliersOfficeBills() {
  const { t, i18n } = useTranslation();

  const [FromDate, setFromDate] = useState(new Date());
  const [ToDate, setToDate] = useState(new Date());
  const [OpenDeleteOfficeBill, setOpenDeleteOfficeBill] = useState(false);
  const [OpenEditOfficeBill, setOpenEditOfficeBill] = useState(false);

  const FromInput = React.forwardRef((props, ref) => {
    return (
      <div className="flex p-2 bg-[#F9FAFF] rounded-xl justify-between items-center w-fit outline-0 border-2">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Regular">
          {t("From")}
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

  const ToInput = React.forwardRef((props, ref) => {
    return (
      <div className="flex p-2 bg-[#F9FAFF] rounded-xl justify-between items-center w-fit outline-0 border-2">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Regular">
          {t("To")}
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
    <div className="w-full h-full p-5 pr-5">
      <DeleteOfficeBill
        open={OpenDeleteOfficeBill}
        setOpen={setOpenDeleteOfficeBill}
      />
      <EditOfficeBills
        open={OpenEditOfficeBill}
        setOpen={setOpenEditOfficeBill}
      />
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
        <SideBar page="Suppliers" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full flex-col lg:flex-row justify-between">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:gap-0 lg:grid-cols-1 w-full space-x-2">
              <div className="w-full flex flex-col lg:flex-row">
                <div className="w-fit pr-2 bg-white rounded-lg flex items-center ">
                  <select className=" w-fit  rounded-lg font-Poppins-Regular  text-base outline-none px-4 py-2 cursor-pointer">
                    <option value="" selected disabled hidden>
                      {t("Sort by")}
                    </option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                  </select>
                </div>
                <div className="lg:ml-4 mt-5 lg:mt-0 w-full flex space-x-2 md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-5">
                  <Link
                    to="/Suppliers"
                    className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                  >
                    <p className="text-[#101828] text-center">
                      {t("Scientific office names")}
                    </p>
                  </Link>

                  <Link
                    to="/Suppliers/OfficeBills"
                    className=" bg-[#B7C835] w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                  >
                    <p className=" text-white text-center">
                      {t("Scientific office bills")}
                    </p>
                  </Link>

                  <Link
                    to="/Suppliers/PaidBills"
                    className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                  >
                    <p className="text-[#101828] text-center">
                      {t("Paid bills")}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-5 space-y-2 md:space-y-0  md:space-x-10">
                <div className="w-fit flex ">
                  <ReactDatePicker
                    id="date"
                    dateFormat="yyyy/MM/dd"
                    className=" "
                    customInput={<FromInput />}
                    selected={FromDate}
                    onChange={(date) => setFromDate(date)}
                  />
                </div>
                <div className="w-fit flex ">
                  <ReactDatePicker
                    id="date"
                    dateFormat="yyyy/MM/dd"
                    className=" "
                    customInput={<ToInput />}
                    selected={ToDate}
                    onChange={(date) => setToDate(date)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pangration */}

          <PangrationSuppliersOfficeBill
            setOpenEditOfficeBill={setOpenEditOfficeBill}
            setOpenDeleteOfficeBill={setOpenDeleteOfficeBill}
            itemsPerPage={8}
            Data={products}
          />
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

export default SuppliersOfficeBills;
