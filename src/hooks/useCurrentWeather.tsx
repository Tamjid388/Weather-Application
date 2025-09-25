"use client"

import { getCurrentWeather } from "@/services/currentWeather"
import { WeatherResponse } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"

export const useCurrentWeather = (city: string | null, unit: "metric" | "imperial") => {
  return useQuery<WeatherResponse, Error>({
    queryKey: ['weather', city, unit],
    queryFn: () => {
      if (!city) throw new Error("No city provided")
      return getCurrentWeather({ city, unit })
    },
    enabled: !!city, 
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false
  })
}