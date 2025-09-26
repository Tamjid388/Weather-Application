"use client";

import { forecast, Tforecast } from "@/services/forecast";
import { useQuery } from "@tanstack/react-query";


export const useForecast = (city: string | null, unit: "metric" | "imperial") => {
  return useQuery<Tforecast, Error>({
    queryKey: ["forecast", city, unit],
    queryFn: () => {
      if (!city) throw new Error("No city provided");
      return forecast({ city, unit });
    },
    enabled: !!city, 
    staleTime: 60 * 1000, 
    refetchOnWindowFocus: false,
  });
};
