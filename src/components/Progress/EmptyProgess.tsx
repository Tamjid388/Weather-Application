import Image from 'next/image'
import React from 'react'

export default function EmptyProgess() {
  return (
    <div>
        <div className='flex flex-col items-center'>
                <Image
                src={"/icons/empty.png"}
                alt="site logo"
                width={96}
                height={96}
                className='object-cover'
                />
                  <h1 className='font-normal text-white text-lg'>
                Search for a city to see weather information</h1>
        
        </div>
    </div>
  )
}
