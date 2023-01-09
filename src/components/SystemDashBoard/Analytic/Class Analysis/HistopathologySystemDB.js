import React, { useEffect, useState } from "react";

function HistopathologySystemDB({
  type,
  formData,
  intrputik,
  getData,
  setValue,
}) {
  const Save = () => {
    {
      /* now we have to post after we get all values from  IntrputikSystemDB component but if we have the intrputick get show u have to hide the div that has the buttons here  */
      /* the Save will be from the interputik div if the interputik shown */
    }
  };

  const textChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div
      className={`${
        type === "Histopathology" ? "block" : "hidden"
      } col-start-1 col-end-3`}
    >
      <textarea
        id="histopathology"
        placeholder="Type of resalt"
        className="bg-[#F9FAFF] border-[#E4E7EC] w-full h-fit text-xs  flex space-x-2 items-center py-3 px-4 outline-0 ring-0   relative m-auto border-[1px] rounded-xl "
        rows={5}
        onChange={(e) => textChange(e)}
      />
      <div
        className={`${
          intrputik ? "hidden" : "flex"
        }  justify-end space-x-8 mt-8 `}
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

export default HistopathologySystemDB;
