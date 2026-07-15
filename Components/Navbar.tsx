"use client";

import React, { useState } from "react";
import { IoIosCafe } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <div className="w-full h-20 sticky bg-blue-900 ">
      <div className="flex justify-between items-center sm:px-16 px-6 py-2 ">
        <div className="flex justify-center items-center gap-3 sm:text-4xl text-2xl  ">
          <IoIosCafe />
          <div className="block">
            <h1 className="font-bold">K-Cafe </h1>
            <p className="text-sm">Art of bridge</p>
          </div>
        </div>
        <ul className=" hidden sm:flex justify-center items-center gap-8 text-2xl font-bold ">
          <li>ارتباط با ما </li>
          <li><Link href="#about">درباره ما </Link></li>
          <li>ایونت ها </li>
          <li>
            <Link href="/menu">منو</Link>
          </li>
        </ul>

        <IoMenu
          onClick={handleClick}
          className="flex sm:hidden cursor-pointer text-2xl  "
        />
      </div>
      {click && <Sidebar />}
    </div>
  );
};

export default Navbar;
