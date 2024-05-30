"use client";

import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {children}
    </h1>
  );
}

function WeatherInfo({ data }: { data: any }) {
  if (data.cod == 404) return <div>Location not found</div>;
  return (
    <div className="w-full max-w-5xl">
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {data.name}
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {data.weather[0].description}
        </div>
        <div className="mt-2 text-sm text-gray-500">{data.main.temp} °C</div>
        <div className="mt-2 text-sm text-gray-500">
          Wind: {data.wind.speed} m/s
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Humidity: {data.main.humidity}%
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [value, setValue] = useState<string>("London");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value},uk&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, [value]);

  if (!data) return <div>Loading...</div>;

  return (
    <main className="h-screen flex flex-col items-center w-full">
      <div className="flex flex-col items-center justify-center w-full p-5 border-b border-gray-200">
        <Title>Weather App</Title>
      </div>
      <div className="flex flex-row items-center justify-center w-2/3 max-w-5xl">
        <div className="flex flex-col items-center justify-center w-full">
          <Select onValueChange={setValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="London">London</SelectItem>
              <SelectItem value="Glasgow">Glasgow</SelectItem>
              <SelectItem value="Birmingham">Birmingham</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <WeatherInfo data={data} />
      </div>
    </main>
  );
}
