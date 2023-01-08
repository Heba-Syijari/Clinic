import React, { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";
import EmployerContainer from "./components/Staff/EmployerContainer";
import StaffPangration from "./components/Staff/StaffPangration";
import AddEmployee from "./components/Staff/AddEmployee";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";

const employers = [
  {
    id: 1,
    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 2,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 3,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 4,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 5,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 6,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 7,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 8,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 9,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 10,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 11,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 12,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 13,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
  {
    id: 14,

    name: "Ali Abu Samra",
    work: "Worker",
    phone: "0598276050",
    email: "des.aliabusamra@gmail.com",
  },
];

function Staff() {
  const [OpenAddEmployee, setAddEmployee] = useState(false);

  const AddEmployer = () => {
    setAddEmployee(true);
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
      <AddEmployee open={OpenAddEmployee} setOpen={setAddEmployee} />
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
            <div className="flex w-full space-x-2 justify-between">
              <div className="w-fit pr-2 bg-white rounded-lg flex items-center mr-5">
                <select className=" w-fit  rounded-lg font-Poppins-Medium  text-base outline-none px-4 py-2 cursor-pointer">
                  <option value="" selected disabled hidden>
                    Sort by
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>

              <div
                className="bg-[#0D2135] w-fit  flex items-center justify-center px-5 rounded-xl cursor-pointer "
                onClick={() => AddEmployer()}
              >
                <p className="text-base flex items-center justify-center text-white">
                  <AiOutlinePlus className="mr-2 font-Poppins-SemiBold text-lg" />
                  Add employee
                </p>
              </div>
            </div>

            {/* Pangration */}

            <StaffPangration itemsPerPage={12} Data={employers} />
            {/* <EmployerContainer/> */}

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
                    <div className="font-Poppins-Regular text-sm">Home</div>
                  </Link>
                  <Link
                    to="/Patients"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 "
                  >
                    <div className="font-Poppins-Regular text-sm">
                      Patients{" "}
                    </div>
                  </Link>
                  <Link
                    to="/Analytic"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">
                      Analytics
                    </div>
                  </Link>
                  <Link
                    to="/Doctors"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">Doctors</div>
                  </Link>
                  <Link
                    to="/Labs"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">Labs </div>
                  </Link>
                  <Link
                    to="/Staff"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">Staff</div>
                  </Link>
                  <Link
                    to="/Store"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">Store</div>
                  </Link>
                  <Link
                    to="/Reports"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">Reports</div>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">
                      Accounting
                    </div>
                  </Link>
                  <Link
                    to="/Suppliers"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">
                      Suppliers
                    </div>
                  </Link>
                  <Link
                    to="/Settings"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">Setting</div>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
                  >
                    <div className="font-Poppins-Regular text-sm">Logout</div>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:block h-full w-full bg-black opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
