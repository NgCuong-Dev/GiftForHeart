import React from "react";
import { GiStrawberry } from "react-icons/gi";
import { FaBirthdayCake, FaBiohazard, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-pink-300 w-screen h-screen lg:h-screen sm:h-full ">
      <div>
        <h1 className="text-3xl pt-10 font-bold text-black">Trang Hướng Dẫn</h1>
      </div>
      <div className="list-button flex justify-center items-center space-x-20 mt-20 lg:flex-row sm:flex-col mx-auto">
        <div className="mb-10">
          <NavLink to={"/person"}>
            <button className="text-black flex font-medium rounded-lg px-6 py-3 bg-red-200">
              Bé Dâu Tây
              <div className="pt-1 pl-1">
                <GiStrawberry />
              </div>
            </button>
          </NavLink>
          <div className="text-left mt-5 font-medium ">
            Đây sẽ là nơi lưu trữ <br /> những khoảnh khoắc <br /> xinh đẹp nhất
            của em
            <div className="flex justify-center  text-red-500 mt-3">
              <FaHeart />
            </div>
          </div>
        </div>
        {/* gift birthday */}
        <div className=" pb-5 pt-5 sm:pr-20 lg:px-0 ">
          <NavLink to={"/birthday"}>
            <button className="text-black font-medium rounded-lg px-6 py-3 flex bg-yellow-200">
              Gift Birthday
              <span className="pt-1 pl-1">
                <FaBirthdayCake />
              </span>
            </button>
          </NavLink>
          <div className="text-left mt-5 font-medium ">
            Đây sẽ là nơi lưu trữ <br /> những khoảnh khoắc <br /> xinh đẹp nhất
            của em <br /> trong ngày sinh nhật <br /> tuổi 18.
            <div className="flex justify-center  text-red-500 mt-3">
              <FaHeart />
            </div>
          </div>
        </div>
        {/* gift special  */}
        <div className="mb-10 sm:pr-20">
          <NavLink to={"/heart"}>
            <button className="text-black font-medium rounded-lg px-6 py-3 flex bg-slate-200">
              Gift Special
              <span className="pt-1 pl-1">
                <FaBiohazard />
              </span>
            </button>
          </NavLink>
          <div className="text-left mt-5 font-medium">
            Đây sẽ là nơi lưu trữ <br /> những khoảnh khoắc <br /> xinh đẹp nhất
            của em
            <div className="flex justify-center text-red-500 mt-3">
              <FaHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
