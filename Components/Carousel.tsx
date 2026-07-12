import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

const foods = [
  "pitzza",
  "coffe",
  "نوشیدنی گرم ",
  "نوشیدنی سرد",
  "موچکا",
  "beverage",
  "breakfast",
  "کیک و دسر ",
  "چایی",
  "دمنوش",
];

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-5xl">
      <CarouselContent className="-ml-1">
        {foods.map((item, index) => (
          <CarouselItem key={index} className="sm:basis-1/2  pl-1 lg:basis-1/3">
            <div className="p-1">
              <Card className="rounded-2xl" >
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-xl font-semibold">{item}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
