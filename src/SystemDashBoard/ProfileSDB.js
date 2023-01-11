import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";
import SideBarSystemDB from "../components/SystemDashBoard/SideBarSystemDB";
import HeaderSystemDB from "../components/SystemDashBoard/HeaderSystemDB";
import axios from "axios";

function ProfileSDB() {
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

  const GetProfile = async () => {
    await axios.get(`/admin-scope/get-TestUnits`).then((response) => {});
  };

  useEffect(() => {
    GetProfile();
  }, []);

  const Change = async () => {
    if (document.getElementById("Unit").value == "") {
      document.getElementById("message").textContent =
        "Please Insert The Value";
    } else {
      let formdata = new FormData();
      formdata.append("test_unit", document.getElementById("Unit").value);
      await axios
        .post(`/admin-scope/create-TestUnit`, formdata)
        .then((response) => {
          document.getElementById("message").textContent = "";

          document.getElementById("Unit").value = "";
        })
        .catch((error) => {
          if (error.response) {
            document.getElementById("message").textContent =
              error.response.data.message;
          }
        });
    }
  };
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
        <HeaderSystemDB />
      </div>
      <div className="flex ">
        <SideBarSystemDB page="Profile" />
        <div className="w-full h-full lg:ml-8 mt-10 pb-48">
          {/* Pangration */}
          <div className={`  mt-10 mb-10`}>
            <div className="grid grid-cols-2 gap-5 w-full justify-between ">
              <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
                <input
                  id="email"
                  placeholder="email"
                  type="email"
                  className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                />
              </div>

              <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
                <input
                  id="Newpassword"
                  placeholder="new password"
                  type="text"
                  className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                />
              </div>

              <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
                <input
                  id="ConfirmPassword"
                  placeholder="Confirm password"
                  type="text"
                  className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                />
              </div>

              <p
                id="message"
                className="text-sm text-red-500 flex items-center"
              ></p>
              <div className="col-start-1 col-end-3 ml-auto bg-[#0D2135] w-[30%] lg:w-[20%]  flex items-center justify-center px-5 lg:px-10  py-2 rounded-xl cursor-pointer ">
                <p
                  className="text-sm flex items-center justify-center text-center text-white font-Poppins-Medium"
                  onClick={() => Change()}
                >
                  Change
                </p>
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
                  to="/SystemDashBoard"
                  className="hover:bg-black rounded-xl cursor-pointer flex justify-center  text-xl  p-2 md:w-1/2 w-3/4"
                >
                  <div className="font-Poppins-Regular text-sm">Colors</div>
                </Link>
                <Link
                  to="/SystemDashBoard/Analytic"
                  className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 "
                >
                  <div className="font-Poppins-Regular text-sm">Analytic </div>
                </Link>
                <Link
                  to="/SystemDashBoard/Labs"
                  className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2"
                >
                  <div className="font-Poppins-Regular text-sm">Labs </div>
                </Link>
                <Link
                  to="/SystemDashBoard/Quantity"
                  className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2"
                >
                  <div className="font-Poppins-Regular text-sm">Quantity </div>
                </Link>
                <Link
                  to="/SystemDashBoard"
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
  );
}

export default ProfileSDB;
