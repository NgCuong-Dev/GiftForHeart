import React from "react";
import { GiStrawberry } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import img9 from "../../access/img/img9.jpg";
import img10 from "../../access/img/img10.jpg";
import img11 from "../../access/img/img11.jpg";
import img12 from "../../access/img/img12.jpg";
import { NavLink } from "react-router-dom";

export default function Person() {
  return (
    <div className="w-screen bg-white">
      <h1 className="flex justify-center pt-10 pb-10 font-medium text-3xl">
        <span className="text-"> Bé Dâu Tây</span>
        <GiStrawberry className="text-red-500 mt-1" />
      </h1>
      <NavLink to={"/"}>
        <button className="px-6 py-2 bg-stone-950 text-white">
          Trở về trang chính
        </button>
      </NavLink>
      <div className="list-img flex justify-center items-center mt-10 ">
        <div className="grid grid-cols-4 px-20 w-30 h-30 object-cover gap-2 sm:grid-cols-1 lg:grid-cols-4 ">
          <img className="img rounded-md" src={img9} alt="#" />
          <img className="img rounded-lg" src={img10} alt="#" />
          <img className="img rounded-lg" src={img11} alt="#" />
          <img className="img rounded-lg" src={img12} alt="#" />
        </div>
      </div>
      <div className="text-left px-10 pt-4 font-bold">
        Dear Bảo Như, Em phải là một cô gái hiểu chuyện và xinh đẹp,phải tự tin
        bản thân và anh biết em đã gặp nhiều chuyện không vui trong quá khứ
        thiệt thòi mong rằng thời gian sắp đến anh sẽ cố gắng để có được sự tin
        tưởng của em.Để chăm sóc cho em và mỗi ngày được nhìn thấy em cười anh
        cố tình làm ra này để tặng em mong rằng em sẽ thích nó.Nó khá là đặc
        biệt ha vì người ta thường tặng quà hay gì đó còn anh tặng này không
        phải ai cũng làm được đâuu hehehe. Với lại anh phải thức trễ để làm tặng
        cho em đó mong là bé dâu giữ và trân trọng nó nhá.Cảm ơn em vì đã xuất
        hiện và mong rằng chúng ta sẽ có một câu chuyện đẹp và nhân vật chính
        trong câu chuyện là anh và em.f
        <span className="text-red-400">
          I hope everything will beautiful in the future!
        </span>
      </div>
    </div>
  );
}
