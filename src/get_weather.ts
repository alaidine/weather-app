import axios from "axios"

export async function getWeather(city: string): Promise<any> {
  const url = `https://api.api-ninjas.com/v1/weather?city=${city}`

  const res = await axios.get(url, { headers: { 'X-Api-Key': '7utyQFW3vlf0UMOaSzL1fQ==T552j4B9VArP1QLN' } })
  .then(response => {
    return response.data
  })
  .catch(error => {
    console.log(error)
  })

  return res
}