import axios from "axios"

export function getWeather(city: string): void {
  const url = `https://api.api-ninjas.com/v1/weather?city=${city}`
  axios.get(url, {
    headers: {
      'X-Api-Key': '7utyQFW3vlf0UMOaSzL1fQ==T552j4B9VArP1QLN'
    }
  }).then(response => {
    console.log(response.data)
  }).catch(error => {
    console.log(error)
  })
}