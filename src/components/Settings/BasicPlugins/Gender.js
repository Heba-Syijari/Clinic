import React, { useEffect, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import DeleteGender from "./Gender/DeleteGender";
import EditGender from "./Gender/EditGender";
import { t } from "i18next";
import axios from "axios";
import { tab } from "@testing-library/user-event/dist/tab";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { addAllGender, addToGender, selectGenders } from "./Gender/GenderSlice";
function Gender({ type }) {
  const [OpenDeleteGender, setOpenDeleteGender] = useState(false);
  const [OpenEditGender, setOpenEditGender] = useState(false);
  const dispatch = useDispatch();
  const GenderSelector = useSelector(selectGenders);
  const [id, setId] = useState(0);
  // const [data, setData] = useState([]);
  const GetGenders = async () => {
    document.getElementById("Loader").classList.remove("hidden");
    document.getElementById("Loader").classList.add("flex");

    await axios.get(`/lab-scope/genders`).then((response) => {
      //setData(response.data);
      dispatch(addAllGender(response.data));
      document.getElementById("Loader").classList.add("hidden");
      document.getElementById("Loader").classList.remove("flex");
    });
  };

  useEffect(() => {
    GetGenders();
  }, []);

  const Edit = (id) => {
    setId(id);
    setOpenEditGender(true);
  };

  const remove = (id) => {
    setId(id);
    setOpenDeleteGender(true);
  };

  const AddToTable = async () => {
    if (document.getElementById("GenderName").value == "") {
      document.getElementById("message").textContent =
        "Please Insert The Value";
    } else {
      document.getElementById("Loader").classList.remove("hidden");
      document.getElementById("Loader").classList.add("flex");
      let formdata = new FormData();
      formdata.append("name", document.getElementById("NameGender").value);
      await axios
        .post(`/lab-scope/create-gender`, formdata)
        .then((response) => {
          if (response.status == 201) {
            document.getElementById("message").textContent = "";
            GetGenders();
            document.getElementById("GenderName").value = "";
            document.getElementById("Loader").classList.add("hidden");
            document.getElementById("Loader").classList.remove("flex");
          }
        })
        .catch((error) => {
          if (error.response) {
            document.getElementById("message").textContent = error.response;
            document.getElementById("Loader").classList.add("hidden");
            document.getElementById("Loader").classList.remove("flex");
            console.log(error.response);
          }
        });
    }
  };

  return (
    <div className={`${type === "Gender" ? "block" : "hidden"} mt-10`}>
      <DeleteGender
        open={OpenDeleteGender}
        setOpen={setOpenDeleteGender}
        id={id}
      />
      <EditGender open={OpenEditGender} setOpen={setOpenEditGender} id={id} />
      <div className="">
        <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
          <input
            name="GenderName"
            // value={name}
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
            placeholder={t("Gender name")}
            type="text"
            className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
          />
        </div>
        <div className="w-full flex justify-end mt-5">
          <div className="col-start-3 col-end-4 bg-[#0D2135]   flex items-center justify-center px-10 w-fit py-2 rounded-xl cursor-pointer ">
            <p
              className="text-sm flex items-center justify-center text-white font-Poppins-Regular"
              onClick={() => AddToTable()}
            >
              {t("Add To the Table")}
            </p>
          </div>
        </div>
        <p
          id="message"
          className="text-sm w-full text-center justify-center mt-1 text-red-500 flex items-center"
        ></p>
        <div
          id="Loader"
          className="hidden  justify-center items-center mt-5 w-full text-center m-auto"
        >
          <Oval
            height={30}
            width={30}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
        <table className="w-full h-full mt-5  bg-white  rounded-2xl col-start-1 col-end-4 ">
          <tr className="border-b-[1px] w-full">
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 pl-5 w-[90%]">
              {t("Gender name")}
            </td>
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[10%]">
              {t("Action")}
            </td>
          </tr>

          {GenderSelector
            ? GenderSelector.map((gender) => (
                <tr className="border-b-[1px] w-full">
                  <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 pl-8 ">
                    {gender.name}
                  </td>
                  <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 ">
                    <div className="flex space-x-2 ">
                      <TiEdit
                        id={gender.id}
                        className="text-2xl  opacity-50 cursor-pointer"
                        onClick={() => Edit(gender.id)}
                      />
                      <IoTrashOutline
                        id={gender.id}
                        className="text-2xl text-[#F04438] cursor-pointer"
                        onClick={() => remove(gender.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            : "Loading"}
        </table>
        <div className=" flex justify-end space-x-8 mt-8 col-start-1 col-end-4">
          <div className="bg-transparent border-[1px] border-[#D0D5DD] w-fit  flex items-center justify-center px-16 py-2 rounded-xl cursor-pointer ">
            <p className="text-sm flex items-center justify-center text-black font-Poppins-Regular">
              {t("Cancel")}
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

export default Gender;
