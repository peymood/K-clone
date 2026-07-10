import React from "react";

const Sidebar = () => {
  return (
    <div className=" sm:hidden  w-full h-screen mx-auto bg-green-800  ">
      <ul className="flex flex-col justify-center items-center ">
        <div className="mt-12 font-bold text-2xl ">
          <li className="py-6">ارتباط با ما </li>
          <li className="py-6">درباره ما</li>
          <li className="py-6">ایونت ها </li>
          <li className="py-6">منو </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
