import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
import "animate.css";
export default function Hero() {
  return (
    <div className="font-customfont animate__animated animate__fadeInLeft">
      <p className=" [text-shadow:2px_2px_0px_rgba(46,56,125)] lg:text-6xl md:text-4xl  font-customfont text-white  text-center text-2xl pt-14">
        DUMB CAT
      </p>
      <div className="px-[100px] lg:px-[0px] flex justify-center ">
        <Image src={hero} alt="Picture of a cat" width={470} height={470} />
      </div>
      <p className="text-center  text-2xl text-[#2E387D] pt-3">
        f*ck off yuu b*tch!!!
      </p>
    </div>
  );
}
