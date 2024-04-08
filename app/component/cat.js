import React from "react";
import Image from "next/image";
import cat1 from "../asset/cat1.png";
import cat2 from "../asset/cat2.png";
import cat3 from "../asset/cat3.png";
import cat4 from "../asset/cat4.png";
import cat5 from "../asset/cat5.png";
import cat6 from "../asset/cat6.png";
export default function Cat() {
  return (
    <div>
      <p className="pt-16 text-center text-2xl">
        the cat that don’t give a f*ck!
      </p>
      <div>
        <div>
          <h2 className="pt-6 text-center text-[#2E387D]">Day1</h2>
          <div className="flex px-40 justify-center">
            <Image src={cat1} alt="cat1" width={250} height={250} />{" "}
          </div>
        </div>
        <div>
          <h2 className="pt-6 text-center text-[#2E387D]">Day2</h2>
          <div className="flex px-[140px] justify-center">
            <Image src={cat2} alt="cat1" width={250} height={250} />{" "}
          </div>
        </div>
        <div>
          <h2 className="pt-6 text-center text-[#2E387D]">Day3</h2>
          <div className="flex px-[140px] justify-center">
            <Image src={cat3} alt="cat1" width={250} height={250} />{" "}
          </div>
        </div>
        <div>
          <h2 className="pt-6 text-center text-[#2E387D]">Day4</h2>
          <div className="flex px-[140px] justify-center">
            <Image src={cat4} alt="cat1" width={250} height={250} />{" "}
          </div>
        </div>
        <div>
          <h2 className="pt-6 text-center text-[#2E387D]">Day5</h2>
          <div className="flex px-[140px] justify-center">
            <Image src={cat5} alt="cat1" width={250} height={250} />{" "}
          </div>
        </div>
        <div>
          <h2 className="pt-6 text-center text-[#2E387D]">Day6</h2>
          <div className="flex px-[140px] justify-center">
            <Image src={cat6} alt="cat1" width={250} height={250} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
