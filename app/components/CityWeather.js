import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import "bootstrap/dist/css/bootstrap.min.css";

const CityWeather = ({ city }) => {
  return (
      <tr>
        <td>
          <h5>{city.name}</h5>
        </td>
        <td>
          <Sparklines data={city.temp}>
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <p>{city.avgTemp} &deg;F</p>
        </td>
        <td>
          <Sparklines data={city.pressure}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <p>{city.avgPressure} hPa</p>
        </td>
        <td>
          <Sparklines data={city.humidity}>
            <SparklinesLine color="gray" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <p>{city.avgHumidity} %</p>
        </td>
      </tr>
  );
};

export default CityWeather;
