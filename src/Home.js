import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiHome5Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbActivityHeartbeat } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { ImLab } from "react-icons/im";
import { MdOutlinePersonPin } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { TbCalculator } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { VscListFlat } from "react-icons/vsc";

import PateintContainer from "./components/Home/PateintContainer";
import Datepicker from "react-tailwindcss-datepicker";
import UK from "./Images/UK.png";
import SA from "./Images/SA.png";
import profile from "./Images/profile.jpg";
import Logo from "./Images/Logo.svg";
import Analysis from "./Images/HomeImg/Analysis.svg";
import AnalysisToday from "./Images/HomeImg/AnalysisToday.svg";
import DoctorsImg from "./Images/HomeImg/DoctorsImg.svg";
import MicroScope from "./Images/HomeImg/MicroScope.svg";
import PatientsImg from "./Images/HomeImg/PatientsImg.svg";
import Workers from "./Images/HomeImg/Workers.svg";

import DoctorContainer from "./components/Home/DoctorContainer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import NotifContainer from "./components/Home/NotifContainer";
import { Link } from "react-router-dom";
import i18next from "./i18n";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const tests = [
  {
    last: 100,
    current: 50,
  },
  {
    last: 150,
    current: 400,
  },
  {
    last: 200,
    current: 180,
  },
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
      title: {
        display: true,
        text: "Reviewers Section",
        color: "black",
        font: { weight: "bold", size: 20 },
        align: "end",
      },
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      label: "Last Year",
      data: tests.map((data) => data.last),
      backgroundColor: "#0D2135",
      borderRadius: 20,
    },
    {
      label: "Current Year",
      data: tests.map((data) => data.current),
      backgroundColor: "#B7C835",
      borderRadius: 20,
    },
  ],
};

const ShowNotification = () => {
  if (document.getElementById("Notification").classList.contains("hidden")) {
    document.getElementById("Notification").classList.remove("hidden");
  } else if (
    !document.getElementById("Notification").classList.contains("hidden")
  ) {
    document.getElementById("Notification").classList.add("hidden");
  }
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

function Home() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [lang, SetLang] = useState("UK");

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const ShowLaguages = () => {
    if (document.getElementById("lang").classList.contains("hidden")) {
      document.getElementById("lang").classList.remove("hidden");
      document.getElementById("CurrentLang").classList.add("hidden");
      document.getElementById("CloseLangIcon").classList.remove("hidden");
    } else if (!document.getElementById("lang").classList.contains("hidden")) {
      document.getElementById("lang").classList.add("hidden");
      document.getElementById("CurrentLang").classList.remove("hidden");
      document.getElementById("CloseLangIcon").classList.add("hidden");
    }
  };

  useEffect(() => {
    document
      .getElementById("DatePickerHome")
      .children[0].children[0].classList.remove(
        "dark:bg-slate-800",
        "dark:text-white/80",
        "dark:border-slate-600"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[0].classList.remove(
        "dark:bg-slate-800",
        "dark:border-slate-600"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].classList.remove(
        "dark:text-white",
        "dark:border-slate-600"
      );
    // document.getElementById("DatePickerHome").children[0].children[2]
    // .children[1].children[0].children[0].children
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].children[0].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].children[1].children[0].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].children[1].children[1].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].children[2].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].classList.remove(
        "dark:border-gray-700"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[1].children[0].classList.remove(
        "dark:border-gray-700"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].classList.remove(
        "dark:bg-slate-800"
      );

    removeTheDark();
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].classList.remove(
        "dark:border-gray-700"
      );

    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].children[0].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].children[1].children[0].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].children[1].children[1].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].children[2].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
  }, []);

  const removeTheDark = () => {
    let numbers =
      document.getElementById("DatePickerHome").children[0].children[2]
        .children[1].children[0].children[0].children[0].children[1].children[1]
        .children;
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].classList.remove("dark:bg-white/10");
    }
    let numbers2 =
      document.getElementById("DatePickerHome").children[0].children[2]
        .children[1].children[0].children[0].children[2].children[1].children[1]
        .children;
    for (let i = 0; i < numbers2.length; i++) {
      numbers2[i].classList.remove("dark:bg-white/10");
    }
  };

  return (
    <div className=" h-full flex justify-around p-5 lg:pr-10">
      <div className="h-full w-full flex justify-around">
        {/* left */}
        <div>
          <img
            src={Logo}
            className="w-[5.5rem] h-20 rounded-xl hidden lg:block bg-[#0D2135] pb-3 pt-2"
          />

          <div className="bg-white rounded-xl py-5 px-1 mt-10 hidden lg:block">
            <Link to="/" className="flex flex-col items-center ">
              <RiHome5Fill className="w-6 h-6 text-[#B7C835]" />
              <p className="text-[#B7C835]  text-sm mt-1 font-Poppins-Regular">
                Home
              </p>
            </Link>
            <Link to="./Patients" className="flex flex-col items-center mt-5">
              <IoIosPeople className="w-6 h-6 text-[#98A2B3]" />
              <p className="text-[#98A2B3]  text-sm mt-1 font-Poppins-Regular">
                Patients
              </p>
            </Link>
            <Link to="./Analytic" className="flex flex-col items-center mt-5">
              <TbActivityHeartbeat className="w-6 h-6 text-[#98A2B3] border-2 rounded-md" />
              <p className="text-[#98A2B3]  text-sm mt-1 font-Poppins-Regular">
                Analytic
              </p>
            </Link>
            <Link to="./Doctors" className="flex flex-col items-center mt-5">
              <CgProfile className="w-6 h-6 text-[#98A2B3]" />
              <p className="text-[#98A2B3]  text-sm mt-1 font-Poppins-Regular">
                Doctors
              </p>
            </Link>
            <Link to="./Labs" className="flex flex-col items-center mt-5">
              <ImLab className="w-6 h-6 text-[#98A2B3]" />
              <p className="text-[#98A2B3] text-sm mt-1 font-Poppins-Regular">
                Labs
              </p>
            </Link>
            <Link to="./Staff" className="flex flex-col items-center mt-5">
              <MdOutlinePersonPin className="w-6 h-6 text-[#98A2B3]" />
              <p className="text-[#98A2B3] text-sm mt-1 font-Poppins-Regular">
                Staff
              </p>
            </Link>
            <Link to="Store" className="flex flex-col items-center mt-5">
              <FaWarehouse className="w-6 h-6 text-[#98A2B3]" />
              <p className="text-[#98A2B3] text-sm mt-1 font-Poppins-Regular">
                Store
              </p>
            </Link>
            <Link to="Reports" className="flex flex-col items-center mt-5">
              <RiFileList2Line className="w-6 h-6 text-[#98A2B3]" />
              <p className="text-[#98A2B3] text-sm mt-1 font-Poppins-Regular">
                Reports
              </p>
            </Link>
            <Link to="Accounting" className="flex flex-col items-center mt-5">
              <TbCalculator className="w-6 h-6 text-[#98A2B3]" />
              <p className="text-[#98A2B3] text-sm mt-1 font-Poppins-Regular">
                Accounting{" "}
              </p>
            </Link>
            <Link to="/Suppliers" className="flex flex-col items-center mt-5">
              <FaShippingFast className="w-6 h-6 text-[#98A2B3]" />
              <p className="text-[#98A2B3] text-sm mt-1 font-Poppins-Regular">
                Suppliers
              </p>
            </Link>
            <Link to="/Settings" className="flex flex-col items-center mt-5">
              <FiSettings className="w-6 h-6 text-[#98A2B3]" />
              <p className="text-[#98A2B3] text-sm mt-1 font-Poppins-Regular">
                Settings
              </p>
            </Link>
            <div className="flex flex-col items-center mt-28">
              <CiLogout className="w-6 h-6 text-[#F04438]" />
              <p className="text-[#F04438] text-sm mt-1 font-Poppins-Regular ">
                Logout
              </p>
            </div>
          </div>
        </div>
        {/* center */}
        <div className="w-full lg:w-3/4 h-full relative">
          {/* Notif */}

          <div
            id="Notification"
            className="hidden absolute w-[93%] h-[64%] px-10 py-10 bg-white z-20 top-[4.8rem] shadow-inner  right-2 rounded-2xl"
          >
            <div className="font-Poppins-Regular flex justify-between items-center border-b-2 pb-5">
              <h1 className="text-[22px] font-Poppins-Bold">Notifications</h1>
              <p className="text-[#B7C835] font-Poppins-Medium text-sm">
                Mark all as read
              </p>
            </div>
            <div className="">
              <NotifContainer />
              <NotifContainer />
              <NotifContainer />
              <NotifContainer />
              <NotifContainer />
            </div>
            <div className="flex justify-center items-center mt-8">
              <p className="text-[#B7C835] text-lg font-Poppins-Black">
                Show all notifications
              </p>
            </div>
          </div>
          <div className=" lg:p-5 pr-5 bg-white flex items-center lg:justify-between rounded-xl">
            <VscListFlat
              id="drawerbtn"
              className="text-black text-xl m-2  cursor-pointer w-10 h-20 lg:hidden"
              onClick={() => drawer()}
            />
            <div className="flex items-center w-[60%] flex-grow mr-5 lg:mr-0 lg:flex-grow-0  rounded-2xl bg-[#F2F4F7]">
              <RiSearch2Line className="ml-2 text-[#B9B9B9]  text-3xl" />
              <input
                dir="rtl"
                lang="ar"
                placeholder="Find the names of the reviewers here"
                className="p-2 bg-[#F2F4F7] w-full  focus:outline-none px-4 rounded-2xl placeholder-[#B9B9B9] text-left"
                type="text"
              />
            </div>

            <div className="flex justify-center items-center space-x-5">
              <div
                className="relative bg-[#F2F4F7] p-[0.6rem] w-fit lg:p-[0.6rem] rounded-full "
                onClick={() => ShowLaguages()}
              >
                <img
                  id="CurrentLang"
                  src={lang === "UK" ? UK : SA}
                  className="w-16 h-6 sm:w-6 sm:h-6 rounded-full cursor-pointer"
                />
                <AiOutlineClose
                  id="CloseLangIcon"
                  className="hidden text-xl text-black cursor-pointer "
                />
                <div
                  id="lang"
                  className="hidden  absolute w-[80%] right-[0.21rem] rounded-b-xl shadow-md   flex-col justify-center items-center  bg-[#F2F4F7]    "
                >
                  <div
                    className="mt-1 bg-[#F2F4F7] p-[0.2rem] hover:bg-gray-200 w-fit  rounded-full cursor-pointer"
                    onClick={() => SetLang("SA")}
                  >
                    <img src={SA} className=" w-16 sm:w-6 h-6 rounded-full" />
                  </div>
                  <div
                    className=" bg-[#F2F4F7] p-[0.2rem] w-fit hover:bg-gray-200  rounded-full cursor-pointer"
                    onClick={() => SetLang("UK")}
                  >
                    <img src={UK} className=" w-16 sm:w-5 h-5 rounded-full" />
                  </div>
                </div>
              </div>
              <Link
                to="/Settings"
                className="bg-[#F2F4F7] p-[0.6rem] rounded-full cursor-pointer"
              >
                <FiSettings className="text-[#101828] w-6 h-6" />
              </Link>
              <div
                className="bg-[#F2F4F7] p-[0.5rem] rounded-full cursor-pointer "
                onClick={() => ShowNotification()}
              >
                <IoIosNotificationsOutline className="text-[#101828] w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="relative bg-[#0D2135]  w-full h-fit sm:h-60 rounded-3xl mt-10">
            <div className="w-fit  absolute right-2 top-5">
              <IoIosClose className=" text-2xl  text-[#FFFFFF] border-[1px] rounded-full  mr-8 " />
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly items-center h-full  pb-5">
              <img
                src={MicroScope}
                className="mt-3 sm:mt-0 w-[194px] h-[194px]"
              />
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-[#FFFFFF] ">
                  👋
                  <span className="opacity-50 font-Poppins-Regular text-base">
                    {" "}
                    Hi , Ali AbuSamra
                  </span>
                </p>
                <p className="text-[#FFFFFF] font-Poppins-Medium text-2xl ">
                  Welcome to LeaLap
                </p>
                <p className="text-[#FFFFFF] font-Poppins-Regular text-base opacity-50">
                  We are glad you are joining us. Good day!
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-8">
            <div className="flex flex-col items-center justify-center w-full  bg-[#E0F2FE] rounded-2xl px-3 pt-5 pb-8">
              <img src={AnalysisToday} className="w-[64px] h-[64px] mb-3" />
              <h1 className="text-base">10000</h1>
              <p className="text-xs text-[#000000] opacity-50">
                Analysis today
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full bg-[#FEE4E2] rounded-2xl px-3 pt-5 pb-8">
              <img src={PatientsImg} className="w-[64px] h-[64px] mb-3" />
              <h1 className="text-base font-Poppins-Medium">10000</h1>
              <p className="text-xs text-[#000000] font-Poppins-Regular opacity-50">
                Patients
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full bg-[#FEF0C7] rounded-2xl px-3 pt-5 pb-8">
              <img src={Analysis} className="w-[64px] h-[64px] mb-3" />
              <h1 className="text-base font-Poppins-Medium">10000</h1>
              <p className="text-xs text-[#000000] font-Poppins-Regular opacity-50">
                Analysis
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full bg-[#D1FADF] rounded-2xl px-3 pt-5 pb-8">
              <img src={Workers} className="w-[64px] h-[64px] mb-3" />
              <h1 className="text-base font-Poppins-Medium">10000</h1>
              <p className="text-xs text-[#000000] font-Poppins-Regular opacity-50">
                Workers
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full bg-[#EAECF5] rounded-2xl px-3 pt-5 pb-8">
              <img src={DoctorsImg} className="w-[64px] h-[64px] mb-3" />
              <h1 className="text-base font-Poppins-Medium">10000</h1>
              <p className="text-xs text-[#000000] font-Poppins-Regular opacity-50">
                Doctors
              </p>
            </div>
          </div>
          {/* Char */}
          <div className="w-full h-[23rem] mt-5 bg-white rounded-2xl p-5">
            <Bar options={options} data={data} />
          </div>

          <div className="w-full h-full  bg-white px-5 pt-10 rounded-lg mt-5">
            <div className="w-full flex justify-between items-center mb-5">
              <h1 className="font-Poppins-Regular text-lg ">Store Lab</h1>
              <div
                id="DatePickerHome"
                className="w-[40%] border-2 rounded-xl  "
              >
                <Datepicker
                  primaryColor={"Dark:bg-blue"}
                  value={value}
                  onChange={handleValueChange}
                />
              </div>
            </div>
            <table className="block w-full h-56 overflow-y-scroll scrollbar-hide mb-5">
              <tr className="border-y-2  sticky top-0 bg-white">
                <td className="py-2 text-[#667085 ]  font-Poppins-Regular pr-20 lg:pr-0  text-sm w-[20%]">
                  Material name
                </td>
                <td className="py-2 text-[#667085] font-Poppins-Regular pr-20 lg:pr-0 text-sm  w-[10%]">
                  Quantity
                </td>
                <td className="py-2 text-[#667085] font-Poppins-Regular pr-20 lg:pr-0 text-sm w-[10%]">
                  Company
                </td>
                <td className="py-2 text-[#667085] font-Poppins-Regular pr-20 lg:pr-0 text-sm w-[10%]">
                  EXP
                </td>
                <td className="py-2 text-[#667085] font-Poppins-Regular pr-20 lg:pr-0 text-sm w-[10%]">
                  Model
                </td>
                <td className="py-2 text-[#667085] font-Poppins-Regular pr-20 lg:pr-0 text-sm w-[12%]">
                  Measruing unit
                </td>
              </tr>
              <tr className="mt-2 border-b-[1px]">
                <td className="py-[0.4rem] ">
                  <div className="flex items-center">
                    <img src={profile} className="w-10 h-10 rounded-full" />
                    <p className="ml-2 font-Poppins-Regular">Material name</p>
                  </div>
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">100</td>
                <td className="py-1 text-sm font-Poppins-Regular">Company</td>
                <td className="py-1 text-sm font-Poppins-Regular">2022/9/22</td>
                <td className="py-1 text-sm font-Poppins-Regular">
                  Model here
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">Kg</td>
              </tr>
              <tr className="mt-2 border-b-[1px]">
                <td className="py-[0.4rem]">
                  <div className="flex items-center">
                    <img src={profile} className="w-10 h-10 rounded-full" />
                    <p className="ml-2 font-Poppins-Regular">Material name</p>
                  </div>
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">100</td>
                <td className="py-1 text-sm font-Poppins-Regular">Company</td>
                <td className="py-1 text-sm font-Poppins-Regular">2022/9/22</td>
                <td className="py-1 text-sm font-Poppins-Regular">
                  Model here
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">Kg</td>
              </tr>
              <tr className="mt-2 border-b-[1px]">
                <td className="py-[0.4rem] mt-2">
                  <div className="flex items-center">
                    <img src={profile} className="w-10 h-10 rounded-full" />
                    <p className="ml-2 font-Poppins-Regular">Material name</p>
                  </div>
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">100</td>
                <td className="py-1 text-sm font-Poppins-Regular">Company</td>
                <td className="py-1 text-sm font-Poppins-Regular">2022/9/22</td>
                <td className="py-1 text-sm font-Poppins-Regular">
                  Model here
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">Kg</td>
              </tr>
              <tr className="mt-2 border-b-[1px]">
                <td className="py-[0.4rem] mt-2">
                  <div className="flex items-center">
                    <img src={profile} className="w-10 h-10 rounded-full" />
                    <p className="ml-2 font-Poppins-Regular">Material name</p>
                  </div>
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">100</td>
                <td className="py-1 text-sm font-Poppins-Regular">Company</td>
                <td className="py-1 text-sm font-Poppins-Regular">2022/9/22</td>
                <td className="py-1 text-sm font-Poppins-Regular">
                  Model here
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">Kg</td>
              </tr>
              <tr className="mt-2 border-b-[1px]">
                <td className="py-[0.4rem] mt-2">
                  <div className="flex items-center">
                    <img src={profile} className="w-10 h-10 rounded-full" />
                    <p className="ml-2 font-Poppins-Regular">Material name</p>
                  </div>
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">100</td>
                <td className="py-1 text-sm font-Poppins-Regular">Company</td>
                <td className="py-1 text-sm font-Poppins-Regular">2022/9/22</td>
                <td className="py-1 text-sm font-Poppins-Regular">
                  Model here
                </td>
                <td className="py-1 text-sm font-Poppins-Regular">Kg</td>
              </tr>
            </table>
          </div>

          <div className="w-full h-full  lg:hidden">
            <div className="bg-white pt-16 px-8 h-full flex flex-col items-center justify-center rounded-xl">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-Poppins-semibold ">
                    Last Pateint
                  </h1>
                  <div className="flex space-x-2 items-center">
                    <p className="text-[#B7C835] font-Poppins-Regular font-semibold">
                      View all
                    </p>
                    <div className="border-2 w-fit h-fit rounded-md border-[#B7C835] ">
                      <MdOutlineKeyboardArrowRight className="text-[#B7C835] text-lg opacity-50" />
                    </div>
                  </div>
                </div>

                <div className=" w-full mt-5 h-80  overflow-y-scroll scrollbar-hide">
                  <PateintContainer />
                  <PateintContainer />
                  <PateintContainer />
                  <PateintContainer />
                  <PateintContainer />
                </div>
              </div>
            </div>
            <div className="bg-white px-8 pt-5 mt-10  h-fit flex flex-col rounded-xl">
              <h1 className="font-Poppins-semibold  mb-5 text-lg">
                Doctors section
              </h1>
              <div className="h-64 overflow-y-scroll scrollbar-hide">
                <DoctorContainer />
                <DoctorContainer />
                <DoctorContainer />
                <DoctorContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-[40%] h-full hidden lg:block">
        <div className="bg-white pt-16 px-5 h-full flex flex-col items-center justify-center rounded-xl">
          <div className="flex flex-col    w-full justify-center items-center">
            <div className="flex flex-col  pb-8  w-full justify-center items-center">
              <div className="w-44 h-44 border-2 relative rounded-full flex justify-center items-center">
                <img src={profile} className="rounded-full w-40 h-40" />
                <TiEdit className="absolute text-[#101828] bg-white rounded-full p-1 text-4xl right-1 bottom-2" />
                <GoPrimitiveDot className="absolute bg-white rounded-full text-[#32D583]  text-2xl left-1 top-6" />
              </div>
              <h1 className="mt-5 text-[#101828] text-xl font-Poppins-Regular font-semibold">
                Ahmed mohammad
              </h1>
              <p className="text-[#98A2B3] text-lg font-Poppins-Regular">
                Admin
              </p>
            </div>
            <hr className="  bg-gray-200 border-[1px] my-4 w-full rounded-lg" />
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-Poppins-Regular font-semibold">
                Last Pateint
              </h1>
              <div className="flex space-x-2 items-center">
                <p className="text-[#B7C835] font-Poppins-Regular font-semibold">
                  View all
                </p>
                <div className="border-2 w-fit h-fit rounded-md border-[#B7C835] ">
                  <MdOutlineKeyboardArrowRight className="text-[#B7C835] text-lg opacity-50" />
                </div>
              </div>
            </div>

            <div className=" w-full mt-5 h-80  overflow-y-scroll scrollbar-hide">
              <PateintContainer />
              <PateintContainer />
              <PateintContainer />
              <PateintContainer />
              <PateintContainer />
            </div>
          </div>
        </div>
        <div className="bg-white px-5 pt-5 mt-10  h-fit flex flex-col rounded-xl">
          <h1 className="font-Poppins-Regular font-semibold mb-5 text-lg">
            Doctors section
          </h1>
          <div className="h-64 overflow-y-scroll scrollbar-hide">
            <DoctorContainer />
            <DoctorContainer />
            <DoctorContainer />
            <DoctorContainer />
          </div>
        </div>
      </div>
      {/* Drawer */}
      <div id="drawerBody" className=" z-30 hidden  ">
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
          <div className="flex flex-col ml-10 space-y-1 w-full justify-center  h-4/5 text-white ">
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

export default Home;
