import React, { useState } from "react";
import CultureReport from "./ClassAnalysis/CultureReport";
import Histopathology from "./ClassAnalysis/Histopathology";
import ManeReport from "./ClassAnalysis/ManeReport";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import { t } from "i18next";
import EditIntrputik from "./ClassAnalysis/Intrputik/EditIntrputik";
import DeleteIntrputik from "./ClassAnalysis/Intrputik/DeleteIntrputik";

function Intrputik({ show }) {
  const [ClassAnalysis, SetClassAnalysis] = useState("");
  const [intrputik, SetIntrputik] = useState(false);
  const [OpenEditIntrputik, setOpenEditIntrputik] = useState(false);
  const [OpenDeleteIntrputik, setOpenDeleteIntrputik] = useState(false);

  const ClassAnalysisChange = (e) => {
    let select = document.getElementById("ClassAnalysis");
    let value = select.options[select.selectedIndex].value;
    SetClassAnalysis(value);
    if (
      document
        .getElementById("ClassAnalysis")
        .classList.contains("text-[#98A2B3]")
    ) {
      document
        .getElementById("ClassAnalysis")
        .classList.remove("text-[#98A2B3]");
    }
  };
  const IntrputikChange = () => {
    if (intrputik === true) {
      SetIntrputik(false);
    } else if (intrputik !== true) {
      SetIntrputik(true);
    }
    if (
      document.getElementById("intrputikDiv").classList.contains("bg-white")
    ) {
      document.getElementById("intrputikDiv").classList.remove("bg-white");
      document
        .getElementById("intrputikText")
        .classList.remove("text-[#101828]");

      document.getElementById("intrputikDiv").classList.add("bg-[#B7C835]");
      document.getElementById("intrputikText").classList.add("text-white");
    } else if (
      !document.getElementById("intrputikDiv").classList.contains("bg-white")
    ) {
      document.getElementById("intrputikDiv").classList.remove("bg-[#B7C835]");
      document.getElementById("intrputikText").classList.remove("text-white");

      document.getElementById("intrputikDiv").classList.add("bg-white");
      document.getElementById("intrputikText").classList.add("text-[#101828]");
    }
  };
  return (
    <div className={`${show ? "block" : "hidden"}`}>
      <div
        id="intrputikDiv"
        className="bg-white  w-fit  flex items-center justify-center px-5 py-3 rounded-lg cursor-pointer "
        onClick={() => IntrputikChange()}
      >
        <p
          id="intrputikText"
          className="text-sm flex items-center justify-center text-[#101828] font-Poppins-Regular"
        >
          {t("intrputik")}
        </p>
      </div>

      <div className={`mt-7`}>
        <div className="grid grid-cols-2 gap-5">
          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
            <input
              name="CheckCode"
              placeholder={t("Check code")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>
          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
            <input
              name="ExaminationName"
              placeholder={t("Examination name in print")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>

          <div className="w-full pr-2 py-1 bg-[#F9FAFF] rounded-xl flex border-[1px] border-[#E4E7EC]  items-center mr-5">
            <select
              name="ExaminationMethod"
              className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Regular  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
            >
              <option value="" selected disabled hidden className="">
                {t("Examination method")}
              </option>
            </select>
          </div>
          <div className="w-full pr-2 py-1 bg-[#F9FAFF] rounded-xl flex border-[1px] border-[#E4E7EC]  items-center mr-5">
            <select
              name={t("IntakeTube")}
              className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Regular  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
            >
              <option value="" selected disabled hidden className="">
                {t("Intake tube")}
              </option>
            </select>
          </div>

          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4   relative m-auto border-[1px] rounded-xl ">
            <input
              name="ExaminationPrice"
              placeholder={t("Examination price")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>
          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
            <input
              name="LabExaminationPrice"
              placeholder={t("Laboratory examination price")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>

          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
            <input
              name="ExaminationPriceCompanies"
              placeholder={t("Examination price for companies")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>
          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
            <input
              name="MeasruingUnit"
              placeholder={t("Measruing unit")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>

          <div className="w-full pr-2 py-1 bg-[#F9FAFF] rounded-xl flex border-[1px] border-[#E4E7EC]  items-center mr-5 col-start-1 col-end-3">
            <select
              id="ClassAnalysis"
              className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Regular  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
              onChange={(e) => ClassAnalysisChange(e)}
            >
              <option value="" selected disabled hidden className="">
                {t("Class analysis")}
              </option>
              <option value="Histopathology">Histopathology</option>
              <option value="ManeReport">Mane report</option>
              <option value="CultureReport">Culture report</option>
            </select>
          </div>
          <div className="mb-5 col-start-1 col-end-3">
            <Histopathology type={ClassAnalysis} />
            <ManeReport type={ClassAnalysis} />
            <CultureReport type={ClassAnalysis} />
          </div>
        </div>
      </div>

      <div
        className={`${
          intrputik ? "block" : "hidden"
        } col-start-1 col-end-3 mt-10 mb-10`}
      >
        <EditIntrputik
          open={OpenEditIntrputik}
          setOpen={setOpenEditIntrputik}
        />
        <DeleteIntrputik
          open={OpenDeleteIntrputik}
          setOpen={setOpenDeleteIntrputik}
        />
        <div className="flex w-full justify-start space-x-10 col-start-1 col-end-3">
          <div className="border-[#E4E7EC] w-[50%] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
            <input
              name="Intrputik"
              placeholder={t("Intrputik name")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>
          <div className=" bg-[#0D2135] w-[34%]  flex items-center justify-center px-20  py-2 rounded-xl cursor-pointer ">
            <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
              {t("Add to table")}
            </p>
          </div>
        </div>

        <table className="w-full h-full mt-5  bg-white  rounded-2xl col-start-1 col-end-3 ">
          <tr className="border-b-[1px] w-full">
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-1 pl-8 w-[85%]">
              {t("name")}
            </td>
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-1 w-[15%]">
              {t("Action")}
            </td>
          </tr>

          <tr className="border-b-[1px] w-full">
            <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 pl-8 ">
              Lorem Ipsum is simply dummy text.
            </td>
            <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 ">
              <div className="flex space-x-2 ">
                <TiEdit
                  className="text-2xl  opacity-50 cursor-pointer"
                  onClick={() => setOpenEditIntrputik(true)}
                />
                <IoTrashOutline
                  className="text-2xl text-[#F04438] cursor-pointer"
                  onClick={() => setOpenDeleteIntrputik(true)}
                />
              </div>
            </td>
          </tr>

          <tr className="border-b-[1px] w-full">
            <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 pl-8 ">
              Lorem Ipsum is simply dummy text.
            </td>
            <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 ">
              <div className="flex space-x-2 ">
                <TiEdit className="text-2xl  opacity-50 cursor-pointer" />
                <IoTrashOutline className="text-2xl text-[#F04438] cursor-pointer" />
              </div>
            </td>
          </tr>
        </table>
        <div className=" flex justify-end space-x-8 mt-8 col-start-1 col-end-4">
          <div className="bg-[#F04438] border-[1px] border-[#D0D5DD] w-fit  flex items-center justify-center px-16 py-2 rounded-xl cursor-pointer ">
            <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
              {t("Delete")}
            </p>
          </div>
          <div className="bg-[#B7C835] w-fit  flex items-center justify-center px-28 py-3 rounded-xl cursor-pointer ">
            <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
              {t("Save")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intrputik;
