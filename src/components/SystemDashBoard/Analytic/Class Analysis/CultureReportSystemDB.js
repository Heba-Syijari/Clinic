import React from "react";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";

function CultureReportSystemDB({ type, formData }) {
  {
    /* have to do stateManagment For the table here too but if we have the intrputick get show u have to hide the div that has the buttons here */
    /* the Save will be from the interputik div if the interputik shown */
  }
  const Save = () => {};
  return (
    <div
      className={`${
        type === "CultureReport" ? "block" : "hidden"
      } col-start-1 col-end-3 mt-10 mb-10`}
    >
      <div className="flex w-full justify-start space-x-10 col-start-1 col-end-3">
        <div className="border-[#E4E7EC] w-[50%] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
          <input
            name="subjectTitle"
            placeholder="subject title"
            type="text"
            className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
          />
        </div>
        <div className=" bg-[#0D2135] w-[34%]  flex items-center justify-center px-20  py-2 rounded-xl cursor-pointer ">
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
