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
    <main className="h-screen">
      <div className="flex flex-col items-center justify-center p-5">
        <Title>Weather App</Title>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-5xl">
          <Select onValueChange={setValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="London">Lodon</SelectItem>
              <SelectItem value="Paris">Paris</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-5xl">
          <div>{data.name}</div>
        </div>
      </div>
    </main>
  );
}
