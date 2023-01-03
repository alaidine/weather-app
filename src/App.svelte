<script lang="ts">
  let city: any = ""
  import { getWeather } from "./get_weather"

  let temp: string = ""
  let humidity: string = ""
  let wind_speed: string = ""

  async function updateWeather(): Promise<void> {
    let weather = await getWeather(city)

    temp = weather.temp
    humidity = weather.humidity
    wind_speed = weather.wind_speed

    console.log(weather)
    console.log([temp, humidity, wind_speed])
  }
</script>

<main>
  <div class="container">
    <div>
      <h3>
        <form>
          city: {city}
        </form>
      </h3>
      <h3>
        temperature: {temp}
      </h3>
      <h3>
        <form>
          wind speed: {wind_speed}
        </form>
      </h3>
      <h3>
        <form>
          humidity: {humidity}
        </form>
      </h3>
    </div>

    <div class="other_container">
      <form>
        <label>
          <input bind:value={city} placeholder="write the name of a city...">
        </label>
      </form>
      <button on:click={() => {
        updateWeather()
      }}>get weather</button>
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px; 
    width: 400px; 
  }

  .other_container {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
</style>
