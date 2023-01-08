import React from "react";
import profile from "../../../Images/profile.jpg";

function LabNameContainer() {
  return (
    <div className="flex flex-col space-y-3 bg-[#F9FAFF] rounded-xl py-4 px-3   mt-2">
      <div className="flex items-start ">
        <img src={profile} className="rounded-2xl w-[44px] h-[44px] mr-2" />
        <div className=" flex flex-col space-y-1">
          <p className="text-[#101828] font-Poppins-SemiBold text-sm ">
            Name of Lab
          </p>
          <p className="text-[#98A2B3] font-Poppins-Medium text-xs">
            0598276050
          </p>
        </div>
      </div>
      <p className="text-sm font-Poppins-Regular">
        Address here Address here Address hereAddress here Address
      </p>
    </div>
  );
}

export default LabNameContainer;
