import React, { useState } from "react";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PangrationSuppliersOfficeName from "./components/Suppliers/PangrationSuppliersOfficeName";
import { Link } from "react-router-dom";
import AllPatientsPangration from "./components/Patients/AllPatientsPangration";
import AddPatient from "./components/Patients/AddPatient";
import LaboratoriesPangration from "./components/Patients/LaboratoriesPangration";
import { VscListFlat } from "react-icons/vsc";

import Header from "./components/Header";
import { useTranslation } from "react-i18next";
const patients = [
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
    completed: false,
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    completed: true,
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    completed: false,
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    completed: true,
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    Age: "27",
    completed: true,
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    completed: true,
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    completed: true,
    Gender: "Man",
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    completed: true,
    Gender: "Man",
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    completed: true,
    Gender: "Man",
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    completed: true,
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    completed: true,
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    completed: true,
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DateOfVisit: "19/10/2022",
    Phone: "0598276050",
    Gender: "Man",
    completed: true,
    Age: "27",
    Doctor: "Dr.Anand K.Gundakaram",
  },
];

function Patients() {
  const { t, i18n } = useTranslation();

  const [FromDate, setFromDate] = useState(new Date());
  const [ToDate, setToDate] = useState(new Date());
  const [OpenAddPatients, setOpenAddPatients] = useState(false);
  const [section, setSection] = useState("all");
  const FromInput = React.forwardRef((props, ref) => {
    return (
      <div className=" bg-[#F9FAFF] flex p-3 rounded-xl justify-between items-center w-fit outline-0 border-2">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Medium">
          {t("From")}
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

  const ToInput = React.forwardRef((props, ref) => {
    return (
      <div className="bg-[#F9FAFF] flex p-3 rounded-xl justify-between items-center w-fit outline-0 border-2">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Medium">
          {t("To")}
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

  const PatientsAdd = () => {
    setOpenAddPatients(true);
  };

  const SectionLaboratories = () => {
    setSection("Laboratories");
  };

  const SectionAll = () => {
    setSection("all");
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
    <div className="w-full h-full lg:pr-5 p-5">
      <AddPatient open={OpenAddPatients} setOpen={setOpenAddPatients} />
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
        <SideBar page="Patients" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex flex-col lg:flex-row w-full justify-between">
            <div className="grid grid-cols-1 gap-2  lg:gap-0 lg:grid-cols-5 w-full space-x-2">
              <div className="w-fit pr-2 bg-white rounded-lg flex items-center ">
                <select className=" w-fit  rounded-lg font-Poppins-Medium  text-base outline-none px-4 py-2 cursor-pointer">
                  <option value="" selected disabled hidden>
                    {t("Sort by")}
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>

              <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 pr-2 lg:col-start-2 lg:col-end-5">
                <div className="w-fit flex  space-x-2">
                  <div
                    className={`${
                      section === "all" ? "bg-[#B7C835]" : "bg-white"
                    } w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer`}
                    onClick={() => SectionAll()}
                  >
                    <p
                      id="all"
                      className={`${
                        section === "all" ? "text-white" : "text-[#101828]"
                      } text-white text-xs text-center `}
                    >
                      {t("All")}
                    </p>
                  </div>

                  <div
                    className={`${
                      section === "NotComplete" ? "bg-[#B7C835]" : "bg-white"
                    } bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer`}
                    onClick={() => setSection("NotComplete")}
                  >
                    <p
                      id="Notcomplete"
                      className={`${
                        section === "all" ? "text-white" : "text-[#101828]"
                      } text-[#101828] text-xs text-center `}
                    >
                      {t("Not complete")}
                    </p>
                  </div>
                  <div
                    className={`${
                      section === "CompletedNotPrinted"
                        ? "bg-[#B7C835]"
                        : "bg-white"
                    } bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer`}
                    onClick={() => setSection("CompletedNotPrinted")}
                  >
                    <p
                      id="CompletedAndNotPrinted"
                      className={`${
                        section === "CompletedNotPrinted"
                          ? "text-white"
                          : "text-[#101828]"
                      } text-[#101828] text-xs text-center`}
                    >
                      {t("Completed and not printed")}
                    </p>
                  </div>
                </div>
                <div className="w-fit flex space-x-2">
                  <div
                    className={`${
                      section === "Printed" ? "bg-[#B7C835]" : "bg-white"
                    } bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer`}
                    onClick={() => setSection("Printed")}
                  >
                    <p
                      id="Printed"
                      className={`${
                        section === "Printed" ? "text-white" : "text-[#101828]"
                      }text-[#101828] text-xs text-center`}
                    >
                      {t("Printed")}
                    </p>
                  </div>

                  <div
                    className={`${
                      section === "Laboratories" ? "bg-[#B7C835]" : "bg-white"
                    } w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer`}
                    onClick={() => SectionLaboratories()}
                  >
                    <p
                      id="Laboratories"
                      className={`${
                        section === "Laboratories"
                          ? "text-white"
                          : "text-[#101828]"
                      } text-xs text-center`}
                    >
                      {t("Laboratories")}
                    </p>
                  </div>

                  <div
                    className={`${
                      section === "Doctors" ? "bg-[#B7C835]" : "bg-white"
                    } bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer`}
                    onClick={() => setSection("Doctors")}
                  >
                    <p
                      id="Doctors"
                      className={`${
                        section === "Doctors" ? "text-white" : "text-[#101828]"
                      }  text-[#101828] text-xs text-center`}
                    >
                      {t("Doctors")}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#0D2135] w-[10rem] lg:w-[95%] mt-5 lg:mt-0 py-2 lg:py-0 flex items-center justify-center lg:col-start-5 lg:col-end-6  rounded-xl cursor-pointer "
                onClick={() => PatientsAdd()}
              >
                <p className="text-base font-Poppins-SemiBold flex items-center justify-center text-white ">
                  <AiOutlinePlus className="mr-2 text-lg" />
                  {t("Add patient")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-5 flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-10">
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

          {/* Pangration */}

          <AllPatientsPangration
            section={section}
            itemsPerPage={8}
            Data={patients}
          />
          <LaboratoriesPangration
            section={section}
            itemsPerPage={8}
            Data={patients}
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
                    {t("Labs")}
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

export default Patients;
