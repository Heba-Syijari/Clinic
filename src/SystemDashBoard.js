import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";
import SideBarSystemDB from "./components/SystemDashBoard/SideBarSystemDB";
import { TiEdit } from "react-icons/ti";
import HeaderSystemDB from "./components/SystemDashBoard/HeaderSystemDB";
import axios from "axios";
import EditTupe from "./components/SystemDashBoard/Tupe/EditTupe";
import DeleteTupe from "./components/SystemDashBoard/Tupe/DeleteTupe";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllTupe,
  addToTupe,
  selectTubes,
} from "./GlobalData/SystemDashBoard/TupeSlice";

function SystemDashBoard() {
  const [id, setId] = useState(0);
  const [OpenEditTupe, setOpenEditTupe] = useState(false);
  const [OpenDeleteTupe, setOpenDeleteTupe] = useState(false);
  const dispatch = useDispatch();
  const TupeSelector = useSelector(selectTubes);
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
  useEffect(() => {
    GetTupes();
  }, []);

  const Edit = (id) => {
    setId(id);
    setOpenEditTupe(true);
  };

  const remove = (id) => {
    setId(id);

    setOpenDeleteTupe(true);
  };
  const GetTupes = async () => {
    await axios.get(`/tupes`).then((response) => {
      dispatch(addAllTupe(response.data.data));
    });
  };

  const AddToTable = async () => {
    let tupe = [];
    tupe[0] = document.getElementById("Color").value;
    let formdata = new FormData();
    formdata.append("tupe", tupe[0]);
    await axios
      .post(`/typeOftupe`, formdata)
      .then((response) => {
        document.getElementById("message").textContent = "";

        let data = {
          id: TupeSelector.length + 1,
          tupe: formdata.get("tupe"),
        };
        dispatch(addToTupe(data));
        document.getElementById("Color").value = "";
      })
      .catch((error) => {
        if (error.response) {
          document.getElementById("message").textContent =
            error.response.data.message;
        }
      });
  };
  return (
    <div className="w-full h-full pr-5 p-5">
      <EditTupe open={OpenEditTupe} setOpen={setOpenEditTupe} id={id} />
      <DeleteTupe open={OpenDeleteTupe} setOpen={setOpenDeleteTupe} id={id} />
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
        <SideBarSystemDB page="Colors" />
        <div className="w-full h-full lg:ml-8 mt-10 pb-48">
          {/* Pangration */}
          <div className={`  mt-10 mb-10`}>
            <div className="flex w-full justify-between space-x-10 col-start-1 col-end-3">
              <div className="border-[#E4E7EC] w-[50%] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
                <input
                  id="Color"
                  placeholder="Tube"
                  type="text"
                  className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                />
              </div>
              <p
                id="message"
                className="text-sm text-red-500 flex items-center"
              ></p>
              <div className=" bg-[#0D2135] w-[30%] lg:w-[20%]  flex items-center justify-center px-5 lg:px-10  py-2 rounded-xl cursor-pointer ">
                <p
                  className="text-sm flex items-center text-center justify-center text-white font-Poppins-Medium"
                  onClick={() => AddToTable()}
                >
                  Add to table
                </p>
              </div>
            </div>
            <div className="h-full max-h-[20rem] mt-5 overflow-y-scroll scrollbar-hide">
              <table className="w-full h-full    bg-white  rounded-2xl col-start-1 col-end-3 ">
                <tr className="border-b-[1px] sticky top-0 bg-white z-10 w-full">
                  <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-1 pl-8 w-[85%]">
                    Tube
                  </td>
                  <td className="text-sm text-[#98A2B3]  font-Poppins-Regular py-1 w-[15%]">
                    Action
                  </td>
                </tr>
                {TupeSelector
                  ? TupeSelector.map((tupe) => (
                      <tr className="border-b-[1px] w-full">
                        <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 pl-8 ">
                          {tupe.tupe}
                        </td>
                        <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 ">
                          <div className="flex space-x-2 ">
                            <TiEdit
                              id={tupe.id}
                              className="text-2xl  opacity-50 cursor-pointer"
                              onClick={() => Edit(tupe.id)}
                            />
                            <IoTrashOutline
                              id={tupe.id}
                              className="text-2xl text-[#F04438] cursor-pointer"
                              onClick={() => remove(tupe.id)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  : "Loading"}
              </table>
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

export default SystemDashBoard;
