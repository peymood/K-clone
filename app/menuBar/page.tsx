import { CarouselSpacing } from "@/Components/Carousel";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import React from "react";

const MenuBar = () => {
  return (
    <div className="w-full h-screen bg-blue-500 flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-2xl">منو</h1>

      <CarouselSpacing />

      <Button
        className="px-10 py-6  hover:bg-blue-600 cursor-pointer"
        type="submit"
      >
        <Link href="/menu">منو</Link>
      </Button>
    </div>
  );
};

export default MenuBar;
