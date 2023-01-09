import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllDBCultureReport,
  addToDBCultureReport,
  selectDBCultureReports,
} from "../../../../GlobalData/SystemDashBoard/CultureReportSDBSlice";
import EditCReportSDB from "./CultureReports/EditCReportSDB";
import DeleteCReportSDB from "./CultureReports/DeleteCReportSDB";

function CultureReportSystemDB({ type, formData, setNormalRange, intrputik }) {
  {
    /* have to do stateManagment For the table here too but if we have the intrputick get show u have to hide the div that has the buttons here */
    /* the Save will be from the interputik div if the interputik shown */
  }
  const CultureReportSelector = useSelector(selectDBCultureReports);
  const dispatch = useDispatch();
  const [OpenEditReport, SetOpenEditReport] = useState(false);
  const [OpenDeleteReport, SetOpenDeleteReport] = useState(false);

  const [id, SetId] = useState(0);
  const Edit = (id) => {
    SetId(id);
    SetOpenEditReport(true);
  };
  const Delete = (id) => {
    SetId(id);
    SetOpenDeleteReport(true);
  };

  const AddToTable = () => {
    let Data = {
      id: CultureReportSelector.length + 1,
      text: document.getElementById("subjectTitle").value,
    };
    dispatch(addToDBCultureReport(Data));
  };
  const textChange = (e) => {
    setNormalRange(e.target.value);
  };
  const Save = () => {};
  return (
    <div
      className={`${
        type === "CultureReport" ? "block" : "hidden"
      } col-start-1 col-end-3 mt-10 mb-10`}
    >
      <EditCReportSDB
        open={OpenEditReport}
        setOpen={SetOpenEditReport}
        id={id}
      />
      <DeleteCReportSDB
        open={OpenDeleteReport}
        setOpen={SetOpenDeleteReport}
        id={id}
      />
      <div className="flex w-full justify-start space-x-10 col-start-1 col-end-3">
        <div className="border-[#E4E7EC] w-[50%] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
          <input
            id="subjectTitle"
            placeholder="subject title"
            type="text"
            className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            onChange={(e) => textChange(e)}
          />
        </div>
        <div
          className=" bg-[#0D2135] w-[34%]  flex items-center justify-center  lg:px-20  py-2 rounded-xl cursor-pointer "
          onClick={() => AddToTable()}
        >
          <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
            Add to table
          </p>
        </div>
      </div>

      <table className="w-full h-full mt-5  bg-white  rounded-2xl col-start-1 col-end-3 ">
        <tr className="border-b-[1px] w-full">
          <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-1 pl-8 w-[85%]">
            First entry box
          </td>
          <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-1 w-[15%]">
            Action
          </td>
        </tr>
        {CultureReportSelector
          ? CultureReportSelector.map((Report) => (
              <tr className="border-b-[1px] w-full">
                <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 pl-8 ">
                  {Report.text}
                </td>
                <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 ">
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

      <div
        className={`${
          intrputik ? "hidden" : "flex"
        }  flex justify-end space-x-8 mt-8 col-start-1 col-end-3`}
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
  );
}

export default CultureReportSystemDB;
