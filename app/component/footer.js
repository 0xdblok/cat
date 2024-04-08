import React from "react";
import Image from "next/image";
import x from "../asset/x.png";
import telegram from "../asset/telegram.png";
export default function Footer() {
  return (
    <div>
      <div className="flex pt-10 justify-end pb-4 pr-6">
        <a>
          {" "}
          <Image src={telegram} alt="Picture of a cat" width={30} height={30} />
        </a>
        <a>
          {" "}
          <Image src={x} alt="Picture of a cat" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
