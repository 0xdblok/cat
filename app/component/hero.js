import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
export default function Hero() {
  return (
    <div>
      <p className="text-center text-2xl pt-14">DUMB CAT</p>
      <div className="px-36">
        <Image src={hero} alt="Picture of a cat" width={450} height={450} />
      </div>
      <p className="text-center text-2xl text-[#2E387D] pt-4">
        f*ck off yuu b*tch!!!
      </p>
    </div>
  );
}
