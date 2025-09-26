import React, { useState } from "react";
import DaysDropdown from "../DropDown/DaysDropdown";
import { useWeatherContext } from "@/providers/WeatherContextProvider";
import { useForecast } from "@/hooks/useForecast";

export default function HourlyForecast() {
  const { city, unit } = useWeatherContext();
  const { data: forecastData } = useForecast(city, unit);
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDay());
    // Filter forecast data for the selected day
  const filteredList = forecastData?.list.filter((item) => {
    const itemDate = new Date(item.dt * 1000);
    return itemDate.getDay() === selectedDay;
  });
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-white font-semibold text-xl">Hourly Forecast</h1>
    <DaysDropdown selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      </div>
      <div>
        {city && (
          <>
            {/* Example forecast rendering */}
            <div className="mt-8 text-white">

              <div className="grid grid-cols-1  gap-4">
                {filteredList?.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#302F4A] p-4 rounded-lg text-center flex
                    items-center justify-between border border-[#3C3B5E]
                    "
                  >
                    <div className="flex   items-center">
                      <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt="icon"
                        className="w-10 h-10"
                      />

                      <p className="text-xl font-medium">
                        {new Date(item.dt * 1000).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                        })}
                      </p>
                    </div>

                    <p className="text-lg font-medium">{item.main.temp}°</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
