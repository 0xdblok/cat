import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
export default function Hero() {
  return (
    <div className="font-customfont ">
      <p className="[text-shadow:2px_2px_0px_rgba(46,56,125)]   font-customfont text-white  text-center text-2xl pt-14">
        DUMB CAT
      </p>
      <div className="px-[70px] ">
        <Image src={hero} alt="Picture of a cat" width={450} height={450} />
      </div>
      <p className="text-center  text-2xl text-[#2E387D] pt-4">
        f*ck off yuu b*tch!!!
      </p>
    </div>
  );
}
