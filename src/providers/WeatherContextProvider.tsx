"use client";

import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type TContext = {
  city: string | null;
  setCurrentCity: (city: string | null) => void;
  unit: "metric" | "imperial";
  setSelectedUnit: (unit: "metric" | "imperial") => void;
};
const WeatherContext = createContext<TContext | undefined>(undefined);

export default function WeatherContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [city, setCurrentCity] = useState<string | null>(null);
  const [unit, setSelectedUnit] = useState<"metric" | "imperial">("metric");
  return (
    <WeatherContext.Provider
      value={{ city, setCurrentCity, unit, setSelectedUnit }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("context error");
  return context;
};
