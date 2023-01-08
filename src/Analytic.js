import React, { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import { FcOpenedFolder } from "react-icons/fc";
import AddSection from "./components/Analytic/AddSection";
import Intrputik from "./components/Analytic/Intrputik";
import { VscListFlat } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Analytic() {
  const [ShowAddSection, SetShowAddSection] = useState(false);
  const [ShowAddSubSection, SetShowAddSubSection] = useState(false);

  const SectionClicked = () => {
    if (document.getElementById("ArrowForward").classList.contains("hidden")) {
      document.getElementById("ArrowForward").classList.remove("hidden");
      document.getElementById("ClosedFolder").classList.remove("hidden");

      document.getElementById("ArrowBack").classList.add("hidden");
      document.getElementById("OpenedFolder").classList.add("hidden");
      document.getElementById("SubList").classList.add("hidden");
    } else if (
      !document.getElementById("ArrowForward").classList.contains("hidden")
    ) {
      document.getElementById("ArrowBack").classList.remove("hidden");
      document.getElementById("OpenedFolder").classList.remove("hidden");
      document.getElementById("SubList").classList.remove("hidden");

      document.getElementById("ArrowForward").classList.add("hidden");
      document.getElementById("ClosedFolder").classList.add("hidden");
    }
  };

  const SectionAdd = () => {
    SetShowAddSection(true);
    SetShowAddSubSection(false);
  };
  const SubSectionClicked = () => {
    SetShowAddSubSection(true);
    SetShowAddSection(false);
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
        <SideBar page="Analytic" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex flex-col md:flex-row">
            <div className="bg-white p-5 lg:w-[20rem]  w-full flex flex-col rounded-2xl items-center ">
              <div
                className="bg-[#B7C835] w-fit  flex items-center justify-center px-10 py-3 rounded-xl cursor-pointer "
                onClick={() => SectionAdd()}
              >
                <p className="text-sm font-Poppins-Regular flex items-center justify-center text-white">
                  <AiOutlineFolderAdd className="mr-2 text-3xl" />
                  Add section
                </p>
              </div>
              <div className="flex justify-between w-full  px-3 mt-5">
                <div className="flex items-center space-x-2">
                  <BsArrowDown />
                  <p className="font-Poppins-Regular text-sm">Move up</p>
                </div>
                <div className="flex items-center space-x-2">
                  <BsArrowUp />
                  <p className="font-Poppins-Regular text-sm">Move down</p>
                </div>
              </div>
              <div className="w-full">
                <div
                  className="flex pl-4  cursor-pointer mt-5 bg-[#F1F4D7] rounded-lg w-full py-2 px-3 items-center"
                  onClick={() => SectionClicked()}
                >
                  <IoIosArrowForward id="ArrowForward" className=" mr-2" />
                  <IoIosArrowDown id="ArrowBack" className="mr-2 hidden" />

                  <div className="flex  items-center ">
                    <FcFolder id="ClosedFolder" className="text-2xl mr-2" />
                    <FcOpenedFolder
                      id="OpenedFolder"
                      className="text-2xl mr-2 hidden"
                    />

                    <p className="font-Poppins-Medium text-sm">
                      Main section 1
                    </p>
                  </div>
                </div>

                <div id="SubList" className="hidden ">
                  <div
                    className="bg-[#B7C835] hidden  w-fit   items-center justify-center px-5 mx-auto py-2 mt-2 rounded-xl cursor-pointer "
                    onClick={() => SubSectionClicked()}
                  >
                    <p className="text-base flex items-center justify-center text-white">
                      Add SubSection
                    </p>
                  </div>
                  <div className="w-full mt-3">
                    <ul className="flex space-y-2 flex-col justify-center items-center w-full">
                      <li>TEST1</li>
                      <li>TEST2</li>
                      <li>TEST3</li>
                      <li>TEST4</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex pl-4 cursor-pointer space-x-2 mt-5 bg-[#F1F4D7] rounded-lg w-full py-2 px-3 items-center">
                <IoIosArrowForward />
                <div className="flex  items-center">
                  <FcFolder className="text-2xl mr-2" />

                  <p className="font-Poppins-Medium text-sm">Main section 1</p>
                </div>
              </div>
              <div className="flex pl-4 space-x-2 mt-5 bg-[#F1F4D7] rounded-lg w-full py-2 px-3 items-center">
                <IoIosArrowForward />
                <div className="flex space-x-2 items-center">
                  <FcFolder className="text-2xl" />
                  <p className="font-Poppins-Medium text-sm">Main section 1</p>
                </div>
              </div>
            </div>

            <div className="md:w-3/4 w-full  mt-5 md:ml-8  md:mt-0 ">
              <AddSection show={ShowAddSection} />
              <Intrputik show={ShowAddSubSection} />
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
              <div className="font-Poppins-Regular text-sm">Home</div>
            </Link>
            <Link
              to="/Patients"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 "
            >
              <div className="font-Poppins-Regular text-sm">Patients </div>
            </Link>
            <Link
              to="/Analytic"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Analytics</div>
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
              <div className="font-Poppins-Regular text-sm">Accounting</div>
            </Link>
            <Link
              to="/Suppliers"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Suppliers</div>
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
  );
}

export default Analytic;
