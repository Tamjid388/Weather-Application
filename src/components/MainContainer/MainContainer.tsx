"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import EmptyProgess from "../Progress/EmptyProgess";
import { useCurrentWeather } from "@/hooks/useCurrentWeather";
import axios from "axios";
import DisplayWeatherData from "../displayWeatherData/DisplayWeatherData";
import Image from "next/image";
import { useWeatherContext } from "@/providers/WeatherContextProvider";
import Notfound from "../NotFound/Notfound";
import Skillton from "../Skiltons/Skillton";



export default function MainContainer() {
 
   const { city, setCurrentCity, unit} 
   = useWeatherContext();
  
  
  const { data:weatherdata, isPending, isError,error } = useCurrentWeather(city, unit);
 
 console.log(weatherdata);

   if (isError && axios.isAxiosError(error)) {
  console.log(error.response?.data.message); 
  console.log(error.message);
  
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
