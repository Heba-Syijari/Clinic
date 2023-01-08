import React from "react";
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
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

function SideBar({ page }) {
  return (
    <div className="h-full pl-[2.20rem] hidden lg:block">
      <div className="bg-white rounded-xl w-fit py-5 px-1 mt-10">
        <Link to="/" className="flex flex-col items-center ">
          <RiHome5Fill
            className={`w-6 h-6  ${
              page === "Home" ? "text-[#B7C835] " : "text-[#98A2B3]"
            }  `}
          />
          <p
            className={`${
              page === "Home" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }  text-sm mt-1 font-Poppins-Regular `}
          >
            Home
          </p>
        </Link>
        <Link to="/Patients" className="flex  flex-col items-center mt-5">
          <IoIosPeople
            className={` w-6 h-6 ${
              page === "Patients" ? "text-[#B7C835]" : "text-[#98A2B3]"
            } `}
          />
          <p
            className={`${
              page === "Patients" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }  text-sm mt-1 font-Poppins-Regular`}
          >
            Patients
          </p>
        </Link>
        <Link to="/Analytic" className="flex flex-col items-center mt-5">
          <TbActivityHeartbeat
            className={`w-6 h-6 ${
              page === "Analytic" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }  border-2 rounded-md`}
          />
          <p
            className={`${
              page === "Analytic" ? "text-[#B7C835]" : "text-[#98A2B3]"
            } text-sm mt-1 font-Poppins-Regular`}
          >
            Analytic
          </p>
        </Link>
        <Link to="/Doctors" className="flex flex-col items-center mt-5">
          <CgProfile
            className={`w-6 h-6 ${
              page === "Doctors" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }`}
          />
          <p
            className={`${
              page === "Doctors" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }  text-sm mt-1 font-Poppins-Regular`}
          >
            Doctors
          </p>
        </Link>
        <Link to="/Labs" className="flex flex-col items-center mt-5">
          <ImLab
            className={`w-6 h-6  ${
              page === "Labs" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }`}
          />
          <p
            className={`${
              page === "Labs" ? "text-[#B7C835]" : "text-[#98A2B3]"
            } text-sm mt-1 font-Poppins-Regular`}
          >
            Labs
          </p>
        </Link>
        <Link to="/Staff" className="flex flex-col items-center mt-5">
          <MdOutlinePersonPin
            className={`w-6 h-6  ${
              page === "Staff" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }`}
          />
          <p
            className={`${
              page === "Staff" ? "text-[#B7C835]" : "text-[#98A2B3]"
            } text-sm mt-1 font-Poppins-Regular`}
          >
            Staff
          </p>
        </Link>
        <Link to="/Store" className="flex flex-col items-center mt-5">
          <FaWarehouse
            className={`w-6 h-6  ${
              page === "Store" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }`}
          />
          <p
            className={`${
              page === "Store" ? "text-[#B7C835]" : "text-[#98A2B3]"
            } text-sm mt-1 font-Poppins-Regular`}
          >
            Store
          </p>
        </Link>
        <Link to="/Reports" className="flex flex-col items-center mt-5">
          <RiFileList2Line
            className={`w-6 h-6  ${
              page === "Reports" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }`}
          />
          <p
            className={`${
              page === "Reports" ? "text-[#B7C835]" : "text-[#98A2B3]"
            } text-sm mt-1 font-Poppins-Regular`}
          >
            Reports
          </p>
        </Link>
        <Link to="/Accounting" className="flex flex-col items-center mt-5">
          <TbCalculator
            className={`w-6 h-6  ${
              page === "Accounting" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }`}
          />
          <p
            className={`${
              page === "Accounting" ? "text-[#B7C835]" : "text-[#98A2B3]"
            } text-sm mt-1 font-Poppins-Regular`}
          >
            Accounting{" "}
          </p>
        </Link>
        <Link to="/Suppliers" className="flex flex-col items-center mt-5">
          <FaShippingFast
            className={`w-6 h-6  ${
              page === "Suppliers" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }`}
          />
          <p
            className={`${
              page === "Suppliers" ? "text-[#B7C835]" : "text-[#98A2B3]"
            } text-sm mt-1 font-Poppins-Regular`}
          >
            Suppliers
          </p>
        </Link>
        <Link to="/Settings" className="flex flex-col items-center mt-5">
          <FiSettings
            className={`w-6 h-6  ${
              page === "Settings" ? "text-[#B7C835]" : "text-[#98A2B3]"
            }`}
          />
          <p
            className={`${
              page === "Settings" ? "text-[#B7C835]" : "text-[#98A2B3]"
            } text-sm mt-1 font-Poppins-Regular`}
          >
            Settings
          </p>
        </Link>
        <div className="flex flex-col items-center mt-28">
          <CiLogout className="w-6 h-6  text-[#F04438]" />
          <p className="text-[#F04438] text-sm mt-1  font-Poppins-Regular">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
