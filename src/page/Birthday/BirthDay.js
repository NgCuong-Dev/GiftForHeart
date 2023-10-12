import React from "react";
import img1 from "../../access/img/img1.jpg";
import img2 from "../../access/img/img2.jpg";
import img3 from "../../access/img/img3.jpg";
import img4 from "../../access/img/img4.jpg";
import img5 from "../../access/img/img5.jpg";
import img6 from "../../access/img/img6.jpg";
import img7 from "../../access/img/img7.jpg";
import img8 from "../../access/img/img8.jpg";
import { NavLink } from "react-router-dom";
export default function BirthDay() {
  return (
    <div className="bg-slate-200 w-screen h-screen">
      <h1 className="font-medium text-2xl">HAPPY BIRTHDAY TO BAE</h1>
      <div className="content pt-2 px-10 text-left font-medium text-xl">
        Tuy mới gặp em chưa được lâu nhưng anh cũng tìm hiểu với em khá
        nhiều,06/05/2005 sinh nhật của em đã qua lâu rồi.Nhưng anh làm điều gì
        đó đặc biệt cho em vì anh nghĩ sinh nhật vừa rồi cũng là lúc em tròn 18
        tuổi mà người ta nói 18 tuổi là tuổi đẹp nhất con gái nên anh quyết định
        làm điều gì đó đặc biệt xem như là món quà sinh nhật dành tặng cho em
        !Khoảnh khắc xinh đẹp của em trong ngày sinh nhật tiếc là thời điểm đó
        anh chưa xuất hiện.Cho anh chúc sinh nhật muộn 5 tháng nheee nó hơi lạ
        đời nhưng cũng ráng chấp nhận đi.Chúc em sinh nhật vui vẻ luôn xinh đẹp
        hơn ngày hôm qua!
      </div>
      <div className="img-list grid object-cover grid-cols-4 px-10 py-10 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <img className="img-bith" src={img1} alt="#" />
        <img className="img-bith" src={img2} alt="#" />
        <img className="img-bith" src={img3} alt="#" />
        <img className="img-bith" src={img4} alt="#" />
        <img className="img-bith" src={img5} alt="#" />
        <img className="img-bith" src={img6} alt="#" />
        <img className="img-bith" src={img7} alt="#" />
        <img className="img-bith" src={img8} alt="#" />
      </div>
      <NavLink to={"/"}>
        <button className="px-6 py-2 mb-10 rounded-lg bg-black text-white">
          Trở về trang chính
        </button>
      </NavLink>
    </div>
  );
}
