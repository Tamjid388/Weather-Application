"use client";
import { WeatherResponse } from "@/types/weather";
import React from "react";
import Banner from "./Banner";
import Image from "next/image";
import { countries } from "countries-list";
import type { TCountryCode } from "countries-list";
import { Button } from "../ui/button";
import DaysDropdown from "../DropDown/DaysDropdown";
import WeatherState from "../WeatherState/WeatherState";
type prop = {
  weatherdata?: WeatherResponse;
};
export default function DisplayWeatherData({ weatherdata }: prop) {
  console.log("ok", weatherdata?.name);

  const countryCode = weatherdata?.sys.country as TCountryCode | undefined;

  // Safe access with fallback
  const countryName = countryCode ? countries[countryCode]?.name : "Unknown";
  return (
    <div className="max-w-7xl mx-auto w-full flex gap-4 ">
      {/* left col */}
      <div className="w-2/3">
        {/* 1st Row */}
        <Banner
          city={weatherdata?.name}
          country={countryName}
          temperature={weatherdata?.main.temp}
          date={weatherdata?.dt}
        />
        {/* 2nd Row */}
        <div className="">
          <WeatherState weatherdata={weatherdata}/>
        </div>
        {/* 3rd Row */}
        <div className="">helloa</div>
      </div>

      {/* right col */}
      <div className=" p-4  w-1/3">
        <div className="flex items-center">
          <h1 className="text-white font-semibold text-xl">Hourly Forecast</h1>
          <DaysDropdown />
        </div>
        <h1 className="text-white font-semibold text-xl">Hello World</h1>
        <h1 className="text-white font-semibold text-xl">Hello World</h1>
      </div>
    </div>
  );
}
{
  /* <div
className="
h-full w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100
"
>
 <h1 className="text-white font-semibold text-xl">
            Hello World</h1>
</div> */
}
