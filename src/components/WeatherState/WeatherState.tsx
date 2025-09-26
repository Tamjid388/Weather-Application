import { WeatherResponse } from '@/types/weather';
import React from 'react'

type weatherstateprop={
     weatherdata?: WeatherResponse;
}


export default function WeatherState({ weatherdata }: weatherstateprop) {
 const main = weatherdata?.main;
const wind = weatherdata?.wind;

    return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="bg-[#262540] p-4 rounded-lg flex flex-col items-center justify-center">
        <p className="text-gray-300 text-sm">Feels Like</p>
        <p className="text-white text-xl font-semibold">{main?.feels_like}°</p>
      </div>

      <div className="bg-[#262540] p-4 rounded-lg flex flex-col items-center justify-center">
        <p className="text-gray-300 text-sm">Humidity</p>
        <p className="text-white text-xl font-semibold">{main?.humidity}%</p>
      </div>

      <div className="bg-[#262540] p-4 rounded-lg flex flex-col items-center justify-center">
        <p className="text-gray-300 text-sm">Wind</p>
        <p className="text-white text-xl font-semibold">{wind?.speed} m/s</p>
      </div>

      <div className="bg-[#262540] p-4 rounded-lg flex flex-col items-center justify-center">
        <p className="text-gray-300 text-sm">Precipitation</p>
        <p className="text-white text-xl font-semibold">
           {weatherdata?.rain?.["1h"] ?? 0} mm</p>
      </div>
    </div>
  )
}
