/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllGender,
  selectGenders,
} from "../../../GlobalData/SystemDashBoard/GenderSlice";

export default function EditGender({ open, setOpen, id }) {
  const GenderSelector = useSelector(selectGenders);
  useEffect(() => {
    let value = GenderSelector
      ? GenderSelector[
          GenderSelector?.findIndex((genderItem) => genderItem.id === id)
        ]?.name
      : "SDAfa";
    document.getElementById("GenderName").textContent = value;
  }, [id]);

  const cancelButtonRef = useRef(null);
  const dispatch = useDispatch();

  function close() {
    setOpen(false);
  }
  const Edit = async () => {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTNjNmIwNGU3YWM4MDJkYTZmMjBmNDFlOTQ0YzgwY2FhZWFkYTUzODYwYjQ0MzliOTIxYzUxYmMxNGI5NzRiZjFmM2Y0MzgxMzdkNWM5MjUiLCJpYXQiOjE2NzMwMDQ1MjYuMTk2NzU2LCJuYmYiOjE2NzMwMDQ1MjYuMTk2NzU4LCJleHAiOjE3MDQ1NDA1MjYuMTkyMjE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.fnLnZuk2fJ5ZzZ9mNLUiFs8kuIxepWPbx8iTXWQT32Ex1w-GE6CQcs0F6QtwB6v0venr55OlRen94-Kj6zo98O_OXDDeyi2_NDB0GXLFH0w7aoLxFHSO8MKjOzJ__AuDHlQSMiqe8Gb3_G3-lfII9xAeEbs4oOOklGTiSj0NT2hH0sqNc1lov4nqc1rahtEAR3SZKanW8tjkqKTFb1u97fE6impKxCiLPJLFCj5izyacy0y0nuDGNAEoJSd83TyOwBCmiZOKGH2Dw5yCURcfrG246qqee_zcuYGuipjHAMvIN1CXsQLyIMnMWfQHuGQTzFWhU5QSmmQOZZKuas2wneiSdgFVCLWImQS_U0njfY-WtXh7dJu1vauJqRJnrmlSaXwyWzoKjhKxSUPST3KzGvV9rST6mQeP0G6LPcv5b70QLf_fSrDb4AVC4Vi6cTgvMsLzreo5pg20A5dNWAvxnCz0RJkQdhUYQEy5yBKJQOryEMOqTQm2RMrf6z4eVVIKYKDcROy_CPwk5nC6RwEdMRZjBwQEtl7tD1LbL6Kjkuyi8Cc9fSm55moR4NG293_JrhjnTnmFju3m952Bx3LNxiZUVcBs2rhzF9ZD8AGfAvHD_XlxOSiMIZasEhfxb0MA1rd7xdRdklevX5svfxU2HJT6S6rnrsU6CIgM7-b-BVI";

    let selected =
      GenderSelector[
        GenderSelector.findIndex((GenderItem) => GenderItem.id === id)
      ];
    let formdata = new FormData();
    formdata.append("id", selected.id);
    formdata.append("name", document.getElementById("GenderName").value);

    await axios
      .put(
        `https://aurora-team.com/labs-obada/api/admin-scope/update-gender?gender_id=${formdata.get(
          "id"
        )}&name=${formdata.get("name")}`,
        axios.interceptors.request.use(function (config) {
          let token =
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2VlN2E3Y2NmMjEzZTRkZjVjZDI2OTk3YzU5MmI0MDA1N2Q0N2ZmY2M5MzZhNmUyZjhkOGI4MDQyNzZmNTcyNmJhZjVkZWUyMjcwNGUzMzYiLCJpYXQiOjE2NzMwOTMwODguOTY2MzkxLCJuYmYiOjE2NzMwOTMwODguOTY2Mzk0LCJleHAiOjE3MDQ2MjkwODguOTYxNTUxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.NKUc3xWBkslUAMS0LgwzHEG_ymvKjG7K3biTQJZob4pv4hG_LMWruek6EPOqNsbz0cquOkFrSx_awxTHo0RlBtsYFdyXT6grhokhdziLGVfOIK7aCVBHLo_ZyJ0KH32kV40fS62ZOgPdTgHaRn_Rwhd40OLLXDvA2-1C1AnfB46vshAS3AazeE-BOyvFnXMSW7tHhaF-nLGR1VhO209KRv8bEHCyTtwBQ6GTw7xtQaqS99y2_B3jwqNlGc34rrzdjEiFRas_Ua2QR0_8vbVCg4XbITpBVg3TfBY1uwysmMZbrtiQnlZukl2o62K30EL0FFsAyahDofFJUsVo05nRaZ-zR1cLr1Eg9LHGkhytb2lHZBHQaShuWCmdLVj-g3KnRnlHffiS7D9n1uBHgYXv6F-ONrmgra_sOl5qn7NdZor8NE_A_B7Inv3Bf0A916LnPzFmasyQlPUk1_-eaf3Jg4FpEBoTMw7Fr6j4SomNK-0ZcQVHztEhGNLfoK-4GB3UQnZVDjxkw3Wnb-4mn7RLJEbM-1N-33UpxOFFqI6tmpFIMCShI9FL6zzOSRVhvC4cGFTi5I9JJ2Yl0uAFdBZpKW8nhHTOCld3IB2mPdJ5rNkQQiG12q6qbutfTBjumTP-DAbmCOa2Hp8gAhScj780HphkjeslLkrQWGWgXpf8wlM";
          config.headers.Authorization = token ? `Bearer ${token}` : "";
          return config;
        })
      )
      .then((response) => {
        let content = GenderSelector.map((item) => {
          return item.id == id
            ? { id: id, name: document.getElementById("GenderName").value }
            : item;
        });
        dispatch(addAllGender(content));
        setOpen(false);
      });
  };
  const textChange = () => {};
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          initialFocus={cancelButtonRef}
          onClose={() => close()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto ">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative px-10 pb-8 bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:max-w-xl sm:w-full ">
                  <div className="bg-white ">
                    <div className="w-full flex  h-full items-center mt-5">
                      <p className="  justify-center font-Poppins-SemiBold flex flex-grow text-lg ml-10">
                        Edit Gender
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="flex flex-col space-y-5 w-full m-auto mt-10">
                      <div className={`space-y-5 flex-col `}>
                        <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            id="GenderName"
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                            onChange={(e) => textChange(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                    <button
                      type="button"
                      className="flex flex-grow font-medium text-sm py-3 bg-[#B7C835] justify-center rounded-xl text-white"
                      onClick={() => Edit()}
                    >
                      Edit Unit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
