"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import EmptyProgess from "../Progress/EmptyProgess";
import { useCurrentWeather } from "@/hooks/useCurrentWeather";

export default function MainContainer() {
  const [city, setCurrentCity] = useState<string | null>(null);
  const [unit, setSelectedUnit] = useState<"unit" | "metric">("metric");
  const { data, isLoading, isError } = useCurrentWeather(city, unit);
  console.log(city);
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-white text-4xl text-center">
          {"How's the sky looking"}
        </h1>
        <SearchBar onSearch={(value: string) => setCurrentCity(value)} />
        <EmptyProgess />
      </div>
    </div>
  );
}
