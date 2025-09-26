import Image from 'next/image'
import React from 'react'
import Time from '../Time/Time'
type props={
country?:string,
city?:string,
temperature?:number
date?:number
}
export default function Banner({ city, country, temperature,date }: props) {
  return (
     <div
          className="relative w-full 
          h-80 md:h-[500px] rounded-lg overflow-hidden"
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
          <div className="absolute inset-0 flex flex-row  items-center
           justify-around text-center p-4">
          <div>
              <h1 className="text-white text-3xl md:text-5xl font-bold">
              {city}{","} {country}
            </h1>
        <Time date={date}/>
          </div>
            
              <p className="text-white text-lg md:text-2xl mt-2">
          
              </p>
            
            <p className="text-white font-semibold text-sm md:text-4xl mt-1">
              {temperature}°</p>
          </div>{" "}
          *
        </div>
  )
}
