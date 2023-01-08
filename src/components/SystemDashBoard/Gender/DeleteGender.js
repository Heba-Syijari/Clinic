/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromGender,
  selectGenders,
} from "../../../GlobalData/SystemDashBoard/GenderSlice";

export default function DeleteGender({ open, setOpen, id }) {
  const cancelButtonRef = useRef(null);
  const GenderSelector = useSelector(selectGenders);
  const dispatch = useDispatch();

  function close() {
    setOpen(false);
  }
  const remove = async () => {
    console.log(id);

    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2VlN2E3Y2NmMjEzZTRkZjVjZDI2OTk3YzU5MmI0MDA1N2Q0N2ZmY2M5MzZhNmUyZjhkOGI4MDQyNzZmNTcyNmJhZjVkZWUyMjcwNGUzMzYiLCJpYXQiOjE2NzMwOTMwODguOTY2MzkxLCJuYmYiOjE2NzMwOTMwODguOTY2Mzk0LCJleHAiOjE3MDQ2MjkwODguOTYxNTUxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.NKUc3xWBkslUAMS0LgwzHEG_ymvKjG7K3biTQJZob4pv4hG_LMWruek6EPOqNsbz0cquOkFrSx_awxTHo0RlBtsYFdyXT6grhokhdziLGVfOIK7aCVBHLo_ZyJ0KH32kV40fS62ZOgPdTgHaRn_Rwhd40OLLXDvA2-1C1AnfB46vshAS3AazeE-BOyvFnXMSW7tHhaF-nLGR1VhO209KRv8bEHCyTtwBQ6GTw7xtQaqS99y2_B3jwqNlGc34rrzdjEiFRas_Ua2QR0_8vbVCg4XbITpBVg3TfBY1uwysmMZbrtiQnlZukl2o62K30EL0FFsAyahDofFJUsVo05nRaZ-zR1cLr1Eg9LHGkhytb2lHZBHQaShuWCmdLVj-g3KnRnlHffiS7D9n1uBHgYXv6F-ONrmgra_sOl5qn7NdZor8NE_A_B7Inv3Bf0A916LnPzFmasyQlPUk1_-eaf3Jg4FpEBoTMw7Fr6j4SomNK-0ZcQVHztEhGNLfoK-4GB3UQnZVDjxkw3Wnb-4mn7RLJEbM-1N-33UpxOFFqI6tmpFIMCShI9FL6zzOSRVhvC4cGFTi5I9JJ2Yl0uAFdBZpKW8nhHTOCld3IB2mPdJ5rNkQQiG12q6qbutfTBjumTP-DAbmCOa2Hp8gAhScj780HphkjeslLkrQWGWgXpf8wlM";
    let selected =
      GenderSelector[
        GenderSelector.findIndex((genderItem) => genderItem.id === id)
      ];
    let formdata = new FormData();
    formdata.append("id", selected.id);

    await axios
      .delete(
        `https://aurora-team.com/labs-obada/api/admin-scope/delete-gender?gender_id=${formdata.get(
          "id"
        )}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        dispatch(removeFromGender(selected));
        setOpen(false);
      });
  };
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
                        Delete Gender
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="flex flex-col space-y-5 w-full m-auto mt-10">
                      <div className={`space-y-5 flex-col `}>
                        <div className="w-full ">
                          <p className="w-fit  font-Poppins-Medium text-gray-500 text-sm ">
                            Do you want to delete? :{" "}
                            <span className="text-black ml-5">
                              {
                                GenderSelector[
                                  GenderSelector.findIndex(
                                    (genderItem) => genderItem.id === id
                                  )
                                ]?.name
                              }{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-5">
                    <button
                      type="button"
                      className="flex  font-medium text-sm py-3 px-6 bg-red-600 justify-center rounded-xl text-white"
                      onClick={() => remove()}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="flex  font-medium text-sm py-3 px-6 bg-gray-500 justify-center rounded-xl text-white"
                      onClick={() => close()}
                    >
                      No
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
