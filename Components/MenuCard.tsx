"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { useMenu } from "@/Context/MenuContext";
import Image from "next/image";
import { useState } from "react";

export function CardImage() {
  const { product } = useMenu();
  const [search, setSearch] = useState("");

  const searchProduct = product?.filter((pro) =>
    pro.name.toLowerCase().includes(search.toLowerCase()),
  );

  
  return (
    <>
      <div className=" w-full max-w-sm mx-auto text-center mb-6 mt-3 ">
        <input
          type="search"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border px-3 rounded-sm py-3  "
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {searchProduct?.map((item) => (
          <Card key={item.id}>
            <Image src={item.image} alt={item.name} width={400} height={300} />

            <CardHeader>
              <CardTitle>{item.name}</CardTitle>

              <CardDescription>{item.cuisine}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
