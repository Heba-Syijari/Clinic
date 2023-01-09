import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";
import SideBarSystemDB from "../components/SystemDashBoard/SideBarSystemDB";
import { TiEdit } from "react-icons/ti";
import HeaderSystemDB from "../components/SystemDashBoard/HeaderSystemDB";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import EditGender from "../components/SystemDashBoard/Gender/EditGender";
import DeleteGender from "../components/SystemDashBoard/Gender/DeleteGender";
import {
  addAllGender,
  addToGender,
  selectGenders,
} from "../GlobalData/SystemDashBoard/GenderSlice";
import { Oval } from "react-loader-spinner";

function GenderSystemDB() {
  const [id, setId] = useState(0);
  const [OpenEditGender, setOpenEditGender] = useState(false);
  const [OpenDeleteGender, setOpenDeleteGender] = useState(false);
  const dispatch = useDispatch();
  const GenderSelector = useSelector(selectGenders);

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

  const GetGenders = async () => {
    document.getElementById("Loader").classList.remove("hidden");
    document.getElementById("Loader").classList.add("flex");

    await axios.get(`/admin-scope/get-genders`).then((response) => {
      dispatch(addAllGender(response.data));
      document.getElementById("Loader").classList.add("hidden");
      document.getElementById("Loader").classList.remove("flex");
    });
  };

  useEffect(() => {
    GetGenders();
  }, []);

  const Edit = (id) => {
    setId(id);
    setOpenEditGender(true);
  };

  const remove = (id) => {
    setId(id);

    setOpenDeleteGender(true);
  };

  const AddToTable = async () => {
    if (document.getElementById("Gender").value == "") {
      document.getElementById("message").textContent =
        "Please Insert The Value";
    } else {
      document.getElementById("Loader").classList.remove("hidden");
      document.getElementById("Loader").classList.add("flex");
      let formdata = new FormData();
      formdata.append("name", document.getElementById("Gender").value);
      await axios
        .post(`/admin-scope/create-gender`, formdata)
        .then((response) => {
          if (response.status == 201) {
            document.getElementById("message").textContent = "";
            GetGenders();
            document.getElementById("Gender").value = "";
            document.getElementById("Loader").classList.add("hidden");
            document.getElementById("Loader").classList.remove("flex");
          }
        })
        .catch((error) => {
          if (error.response) {
            document.getElementById("message").textContent =
              error.response.data.error[0];
            document.getElementById("Loader").classList.add("hidden");
            document.getElementById("Loader").classList.remove("flex");
          }
        });
    }
  };
  return (
    <div className="w-full h-full pr-5 p-5">
      <EditGender open={OpenEditGender} setOpen={setOpenEditGender} id={id} />
      <DeleteGender
        open={OpenDeleteGender}
        setOpen={setOpenDeleteGender}
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
        <SideBarSystemDB page="Gender" />
        <div className="w-full h-full lg:ml-8 mt-10 pb-48">
          {/* Pangration */}
          <div className={`  mt-10 mb-10`}>
            <div className="flex w-full justify-between space-x-10 col-start-1 col-end-3">
              <div className="border-[#E4E7EC] w-[50%] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
                <input
                  id="Gender"
                  placeholder="Gender"
                  type="text"
                  className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                />
              </div>

              <div className=" bg-[#0D2135] w-[30%] lg:w-[20%]  flex items-center justify-center px-5 lg:px-10  py-2 rounded-xl cursor-pointer ">
                <p
                  className="text-sm flex items-center justify-center text-center text-white font-Poppins-Medium"
                  onClick={() => AddToTable()}
                >
                  Add to table
                </p>
              </div>
            </div>
            <p
              id="message"
              className="text-sm w-full text-center justify-center mt-1 text-red-500 flex items-center"
            ></p>
            <div
              id="Loader"
              className="hidden  justify-center items-center mt-5 w-full text-center m-auto"
            >
              <Oval
                height={30}
                width={30}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
            <div className="h-full max-h-[20rem] mt-5 overflow-y-scroll scrollbar-hide">
              <table className="w-full h-full    bg-white  rounded-2xl col-start-1 col-end-3 ">
                <tr className="border-b-[1px] sticky top-0 bg-white z-10 w-full">
                  <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-1 pl-8 w-[85%]">
                    Gender
                  </td>
                  <td className="text-sm text-[#98A2B3]  font-Poppins-Regular py-1 w-[15%]">
                    Action
                  </td>
                </tr>
                {GenderSelector
                  ? GenderSelector.map((gender) => (
                      <tr className="border-b-[1px] w-full">
                        <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 pl-8 ">
                          {gender.name}
                        </td>
                        <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 ">
                          <div className="flex space-x-2 ">
                            <TiEdit
                              id={gender.id}
                              className="text-2xl  opacity-50 cursor-pointer"
                              onClick={() => Edit(gender.id)}
                            />
                            <IoTrashOutline
                              id={gender.id}
                              className="text-2xl text-[#F04438] cursor-pointer"
                              onClick={() => remove(gender.id)}
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

export default GenderSystemDB;
