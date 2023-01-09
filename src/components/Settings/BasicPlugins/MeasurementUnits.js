import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import DeleteUnit from "./MeasurementUnit/DeleteUnit";
import EditUnit from "./MeasurementUnit/EditUnit";

function MeasurementUnits({ type }) {
  const [OpenDeleteUnit, setOpenDeleteUnit] = useState(false);
  const [OpenEditUnit, setOpenEditUnit] = useState(false);

  return (
    <div
      className={`${type === "MeasurementUnits" ? "block" : "hidden"} mt-10`}
    >
      <DeleteUnit open={OpenDeleteUnit} setOpen={setOpenDeleteUnit} />
      <EditUnit open={OpenEditUnit} setOpen={setOpenEditUnit} />
      <div className="">
        <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
          <input
            name=" MeasurementUnitName"
            placeholder="Measurement unit name"
            type="text"
            className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
          />
        </div>
        <div className="w-full flex justify-end mt-5">
          <div className="col-start-3 col-end-4 bg-[#0D2135]   flex items-center justify-center px-10 w-fit py-2 rounded-xl cursor-pointer ">
            <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
              Add To the Table
            </p>
          </div>
        </div>
        <table className="w-full h-full mt-5  bg-white  rounded-2xl col-start-1 col-end-4 ">
          <tr className="border-b-[1px] w-full">
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 pl-5 w-[90%]">
              Measurement unit
            </td>
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[10%]">
              Action
            </td>
          </tr>

          <tr className="border-b-[1px] w-full">
            <td className="text-base text-[#101828] font-semibold font-Poppins-Regular py-2 pl-5 ">
              Measurement unit name1
            </td>
            <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-2 ">
              <div className="flex space-x-2 ">
                <TiEdit
                  className="text-2xl  opacity-50 cursor-pointer"
                  onClick={() => setOpenEditUnit(true)}
                />
                <IoTrashOutline
                  className="text-2xl text-[#F04438] cursor-pointer"
                  onClick={() => setOpenDeleteUnit(true)}
                />
              </div>
            </td>
          </tr>

          <tr className="border-b-[1px] w-full">
            <td className="text-base text-[#101828] font-semibold font-Poppins-Regular py-2 pl-5 ">
              Measurement unit name2
            </td>
            <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-2 ">
              <div className="flex space-x-2 ">
                <TiEdit className="text-2xl  opacity-50 cursor-pointer" />
                <IoTrashOutline className="text-2xl text-[#F04438] cursor-pointer" />
              </div>
            </td>
          </tr>
        </table>
        <div className=" flex justify-end space-x-8 mt-8 col-start-1 col-end-4">
          <div className="bg-transparent border-[1px] border-[#D0D5DD] w-fit  flex items-center justify-center px-16 py-2 rounded-xl cursor-pointer ">
            <p className="text-sm flex items-center justify-center text-black font-Poppins-Regular">
              Cancel
            </p>
          </div>
          <div className="bg-[#B7C835] w-fit  flex items-center justify-center px-28 py-3 rounded-xl cursor-pointer ">
            <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
              Save
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementUnits;
