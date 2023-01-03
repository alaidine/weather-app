<script lang="ts">
  let city: any
  import { getWeather } from "./get_weather"
</script>

<main>
  <div class="container">
    <div>
      <h3>this is where the weather will be rendered</h3>
    </div>

    <div class="other_container">
      <form>
        <label>
          <input bind:value={city} placeholder="write the name of a city...">
        </label>
      </form>
      <button on:click={() => {
        getWeather(city)
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
