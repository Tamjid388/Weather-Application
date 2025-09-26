import React from 'react'

export default function BannerSkilton() {
  return (
    <div className="relative w-full h-80 md:h-[384px] rounded-lg overflow-hidden bg-gray-700 animate-pulse">
     
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center md:justify-around text-center p-4">
  
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
  )
}
