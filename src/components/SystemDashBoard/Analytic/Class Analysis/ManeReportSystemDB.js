import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllDBManeReport,
  addToDBManeReport,
  selectDBManeReports,
} from "../../../../GlobalData/SystemDashBoard/ManeReportSDBSlice";
import EditReportSDB from "./ManeReportSDB/EditReportSDB";
import { removeFromTupe } from "../../../../GlobalData/SystemDashBoard/TupeSlice";
import DeleteReportSDB from "./ManeReportSDB/DeleteReportSDB";

function ManeReportSystemDB({ type, formData, intrputik }) {
  {
    /* i was trying to make stateMangment for the table here  but if we have the intrputick get show u have to hide the div that has the buttons here*/
    /* the Save will be from the interputik div if the interputik shown */
  }
  const ManeReportSelector = useSelector(selectDBManeReports);
  const dispatch = useDispatch();
  const [OpenEditReport, SetOpenEditReport] = useState(false);
  const [OpenDeleteReport, SetOpenDeleteReport] = useState(false);

  const [id, SetId] = useState(0);
  const Save = () => {};
  const Edit = (id) => {
    SetId(id);
    SetOpenEditReport(true);
  };
  const Delete = (id) => {
    SetId(id);
    SetOpenDeleteReport(true);
  };

  const AddNormal = () => {
    let select = document.getElementById("Gender");
    let value = select.options[select.selectedIndex].value;
    let Data = {
      id: ManeReportSelector.length + 1,
      gender: value,
      High: document.getElementById("High").value,
      Low: document.getElementById("Low").value,
    };
    dispatch(addToDBManeReport(Data));
  };
  return (
    <div
      className={`${
        type === "ManeReport" ? "block" : "hidden"
      } col-start-1 col-end-3`}
    >
      <EditReportSDB
        open={OpenEditReport}
        setOpen={SetOpenEditReport}
        id={id}
      />
      <DeleteReportSDB
        open={OpenDeleteReport}
        setOpen={SetOpenDeleteReport}
        id={id}
      />
      <div className="col-start-1 col-end-3">
        <textarea
          placeholder="Normal range"
          className="bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit text-xs  flex space-x-2 items-center py-3 px-4 outline-0 ring-0   relative m-auto border-[1px] rounded-xl "
          rows={5}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="w-full pr-2 py-1 bg-[#F9FAFF] rounded-xl flex border-[1px] border-[#E4E7EC]  items-center mr-5">
          <select
            id="Gender"
            className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Regular  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
          >
            <option value="" selected disabled hidden className="">
              Gender
            </option>
            <option value="Male" className="">
              Male
            </option>
            <option value="Female" className="">
              Female
            </option>
          </select>
        </div>

        <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4   relative m-auto border-[1px] rounded-xl ">
          <input
            id="High"
            placeholder="H"
            type="text"
            className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
          />
        </div>
        <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
          <input
            id="Low"
            placeholder="L"
            type="text"
            className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
          />
        </div>

        <div
          className="col-start-3 col-end-4 bg-[#0D2135]   flex items-center justify-center px-20 w-full py-2 rounded-xl cursor-pointer "
          onClick={() => AddNormal()}
        >
          <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
            Add normal
          </p>
        </div>

        <table className="w-full h-full mt-5  bg-white  rounded-2xl col-start-1 col-end-4 ">
          <tr className="border-b-[1px] w-full">
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 pl-8 w-[30%]">
              Gender
            </td>
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2  w-[30%]">
              H
            </td>
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2  w-[30%]">
              L
            </td>
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[10%]">
              Action
            </td>
          </tr>
          {ManeReportSelector
            ? ManeReportSelector.map((Report) => (
                <tr className="border-b-[1px] w-full">
                  <td className="text-base text-[#101828] font-semibold font-Poppins-Regular py-2 pl-8 ">
                    {Report.gender}
                  </td>
                  <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-2 ">
                    {Report.High}
                  </td>
                  <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-2  ">
                    {Report.Low}
                  </td>
                  <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-2 ">
                    <div className="flex space-x-2 ">
                      <TiEdit
                        className="text-2xl  opacity-50 cursor-pointer"
                        onClick={() => Edit(Report.id)}
                      />
                      <IoTrashOutline
                        className="text-2xl text-[#F04438] cursor-pointer"
                        onClick={() => Delete(Report.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            : "Loading"}
          <tr className="border-b-[1px] w-full">
            <td className="text-base text-[#101828] font-semibold font-Poppins-Regular py-2 pl-8 ">
              Man
            </td>
            <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-2 ">
              00000000
            </td>
            <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-2  ">
              00000000
            </td>
            <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-2 ">
              <div className="flex space-x-2 ">
                <TiEdit className="text-2xl  opacity-50 cursor-pointer" />
                <IoTrashOutline className="text-2xl text-[#F04438] cursor-pointer" />
              </div>
            </td>
          </tr>
        </table>

        <div
          className={`${
            intrputik ? "hidden" : "flex"
          }  flex justify-end space-x-8 mt-8 col-start-1 col-end-4`}
        >
          <div className="bg-[#F04438] border-[1px] border-[#D0D5DD] w-fit  flex items-center justify-center px-16 py-2 rounded-xl cursor-pointer ">
            <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
              Delete
            </p>
          </div>
          <div className="bg-[#B7C835] w-fit  flex items-center justify-center px-28 py-3 rounded-xl cursor-pointer ">
            <p
              className="text-sm flex items-center justify-center text-white font-Poppins-Regular"
              onClick={() => Save()}
            >
              Save
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManeReportSystemDB;
