import axiosInstance from '@/axiosInstance/axiosInstance';
import React from 'react'
export interface Tforecast {
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
    rain?: { "3h": number };
  }[];
  city: {
    name: string;
    country: string;
  };
}

export const forecast = async ({ city, unit }: { city: string; unit: "metric" | "imperial" }) => {
  const res = await axiosInstance.get<Tforecast>("/forecast", {
    params: {
      q: city,
      appid: process.env.NEXT_PUBLIC_API_KEY,
      units: unit,
    },
  });
  return res.data;
};