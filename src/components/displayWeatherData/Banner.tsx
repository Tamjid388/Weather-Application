import Image from "next/image";
import React from "react";
import Time from "../Time/Time";
type props = {
  country?: string;
  city?: string;
  temperature?: number;
  date?: number;
  icon: string;
};
export default function Banner({
  city,
  country,
  temperature,
  date,
  icon,
}: props) {
  return (
    <div
      className="relative w-full 
          h-80 md:h-[384px] rounded-lg overflow-hidden"
    >
      {/* Small device image */}
      <Image
        src={"/banners/mobileBg.svg"}
        alt="Banner Small"
        fill
        className="md:hidden"
        style={{ objectFit: "cover" }}
        priority
      />
      {/* Large device image */}
      <Image
        src={"/banners/desktopBg.svg"}
        alt="Banner Large"
        fill
        className=""
        style={{ objectFit: "cover" }}
        priority
      />
      {/* Overlay content */}
      <div
        className="absolute inset-0 flex flex-col
           md:flex-row
           justify-center
           items-center
           md:justify-around text-center p-4"
      >
        <div className="flex flex-col items-center md:items-start">
          <h1
            className="text-white text-3xl  
              md:text-3xl font-bold"
          >
            {city}
            {","} {country}
          </h1>
          <Time date={date} />
        </div>

        <div className="flex md:flex-row items-center">
          {icon && (
            <Image
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather Icon"
              width={80}
              height={80}
            />
          )}

          <p className="text-white font-semibold
           text-sm md:text-4xl mt-1">
            {temperature}°
          </p>
        </div>
      </div>{" "}
      *
    </div>
  );
}
