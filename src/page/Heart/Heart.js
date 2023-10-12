import React from "react";
import img12 from "../../access/img/img12.jpg";
import img13 from "../../access/img/img13.jpg";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Heart() {
  return (
    <div className="bg-white h-screen w-screen">
      <div className="flex justify-center items-center space-x-10 pt-20 ">
        <img
          className="rounded-lg"
          width={"300px"}
          style={{ height: "300px" }}
          src={img12}
          alt="#"
        />
        <span className="text-3xl text-red-500 animate-bounce">
          <FaHeart />
        </span>
        <img
          className="rounded-lg"
          width={"300px"}
          style={{ height: "300px" }}
          src={img13}
          alt="#"
        />
      </div>
      <NavLink to={"/"}>
        <button className="px-6 py-2 mt-20 bg-stone-950 text-white">
          Trở về trang chính
        </button>
      </NavLink>
    </div>
  );
}
