import React, { useState } from "react";
import IntrputikSystemDB from "./IntrputikSystemDB";

function AddSectionSystemDB({ show }) {
  const [ShowAnalysisDetailSystemDB, SetShowAnalysisDetailSystemDB] =
    useState(false);

  const ShowDetails = (e) => {
    if (e.target.checked) {
      SetShowAnalysisDetailSystemDB(true);
      if (!document.getElementById("SectionNameInput").contains("hidden")) {
        document.getElementById("SectionNameInput").add("hidden");
      }
    } else if (!e.target.checked) {
      SetShowAnalysisDetailSystemDB(false);
      if (document.getElementById("SectionNameInput").contains("hidden")) {
        document.getElementById("SectionNameInput").remove("hidden");
      }
    }
  };
  return (
    <div className={`${show === true ? "block" : "hidden"}`}>
      <div className="w-full flex space-x-5 justify-end mb-5 mt-16 pr-1">
        <div className="flex items-center space-x-2">
          <input type="checkbox" />
          <label className="font-Poppins-Regular text-black text-xs">
            Single Print
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" onClick={(e) => ShowDetails(e)} />
          <label className="font-Poppins-Regular text-black text-xs">
            Once
          </label>
        </div>
      </div>
      <div
        id="SectionNameInput"
        className={`${
          ShowAnalysisDetailSystemDB == true ? "hidden" : "flex"
        } border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4    relative m-auto border-[1px] rounded-xl `}
      >
        <input
          name="SectionName"
          placeholder="Section name"
          type="text"
          className="w-full bg-[#F9FAFF] font-Poppins-Regular text-sm text-[#707070] outline-0 ring-0"
        />
      </div>
      <div
        className={`${
          ShowAnalysisDetailSystemDB == true ? "hidden" : "flex"
        } flex justify-end space-x-8 mt-8 `}
      >
        <div className="bg-[#F04438] border-[1px] border-[#D0D5DD] w-fit  flex items-center justify-center px-16 py-2 rounded-xl cursor-pointer ">
          <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
            Delete
          </p>
        </div>
        <div className="bg-[#B7C835] w-fit  flex items-center justify-center px-28 py-3 rounded-xl cursor-pointer ">
          <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
            Save
          </p>
        </div>
      </div>
      <div className=" w-full  mt-5  ">
        <IntrputikSystemDB show={ShowAnalysisDetailSystemDB} />
      </div>
    </div>
  );
}

export default AddSectionSystemDB;
