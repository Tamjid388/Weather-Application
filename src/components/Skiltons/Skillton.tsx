import React from 'react'
import BannerSkilton from './BannerSkilton'

export default function Skillton() {
  return (
    <div>
         <div className=" max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-4 mb-20 px-4 animate-pulse">
      {/* left col */}
      <div className="md:w-2/3 flex flex-col gap-4">
        {/* Banner skeleton */}
        <div className="relative w-full h-80 md:h-[384px] rounded-lg bg-gray-700 overflow-hidden">
          {/* Overlay placeholders */}
          <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center md:justify-around text-center p-4 gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="h-6 w-32 bg-gray-500 rounded"></div>
              <div className="h-4 w-20 bg-gray-500 rounded"></div>
            </div>
            <div className="flex md:flex-row items-center gap-4 mt-4 md:mt-0">
              <div className="h-20 w-20 bg-gray-500 rounded-full"></div>
              <div className="h-8 w-12 bg-gray-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* WeatherState skeleton */}
        <div className="w-full bg-gray-700 rounded-xl h-40"></div>

        {/* DailyForecast skeleton */}
        <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-700 p-4 rounded-lg flex flex-col items-center gap-2"
            >
              <div className="h-4 w-10 bg-gray-500 rounded"></div>
              <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
              <div className="flex justify-between w-full mt-2">
                <div className="h-4 w-6 bg-gray-500 rounded"></div>
                <div className="h-4 w-6 bg-gray-500 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* right col */}
      <div className="p-6 md:w-1/3 bg-[#262540] rounded-[20px] flex flex-col gap-4">
        {/* HourlyForecast skeleton */}
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="flex items-center justify-between gap-4">
            <div className="h-6 w-16 bg-gray-500 rounded"></div>
            <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
            <div className="h-6 w-8 bg-gray-500 rounded"></div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
