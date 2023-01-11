import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

import Datepicker from "react-tailwindcss-datepicker";
import AddDoctor from "./components/Doctors/AddDoctor";
import DoctorPangration from "./components/Doctors/DoctorPangration";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Doctor = [
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Address here Address here Address here",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
];

function Doctors() {
  const { t, i18n } = useTranslation();

  const [OpenDeleteGender, setOpenDeleteGender] = useState(false);
  const [OpenEditGender, setOpenEditGender] = useState(false);
  // const dispatch = useDispatch();
  // const GenderSelector = useSelector(selectGenders);
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
  const GetStaff = async () => {
    // document.getElementById("Loader").classList.remove("hidden");
    // document.getElementById("Loader").classList.add("flex");

    await axios.get(`/lab-scope/myDoctors`).then((response) => {
      setData(response.data);
      //dispatch(addAllGender(response.data));
      // document.getElementById("Loader").classList.add("hidden");
      // document.getElementById("Loader").classList.remove("flex");
      console.log(response.data);
    });
  };

  useEffect(() => {
    GetStaff();
  }, []);

  const Edit = (id) => {
    setId(id);
    setOpenEditGender(true);
  };

  const remove = (id) => {
    setId(id);
    setOpenDeleteGender(true);
  };

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const [OpenAddDoctors, setOpenAddDoctors] = useState(false);

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const DoctorAdd = () => {
    setOpenAddDoctors(true);
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
    <div className="w-full h-full pr-5 p-5">
      <AddDoctor open={OpenAddDoctors} setOpen={setOpenAddDoctors} />

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
        <SideBar page="Doctors" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full flex-col md:flex-row justify-between">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-0 w-full space-x-2">
              <div className="w-fit pr-2 bg-white lg:col-start-1 lg:col-end-2 rounded-lg flex items-center mr-5">
                <select className=" w-fit  rounded-lg font-Poppins-Regular  text-base outline-none px-4 py-2 cursor-pointer">
                  <option value="" selected disabled hidden>
                    {t("Sort by")}
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>
              <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 lg:col-start-2 lg:col-end-5 md:space-x-2">
                <div className="flex w-[20rem] lg:w-[100%] ">
                  <div
                    id="DatePickerHome"
                    className="w-full border-2 rounded-xl"
                  >
                    <Datepicker value={value} onChange={handleValueChange} />
                  </div>
                </div>
                <div className="w-full flex space-x-2">
                  <div className="bg-[#B7C835] w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer">
                    <p className="text-white">{t("Day")}</p>
                  </div>

                  <div className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer">
                    <p className="text-[#101828]">{t("Week")}</p>
                  </div>

                  <div className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer">
                    <p className="text-[#101828]">{t("Month")}</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#0D2135] w-[10rem] lg:w-[93%] mt-5 lg:mt-0 py-2 lg:py-0 lg:col-start-5 lg:col-end-6   flex items-center justify-center  rounded-xl cursor-pointer "
                onClick={() => DoctorAdd()}
              >
                <p className="text-base flex  items-center justify-center text-white ">
                  <AiOutlinePlus className="mr-2 text-lg" />
                  {t("Add Doctor")}
                </p>
              </div>
            </div>
          </div>

          {/* Pangration */}

          <DoctorPangration itemsPerPage={8} Data={Doctor} />

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
                    {t("Labs")}{" "}
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

export default Doctors;
