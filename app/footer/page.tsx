import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaClock,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="w-full mx-auto  bg-[#F6F6F6]">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 px-6 py-8">
        <div className="flex justify-center gap-6 text-3xl ">
          <Link href={""}>
            <FaSpotify className="sm:text-6xl text-3xl " />{" "}
          </Link>
          <Link href={""}>
            <FaWhatsapp className="sm:text-6xl" />{" "}
          </Link>
          <Link href={""}>
            <FaLinkedin className="sm:text-6xl" />{" "}
          </Link>
          <Link href={""}>
            <FaInstagram className="sm:text-6xl" />{" "}
          </Link>
        </div>
        <div className=" flex flex-col gap-2 items-center ">
          <FaClock className="sm:text-6xl" />

          <h1 className="sm:text-3xl text-l">همه‌ی روزها – ساعت ۲۳:۰۰ – ۷:۰۰</h1>
        </div>

        <div className="flex flex-col gap-2 items-center ">
          <BsFillTelephoneFill className="sm:text-6xl" />
          <h1 className="sm:text-3xl text-l hover:text-blue-400 ">
            <Link href={""}  > ۰۹۹۲۹۴۸۴۶۴۳</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
