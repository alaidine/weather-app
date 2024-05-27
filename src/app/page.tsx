"use client";

import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Weather App</h1>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="p-6 bg-card rounded-lg">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full bg-primary-500/10"></div>
                <div className="text-lg font-bold">{data.weather[0].main}</div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full bg-secondary-500/10"></div>
                <div className="text-lg font-bold">
                  {data.weather[0].description}
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full bg-accent-500/10"></div>
                <div className="text-lg font-bold">{data.main.temp}</div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="w-full max-w-md p-6 bg-primary-500 rounded-lg text-white"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Get Weather
        </button>
      </div>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </main>
  );
}
