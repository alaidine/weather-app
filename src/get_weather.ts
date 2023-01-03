import axios from "axios"

interface Weather {
  temperature: number;
  windSpeed: number;
  humidity: number;
}

export function getWeather(city: string) {
  const url = `https://api.api-ninjas.com/v1/weather?city=${city}`

  const res = axios.get(url, { headers: { 'X-Api-Key': '7utyQFW3vlf0UMOaSzL1fQ==T552j4B9VArP1QLN' } })
  .then(response => {
    return response.data
  })
  .catch(error => {
    console.log(error)
  })

  console.log(res)
}