/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { t } from "i18next";
export default function PayBill({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  function close() {
    setOpen(false);
  }
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
                    <div className="w-full flex  h-full items-center mt-10">
                      <p className=" font-semibold justify-center flex flex-grow text-2xl ml-10">
                        {t("Pay the bill")}
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="w-full m-auto mt-10">
                      <div className="mx-auto w-full flex  justify-between">
                        <input
                          dir="rtl"
                          lang="ar"
                          placeholder={t("Amount in dinars")}
                          className="py-4 bg-[#F2F4F7] w-[45%] text-xs  focus:outline-none px-4  placeholder-[#B9B9B9] text-left rounded-xl border-[1px] border-[#E4E7EC]"
                          type="text"
                        />
                        <input
                          dir="rtl"
                          lang="ar"
                          placeholder={t("Amount in dollars")}
                          className="py-4 bg-[#F2F4F7] w-[45%] text-xs  focus:outline-none px-4  placeholder-[#B9B9B9] text-left rounded-xl border-[1px] border-[#E4E7EC]"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                    <button
                      type="button"
                      className="flex flex-grow py-2 bg-[#B7C835] justify-center rounded-xl text-white"
                    >
                      {t("Pay")}
                    </button>
                    <button
                      type="button"
                      className="border-[1px] mr-5 px-8 rounded-xl font-Poppins-Regular text-sm"
                      onClick={() => close()}
                      ref={cancelButtonRef}
                    >
                      {t("Cancel")}
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
