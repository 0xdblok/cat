import React from "react";
import Image from "next/image";
import x from "../asset/x.png";
import telegram from "../asset/telegram.png";
import tele from "../asset/tele.svg";
import xx from "../asset/xx.svg";
import "animate.css";
export default function Footer() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="flex gap-2 pt-10 justify-end pb-4 pr-6">
        <a>
          {" "}
          <Image
            src={tele}
            className="lg:w-[40px] lg:h-[40px]"
            alt="Picture of a cat"
            width={30}
            height={30}
          />
        </a>
        <a>
          {" "}
          <Image
            className="lg:w-[40px] lg:h-[40px]"
            src={xx}
            alt="Picture of a cat "
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
