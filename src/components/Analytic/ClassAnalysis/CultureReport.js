import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import { t } from "i18next";
import EditCultureReport from "./CultureReport/EditCultureReport";
import DeleteCultureReport from "./CultureReport/DeleteCultureReport";

function CultureReport({ type }) {
  const [OpenEditCultureReport, setOpenEditCultureReport] = useState(false);
  const [OpenDeleteCultureReport, setOpenDeleteCultureReport] = useState(false);
  return (
    <div
      className={`${
        type === "CultureReport" ? "block" : "hidden"
      } col-start-1 col-end-3 mt-10 mb-10`}
    >
      <EditCultureReport
        open={OpenEditCultureReport}
        setOpen={setOpenEditCultureReport}
      />
      <DeleteCultureReport
        open={OpenDeleteCultureReport}
        setOpen={setOpenDeleteCultureReport}
      />
      <div className="flex w-full justify-start space-x-10 col-start-1 col-end-3">
        <div className="border-[#E4E7EC] w-[50%] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
          <input
            name="subjectTitle"
            placeholder={t("subject title")}
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
            {t("First entry box")}
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
                onClick={() => setOpenEditCultureReport(true)}
              />
              <IoTrashOutline
                className="text-2xl text-[#F04438] cursor-pointer"
                onClick={() => setOpenDeleteCultureReport(true)}
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

      <div className=" flex justify-end space-x-8 mt-8 col-start-1 col-end-3">
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
  );
}

export default CultureReport;
