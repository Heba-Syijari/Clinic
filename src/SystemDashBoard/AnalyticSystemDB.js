import React, { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import { FcOpenedFolder } from "react-icons/fc";

import { VscListFlat } from "react-icons/vsc";
import { Link } from "react-router-dom";
import AddSectionSystemDB from "../components/SystemDashBoard/Analytic/AddSectionSystemDB";
import IntrputikSystemDB from "../components/SystemDashBoard/Analytic/IntrputikSystemDB";
import HeaderSystemDB from "../components/SystemDashBoard/HeaderSystemDB";
import SideBarSystemDB from "../components/SystemDashBoard/SideBarSystemDB";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllDBAnalysis,
  selectDBanalysis,
} from "../GlobalData/SystemDashBoard/AnalysisSBDSlice";

function AnalyticSystemDB() {
  {
    /* i was doing redux for the manereport and Culture Report tables  */
    /* i did just the get Sections api  */
  }
  const [ShowAddSectionSystemDB, SetShowAddSectionSystemDB] = useState(false);

  const DBAnalysisSelector = useSelector(selectDBanalysis);
  const dispatch = useDispatch();
  const getSections = async (page) => {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmU1OTAyOTQwNjY1OWQ1OGVlMzQ4MTMzOWZkNDlmOThhYzAxMDNjODcyZjgyNzVjNjY2ODc4NThhZDNkZjBjOGFhOGVmZTM4YjJkZmQyZjAiLCJpYXQiOjE2NzMwMjY0ODAuNjE5OTI2LCJuYmYiOjE2NzMwMjY0ODAuNjE5OTI5LCJleHAiOjE3MDQ1NjI0ODAuNjE0MTE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.alMtvstRFur9U7Ue5bvu2QDE_QVsQBDmw-VW7t7LEOO7feDxspvm77Zt-7Yi9JpWZ1hgOj2xRYF3LkkG4oakLXA2as8JwAxU7cTrD1jOoVdHsQTL2qwMj63hYKi9TwYw-JqAWB5F9aoULfW9MlCgOAkUIFvlZAIHuPAjwEhDKvFQhpQbpWAAs3MswitX0s8XR6roWEooTAi6ITWulnnOKComQTRnYxPh_ziy8iJUovjzW2sZ6TWY7nJdu1mjtYUaBRF0qlLCUEpv8EAu7-z4r3vNTIhFSp5jjtbWX3Cc_0SphfxApim1wCVPRJ6Ba2oI9DWf8MvILHKCxICRyybH4R5rCe64PkZqItY2ft9_K1TypWs-xiULh1-5-_Bg6Ris9sEdP7x-zQy4bxv0ioD1XO9sFT8a9btQdMGkReXDaXzcbIQxrWl_T1BA-XPAg9mNrZY6buhJPPw_CqbPzyZ7ZaQiFReVJBMCoH3BBApdKG4XXUnGlsjidPeyaC2s1ibUBYlwrQUpm6hnvMxNJivyH8IZ76hRSsc8_LDfRKcZ3rzb5UOxm27TjJaL1A1U6xsUwXRfFhW1C4oj1ASaSnk68h-pfvpZqn_fctEl9veSEx_4-Is2Wnw9h4mSS3KRynGgLmqp_jj7dQojFkrQxgsVkfNYkgYkDlCIh4FG6Y2tLqM";
    await axios
      .get(
        `https://aurora-team.com/labs-obada/api/admin-scope/sections?page=${page}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        dispatch(addAllDBAnalysis(response.data));
      });
  };
  useEffect(() => {
    getSections(1);
  }, []);

  {
    /* here when u click on the folder he will make some effect */
  }
  const SectionClicked = (id) => {
    if (
      document.getElementById(`ArrowForward-${id}`).classList.contains("hidden")
    ) {
      document.getElementById(`ArrowForward-${id}`).classList.remove("hidden");
      document.getElementById(`ClosedFolder-${id}`).classList.remove("hidden");

      document.getElementById(`ArrowBack-${id}`).classList.add("hidden");
      document.getElementById(`OpenedFolder-${id}`).classList.add("hidden");
      document.getElementById(`SubList-${id}`).classList.add("hidden");
    } else if (
      !document
        .getElementById(`ArrowForward-${id}`)
        .classList.contains("hidden")
    ) {
      document.getElementById(`ArrowBack-${id}`).classList.remove("hidden");
      document.getElementById(`OpenedFolder-${id}`).classList.remove("hidden");
      document.getElementById(`SubList-${id}`).classList.remove("hidden");

      document.getElementById(`ArrowForward-${id}`).classList.add("hidden");
      document.getElementById(`ClosedFolder-${id}`).classList.add("hidden");
    }
  };
  const SectionAdd = () => {
    SetShowAddSectionSystemDB(true);
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
        <HeaderSystemDB />
      </div>
      <div className="flex ">
        <SideBarSystemDB page="Analytic" />
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
              {/* DBAnalysisSelector Redux it has the whole data for getSections*/}

              {DBAnalysisSelector.data
                ? DBAnalysisSelector.data.map((Analysis) => (
                    <div className="w-full">
                      <div
                        className="flex pl-4  cursor-pointer mt-5 bg-[#F1F4D7] rounded-lg w-full py-2 px-3 items-center"
                        onClick={() => SectionClicked(Analysis.id)}
                      >
                        <IoIosArrowForward
                          id={`ArrowForward-${Analysis.id}`}
                          className=" mr-2"
                        />
                        <IoIosArrowDown
                          id={`ArrowBack-${Analysis.id}`}
                          className="mr-2 hidden"
                        />

                        <div className="flex  items-center ">
                          <FcFolder
                            id={`ClosedFolder-${Analysis.id}`}
                            className="text-2xl mr-2"
                          />
                          <FcOpenedFolder
                            id={`OpenedFolder-${Analysis.id}`}
                            className="text-2xl mr-2 hidden"
                          />

                          <p className="font-Poppins-Medium text-sm">
                            {Analysis.name}
                          </p>
                        </div>
                      </div>

                      <div id={`SubList-${Analysis.id}`} className="hidden ">
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
                  ))
                : "Loading"}
            </div>

            <div className="md:w-3/4 w-full  mt-5 md:ml-8  md:mt-0 ">
              <AddSectionSystemDB show={ShowAddSectionSystemDB} />
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
  );
}

export default AnalyticSystemDB;
