import React from "react";
import "animate.css";
export default function Tokenomics() {
  return (
    <div className="text-center animate__animated animate__fadeInUp font-customfont pt-6">
      <p className="lg:text-6xl animate__animated animate__fadeInUp md:text-4xl [text-shadow:2px_2px_0px_rgba(46,56,125)]   font-customfont text-white  text-center text-3xl  pt-16">
        Tokenomeow!
      </p>
      <div className="pt-3  text-[#2E387D]">
        <p className="tracking-[.08em] animate__animated animate__fadeInUp">
          TOTAL SUPPLY
        </p>
        <p className=" tracking-[.12em] animate__animated animate__fadeInUp">
          1 BILLION
        </p>
        <p className=" tracking-[.08em] animate__animated animate__fadeInUp">
          fair launch for all meows out there!!!{" "}
        </p>
      </div>
      <div className="pt-10  text-center text-[#2E387D]">
        <p className=" tracking-[.08em]">Contract Address</p>
        <p className=" tracking-[.08em]">
          0x203ef7fbf580a42c429caa3caa258575e514100e
        </p>
      </div>
    </div>
  );
}
