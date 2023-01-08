import React from "react";
import profile from "../../Images/profile.jpg";

function PateintContainer() {
  return (
    <div className="flex justify-between items-center mt-2 w-full">
      <div className="w-[65px] mr-2">
        <img src={profile} className="rounded-full w-[56px] h-[56px] " />
      </div>
      <div className="font-Poppins-Regular w-full ">
        <p className="text-[#101828] text-sm w-full">
          Ali AbuSamra consectetur adipis...
        </p>
        <p className="text-[#98A2B3] text-xs">Booking on 14th oct,2022</p>
      </div>
    </div>
  );
}

export default PateintContainer;
