import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "1d224a4af2354cde18df2f7243cc84f4";

export const addCity = createAsyncThunk(
  "city/fetchCityWeather",
  async (cityName) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`
    );
    const data = await response.json();
    console.log(data);
    
    const avgTemp =
      Math.round(data.list.reduce(
        (acc, threeHour) => acc + threeHour.main.temp,
        0
    ) / data.list.length);
        
    const avgHumidity =
      Math.round(data.list.reduce(
        (acc, threeHour) => acc + threeHour.main.humidity,
        0
    ) / data.list.length);
          
    const avgPressure =
      Math.round(data.list.reduce(
        (acc, threeHour) => acc + threeHour.main.pressure,
        0
      ) / data.list.length);

    return {
      name: data.city.name,
      temp: data.list.map((threeHour) => threeHour.main.temp),
      pressure: data.list.map((threeHour) => threeHour.main.pressure),
      humidity: data.list.map((threeHour) => threeHour.main.humidity),
      avgTemp: avgTemp,
      avgHumidity: avgHumidity,
      avgPressure: avgPressure,
    };
  }
);

const citySlice = createSlice({
  name: "city",
  initialState: {
    cities: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCity.fulfilled, (state, action) => {
        state.status = "fulfilled";
        console.log(action.payload);
        state.cities.push(action.payload);
      })
      .addCase(addCity.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default citySlice.reducer;
