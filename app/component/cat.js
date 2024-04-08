import React from "react";
import Image from "next/image";
import cat1 from "../asset/cat1.png";
import cat2 from "../asset/cat2.png";
import cat3 from "../asset/cat3.png";
import cat4 from "../asset/cat4.png";
import cat5 from "../asset/cat5.png";
import cat6 from "../asset/cat6.png";
import "animate.css";
export default function Cat() {
  return (
    <div className="font-customfont animate__animated animate__fadeInUp ">
      <p className="[text-shadow:2px_2px_0px_rgba(46,56,125)] lg:text-6xl md:text-4xl  font-customfont text-white  text-center text-2xl  pt-16">
        the cat that don’t give a f*ck!
      </p>
      <div className="animate__animated animate__fadeInUp lg:grid lg:grid-cols-3 lg:pt-6 ">
        <div className="animate__animated animate__fadeInUp">
          <h2 className="pt-4 text-xs text-center text-[#2E387D]">Day1</h2>
          <div className=" flex px-[110px] lg:px-[0px] justify-center">
            <Image src={cat1} alt="cat1" width={350} height={350} />{" "}
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <h2 className="pt-4 text-xs text-center text-[#2E387D]">Day2</h2>
          <div className=" flex px-[110px] lg:px-[0px] ] justify-center">
            <Image src={cat2} alt="cat1" width={350} height={350} />{" "}
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <h2 className="pt-4  text-xs text-center text-[#2E387D]">Day3</h2>
          <div className="flex px-[110px] lg:px-[0px]   justify-center">
            <Image src={cat3} alt="cat1" width={350} height={350} />{" "}
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <h2 className="pt-4  text-xs text-center text-[#2E387D]">Day4</h2>
          <div className="flex px-[110px] lg:px-[0px]  justify-center">
            <Image src={cat4} alt="cat1" width={350} height={350} />{" "}
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <h2 className="pt-4  text-xs text-center text-[#2E387D]">Day5</h2>
          <div className="flex px-[110px] lg:px-[0px]   justify-center">
            <Image src={cat5} alt="cat1" width={350} height={350} />{" "}
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <h2 className="pt-4  text-xs text-center text-[#2E387D]">Day6</h2>
          <div className="flex px-[110px] lg:px-[0px]  justify-center">
            <Image src={cat6} alt="cat1" width={350} height={350} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
