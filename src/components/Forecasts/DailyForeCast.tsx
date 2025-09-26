import { useForecast } from "@/hooks/useForecast";
import { useWeatherContext } from "@/providers/WeatherContextProvider";
import { Tforecast } from "@/services/forecast";
import React from "react";
interface ForecastItem {
  dt_txt: string; 
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

function groupByDay(list:ForecastItem[]) {
  const days: Record<string, ForecastItem[]> = {};
  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0]; // "2025-09-26"
    if (!days[date]) days[date] = [];
    days[date].push(item);
  });
  return Object.entries(days).map(([date, items]) => {
    const temps = items.map((i) => i.main.temp);
    const icons = items.map((i) => i.weather[0].icon);
    return {
      date,
      min: Math.min(...temps).toFixed(1),
      max: Math.max(...temps).toFixed(1),
      icon: icons[0], 
    };
  });
}

export default function DailyForeCast() {
  const { city, unit } = useWeatherContext();
  const { data: forecastData } = useForecast(city, unit);

  if (!forecastData) return <p className="text-white mt-4">Loading...</p>;
const dailyData = groupByDay(forecastData.list as unknown as ForecastItem[]);

  console.log(dailyData);

  return (
    <div className="mt-12">
      <h1 className="font-semibold text-xl text-white">Daily Forecast</h1>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-4">
        {dailyData.map((day) => (
          <div
            key={day.date}
            className="bg-[#3C3B5E] p-4 rounded-lg flex flex-col items-center"
          >
            <p className="text-sm text-white">
              {" "}
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt="weather icon"
              className="w-15 h-15"
            />
            <div className="mt-2 text-sm text-white 
            flex justify-between gap-2 sm:gap-6">
              <p>
                 {day.max}°
              </p>
              <p>
                {day.min}° 
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
