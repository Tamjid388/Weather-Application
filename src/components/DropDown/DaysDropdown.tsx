"use client"
import React, { useState } from 'react'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Settings } from 'lucide-react'

export default function DaysDropdown() {
     const [day, setDay] = useState<string>("metric");
  return (
 <div className=''>
        <DropdownMenu  >
      <DropdownMenuTrigger asChild>
        <Button className='bg-neutral-800 text-white border-none' variant="outline">
            
            Saturday
        
            </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">

        <DropdownMenuCheckboxItem
        checked={day === "metric"}
            onCheckedChange={() => setDay("metric")}
        >
          Matrics
        </DropdownMenuCheckboxItem>
    
        <DropdownMenuCheckboxItem
         checked={day === "imperial"}
            onCheckedChange={() => setDay("imperial")}
        >
          Imperial
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
