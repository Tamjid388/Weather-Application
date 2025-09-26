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
import { useWeatherContext } from '@/providers/WeatherContextProvider'

type Checked = DropdownMenuCheckboxItemProps["checked"]
export default function Dropdown() {
    // const [unit, setUnit] = useState<"metric" | "imperial">("metric");
      const { city, setCurrentCity, unit,setSelectedUnit} = useWeatherContext();
  return (
    <div>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
            <Settings />
            Units
            <ChevronDown />
            </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}
        <DropdownMenuCheckboxItem
        checked={unit === "metric"}
            onCheckedChange={() => setSelectedUnit("metric")}
        >
          Matrics
        </DropdownMenuCheckboxItem>
        {/* <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem> */}
        <DropdownMenuCheckboxItem
         checked={unit === "imperial"}
            onCheckedChange={() => setSelectedUnit("imperial")}
        >
          Imperial
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
