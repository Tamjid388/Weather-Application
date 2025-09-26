import React from 'react'

type dateProp={
    date?:number;
}


export default function Time({date}:dateProp) {
    if(!date){
        return null
    }

     const dayName = new Date(date * 1000).toLocaleDateString("en-US", {
    weekday: "long", // Tuesday
  });

  const fullDate = new Date(date * 1000).toLocaleDateString("en-US", {
    year: "numeric",  // 2025
    month: "short",   // Aug
    day: "numeric",   // 5
  });
  return (
   <div className="text-white mt-2 flex
   gap-2
   items-center font-normal">
      <p className="text-lg  ">{dayName}, </p>
      <p className="text-lg ">{fullDate}</p>
    </div>
  )
}
