import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineEye, AiOutlinePlus } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";
import HeaderSystemDB from "../components/SystemDashBoard/HeaderSystemDB";
import SideBarSystemDB from "../components/SystemDashBoard/SideBarSystemDB";
import AddLabSystemDB from "../components/SystemDashBoard/Lab/AddLabSystemDB";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import { TiEdit } from "react-icons/ti";
import ShowLabSystemDB from "../components/SystemDashBoard/Lab/ShowLabSystemDB";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllDBLab,
  selectDBLabs,
} from "../GlobalData/SystemDashBoard/LabSDBSlice";

function LabsSystemDB() {
  const [OpenAddLabSystemDB, setOpenAddLabSystemDB] = useState(false);
  const [OpenShowLabSystemDB, setOpenShowLabSystemDB] = useState(false);
  const [Content, setContent] = useState([{}]);
  const [id, setId] = useState(0);
  const LabSelector = useSelector(selectDBLabs);
  const dispatch = useDispatch();
  const LabAdd = () => {
    setOpenAddLabSystemDB(true);
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

  const getLaps = async (page) => {
    await axios.get(`/admin-scope/accounts?page=${page}`).then((response) => {
      dispatch(addAllDBLab(response.data));
    });
  };

  useEffect(() => {
    getLaps(1);
  }, []);

  const back = () => {
    if (Content.meta?.current_page !== 1) {
      getLaps(Content.meta?.current_page - 1);
    }
  };

  const next = () => {
    if (Content.meta?.current_page < Content.meta?.last_page) {
      getLaps(Content.meta?.current_page + 1);
    }
  };

  const Show = (id) => {
    setId(id);
    setOpenShowLabSystemDB(true);
  };
  const Edit = (id) => {
    setId(id);
  };

  return (
    <div className="w-full h-full pr-5 p-5">
      <AddLabSystemDB
        open={OpenAddLabSystemDB}
        setOpen={setOpenAddLabSystemDB}
      />
      <ShowLabSystemDB
        open={OpenShowLabSystemDB}
        setOpen={setOpenShowLabSystemDB}
        id={id}
      />
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
        <SideBarSystemDB page="Labs" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full justify-between">
            <div className="flex w-full space-x-2">
              <div className="w-fit pr-2 bg-white rounded-lg flex items-center mr-5">
                <select className=" w-fit  rounded-lg font-Poppins-Medium  text-base outline-none px-4 py-2 cursor-pointer">
                  <option value="" selected disabled hidden>
                    Sort by
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>
            </div>

            <div
              className="bg-[#0D2135] w-[28%] lg:w-[18%]  flex items-center justify-center  rounded-xl cursor-pointer "
              onClick={() => LabAdd()}
            >
              <p className="text-base font-Poppins-SemiBold flex items-center justify-center text-white ">
                <AiOutlinePlus className="mr-2 text-lg" />
                Add Lab
              </p>
            </div>
          </div>

          {/* Pangration */}
          <div className="overflow-x-scroll w-full h-full">
            <table className="w-full h-fit mt-8   bg-white rounded-t-2xl ">
              <tr className="border-b-[1px] w-full">
                <td className="w-[5%] pr-2 lg:pr-0">
                  <input
                    type="checkbox"
                    className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 "
                  />
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 pl-2 pr-20 lg:pr-0">
                  Lab name
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 pl-4 pr-20 lg:pr-0 ">
                  Owner name
                </td>
                <td className="text-sm text-[#98A2B3]  font-Poppins-Regular py-2 pl-2  pr-20 lg:pr-0">
                  Email
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2   pr-20 lg:pr-0">
                  Phone number
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2   pr-20 lg:pr-0">
                  address
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[9%] pr-20 lg:pr-0">
                  Action
                </td>
              </tr>
              {LabSelector?.data
                ? LabSelector?.data.map((account) => (
                    <tr className="border-b-[1px] ">
                      <td className="w-fit">
                        <input
                          type="checkbox"
                          className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 w-fit"
                        />
                      </td>
                      <td className="font-Poppins-Regular text-black items-center text-base font-semibold py-6 flex mt-2 ">
                        <img
                          src={`https://aurora-team.com/labs-obada/${account.src}`}
                          className="w-8 h-8 mr-3"
                        />

                        <p>{account.lab_name}</p>
                      </td>
                      <td className="font-Poppins-Regular text-black text-base pl-4 font-semibold py-6 ">
                        {account.name}
                      </td>
                      <td className="font-Poppins-Regular  text-black text-base font-semibold py-6 pr-10 lg:pr-0">
                        {account.email}
                      </td>
                      <td className="font-Poppins-Regular mx-5 text-black text-base font-semibold pr-10 lg:pr-0 py-6">
                        {account.phone}
                      </td>
                      <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                        {account.address}
                      </td>
                      <td>
                        <div className="flex space-x-2 py-4">
                          <TiEdit
                            className="text-2xl  opacity-50 cursor-pointer"
                            onClick={() => Edit(account.id)}
                          />
                          <AiOutlineEye
                            className="text-2xl text-black cursor-pointer"
                            onClick={() => Show(account.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                : "Loading"}
            </table>
          </div>
          <div className="flex w-full justify-between space-x-5">
            <button
              disabled={Content.meta?.current_page === 1}
              className="px-2 py-2  border-2"
              onClick={() => back()}
            >
              back
            </button>
            <button
              className="px-2 py-2 border-2"
              disabled={Content.meta?.current_page === Content.meta?.last_page}
              onClick={() => next()}
            >
              next
            </button>
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

export default LabsSystemDB;
