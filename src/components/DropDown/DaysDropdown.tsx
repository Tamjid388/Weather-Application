"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

interface DaysDropdownProps {
  selectedDay: number;
  setSelectedDay: (day: number) => void;
}

export default function DaysDropdown({ selectedDay, setSelectedDay }: DaysDropdownProps) {
  
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="toggle">{weekDays[selectedDay]}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {weekDays.map((day, index) => (
          <DropdownMenuCheckboxItem
            key={day}
            checked={selectedDay === index}
            onCheckedChange={() => setSelectedDay(index)}
          >
            {day}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
