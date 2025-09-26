"use client";
import { WeatherResponse } from "@/types/weather";
import React from "react";
import Banner from "./Banner";

import { countries } from "countries-list";
import type { TCountryCode } from "countries-list";

import WeatherState from "../WeatherState/WeatherState";
import { useForecast } from "@/hooks/useForecast";
import DailyForeCast from "../Forecasts/DailyForeCast";
import HourlyForecast from "../Forecasts/HourlyForecast";
type prop = {
  weatherdata?: WeatherResponse;
};
export default function DisplayWeatherData({ weatherdata }: prop) {
  // const { data: forecastData, isPending, isError } = useForecast(city, unit);

  const countryCode = weatherdata?.sys.country as TCountryCode | undefined;

  // Safe access with fallback
  const countryName = countryCode ? countries[countryCode]?.name : "Unknown";
  return (
    <div className="max-w-7xl  w-full flex flex-col lg:flex-row gap-4 mb-20 px-4">
      {/* left col */}
      <div className="md:w-2/3">
        {/* 1st Row */}
        <Banner
          city={weatherdata?.name}
          country={countryName}
          temperature={weatherdata?.main.temp}
          date={weatherdata?.dt}
          icon={weatherdata?.weather[0]?.icon || "01n"}
        />
        {/* 2nd Row */}
        <div className="">
          <WeatherState weatherdata={weatherdata} />
        </div>
        {/* 3rd Row */}
        <div className="">
          <DailyForeCast />
        </div>
      </div>

      {/* right col */}
      <div className=" p-6  md:w-1/3 bg-[#262540] rounded-[20px]">
        <HourlyForecast />
      </div>
    </div>
  );
}
