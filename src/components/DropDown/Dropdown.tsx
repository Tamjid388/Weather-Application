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

type Checked = DropdownMenuCheckboxItemProps["checked"]
export default function Dropdown() {
    const [unit, setUnit] = useState<"metric" | "imperial">("metric");
     const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
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
            onCheckedChange={() => setUnit("metric")}
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
            onCheckedChange={() => setUnit("imperial")}
        >
          Imperial
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
