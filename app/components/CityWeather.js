import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import "bootstrap/dist/css/bootstrap.min.css";

const CityWeather = ({ city }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">{city.name}</h2>
        <div className="row">
          <div className="col-md-4">
            <h5>Temperature</h5>
            <Sparklines data={city.temp}>
              <SparklinesLine color="orange" />
              <SparklinesSpots />
            </Sparklines>
            <p>{city.temp} &deg;F</p>
          </div>
          <div className="col-md-4">
            <h5>Pressure</h5>
            <Sparklines data={city.pressure}>
              <SparklinesLine color="green" />
              <SparklinesSpots />
            </Sparklines>
            <p>{city.pressure} hPa</p>
          </div>
          <div className="col-md-4">
            <h5>Humidity</h5>
            <Sparklines data={city.humidity}>
              <SparklinesLine color="gray" />
              <SparklinesSpots />
            </Sparklines>
            <p>{city.humidity} %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
