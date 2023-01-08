import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { RiSendPlaneLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import profile from "../../Images/profile.jpg";
import OutProductContainer from "./Inside/OutProductContainer";

// Example items, to simulate fetching from another resources.

function Items({ currentItems, setOpenOutProduct }) {
  const ProductOut = () => {
    setOpenOutProduct(true);
  };
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <tr className="border-b-[1px] ">
            <td className="w-fit">
              <input
                type="checkbox"
                className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 w-fit"
              />
            </td>
            <td className="font-Poppins-Regular text-black items-center text-base font-semibold py-6 flex mt-2 ">
              <img src={profile} className="rounded-full w-8 h-8 mr-2" />

              <p>{item.name}</p>
            </td>
            <td className="font-Poppins-Regular text-black text-base font-semibold py-6 ">
              {item.Description}
            </td>
            <td className="font-Poppins-Regular text-black text-base font-semibold py-6 pl-2">
              {item.Quantity}
            </td>
            <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
              {item.Company}
            </td>
            <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
              {item.Exp}
            </td>
            <td className="font-Poppins-Regular text-black text-base font-semibold py-6 pl-5">
              {item.Model}
            </td>
            <td className="font-Poppins-Regular text-black text-base font-semibold py-6 pl-5">
              {item.MeasuringUnit}
            </td>

            <td>
              <div className="flex space-x-2 py-4">
                <RiSendPlaneLine
                  className="text-2xl text-black cursor-pointer"
                  onClick={() => ProductOut()}
                />
                <TiEdit className="text-2xl  opacity-50 cursor-pointer" />
                <IoTrashOutline className="text-2xl text-[#F04438] cursor-pointer" />
              </div>
            </td>
          </tr>
        ))}
    </>
  );
}

function InSidePangration({ section, itemsPerPage, Data }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [OpenOutProduct, setOpenOutProduct] = useState(false);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );

    setItemOffset(newOffset);
  };

  return (
    <div
      className={`${
        section === "Inside" ? "block" : "hidden"
      }  overflow-x-scroll`}
    >
      <OutProductContainer open={OpenOutProduct} setOpen={setOpenOutProduct} />

      <table className="w-full h-full mt-8 bg-white rounded-t-2xl ">
        <tr className="border-b-[1px] w-full">
          <td className="w-fit ">
            <input
              type="checkbox"
              className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 "
            />
          </td>
          <td className="text-sm  pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2 pl-2">
            Product name
          </td>
          <td className="text-sm   pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2  w-[18%]">
            Description
          </td>
          <td className="text-sm   pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2  w-[8%]">
            Quantity
          </td>
          <td className="text-sm  pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2  ">
            Company
          </td>
          <td className="text-sm  pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2 w-[8%]">
            Exp
          </td>
          <td className="text-sm  pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2 pl-5 w-[8%]">
            Model
          </td>
          <td className="text-sm  pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2 pl-5">
            Measuring unit
          </td>
          <td className="text-sm  pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2 w-[9%]">
            Action
          </td>
        </tr>
        <Items
          setOpenOutProduct={setOpenOutProduct}
          currentItems={currentItems}
          className="w-full bg-white"
        />
      </table>

      <ReactPaginate
        breakLabel={<BsThreeDots />}
        nextLabel={
          <div className="bg-white py-[0.4rem] px-2  rounded-lg">
            <HiOutlineArrowRight className="bg-white text-xl" />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <div className="bg-white py-[0.4rem] px-2  rounded-lg">
            <HiOutlineArrowLeft className="bg-white text-xl" />
          </div>
        }
        pageClassName="bg-white  font-Poppins-Regular py-1 px-3 rounded-lg"
        containerClassName="flex justify-center space-x-5 mb-2 border-gray-400 w-full  bottom-0   items-center mt-10"
        activeClassName="bg-[#B7C835] text-[#FFFFFF] "
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default InSidePangration;
