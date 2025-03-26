import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import "bootstrap/dist/css/bootstrap.min.css";

const CityWeather = ({ city }) => {
  return (
    <tr>
      <td>
        <h5 className="align-middle text-center">{city.name}</h5>
      </td>
      <td >
        <Sparklines data={city.temp}>
          <SparklinesLine color="orange" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className="text-center">{city.avgTemp} &deg;F</p>
      </td>
      <td>
        <Sparklines data={city.pressure}>
          <SparklinesLine color="green" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className="text-center">{city.avgPressure} hPa</p>
      </td>
      <td>
        <Sparklines data={city.humidity}>
          <SparklinesLine color="gray" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className="text-center">{city.avgHumidity} %</p>
      </td>
    </tr>
  );
};

export default CityWeather;
