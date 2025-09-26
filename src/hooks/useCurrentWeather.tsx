"use client"

import { getCurrentWeather } from "@/services/currentWeather"
import { WeatherResponse } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useCurrentWeather = (city: string | null, unit: "metric" | "imperial") => {
  return useQuery<WeatherResponse, Error>({
    queryKey: ['weather', city, unit],
    // queryFn: () => {
    //   if (!city) throw new Error("No city provided")
    //   return getCurrentWeather({ city, unit })
    // },
       queryFn: async () => {
      if (!city) throw new Error("No city provided");

      try {
        const data = await getCurrentWeather({ city, unit });

        if (data.cod === "404") {
          throw new Error("City not found");
        }

        return data;
      } catch (err) {
      
        if (axios.isAxiosError(err)) {
          throw new Error(err.response?.data?.message || "API request failed");
        }
        throw err;
      }
    },
    enabled: !!city, 
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false
  })
}