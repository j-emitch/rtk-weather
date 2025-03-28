"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCity } from "./store/slices/cities";
import CityWeather from "./components/CityWeather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const cities = useSelector((state) => state.cities.cities);
  const dispatch = useDispatch();
  const [newCity, setNewCity] = useState("");

const handleAddCity = () => {
  if (!cities.some((city) => city.name.toLowerCase() === newCity.toLowerCase())) {
    dispatch(addCity(newCity));
  }
  setNewCity("");
};

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Weather Forecast</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          placeholder="Add a city"
          className="form-control"
        />
        <button onClick={handleAddCity} className="btn btn-primary">
          Submit
        </button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center col-1" scope="col">
                City
              </th>
              <th className="text-center col-3" scope="col">
                Temp
              </th>
              <th className="text-center col-3" scope="col">
                Pressure
              </th>
              <th className="text-center col-3" scope="col">
                Humidity
              </th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city, index) => (
              <CityWeather key={index} city={city} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
