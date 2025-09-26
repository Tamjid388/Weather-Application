"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import EmptyProgess from "../Progress/EmptyProgess";
import { useCurrentWeather } from "@/hooks/useCurrentWeather";
import axios from "axios";
import DisplayWeatherData from "../displayWeatherData/DisplayWeatherData";
import Image from "next/image";



export default function MainContainer() {
  const [city, setCurrentCity] = useState<string | null>(null);
  const [unit, setSelectedUnit] = useState<"metric" | "imperial">("metric");
  
  const { data:weatherdata, isLoading, isError,error } = useCurrentWeather(city, unit);
  console.log("current weather data",weatherdata);
  console.log(city);

   if (isError && axios.isAxiosError(error)) {
  console.log(error.response?.data.message); // "city not found"
}
if(isLoading){
    return <h1 className="text-5xl text-white">Loading</h1>
}
  
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-white text-4xl text-center">
          {"How's the sky looking"}
        </h1>
        <SearchBar onSearch={(value: string) => setCurrentCity(value)} />
       
       {
        city===null &&   <EmptyProgess />
       }
       {
        city &&   <DisplayWeatherData weatherdata={weatherdata}/>
       }
    
    
      </div>
    </div>
  );
}
