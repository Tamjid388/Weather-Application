import Image from 'next/image'
import React from 'react'
import Dropdown from '../DropDown/Dropdown'

export default function Navbar() {
  return (
    <div 
    className='container mx-auto flex justify-between items-center py-4'
    >
      
<div className='flex items-center'>
        <Image 
        src={"/icons/Sunny.png"}
        alt="site logo"
        width={32}
        height={32}
        className='object-cover'
        />
          <h1 className='font-bold text-white'>Weather Today</h1>

</div>
{/* toggle */}
<div>
<Dropdown/>
</div>
    </div>
  )
}
