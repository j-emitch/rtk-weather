import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "1d224a4af2354cde18df2f7243cc84f4";

export const addCity = createAsyncThunk(
  "city/fetchCityWeather",
  async (cityName) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    return {
      name: cityName,
      temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
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
