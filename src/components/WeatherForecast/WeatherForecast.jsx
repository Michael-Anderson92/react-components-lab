import './WeatherForecast.css';

const WeatherForecastComponent = (props) => {
  const { weatherForecast } = props;
  return (
    <div className="weather">
      <h2>Hello, today is {weatherForecast.day}</h2>
      <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
      <p><span>Conditions: </span>{weatherForecast.conditions}</p>
      <p><span>Time: </span>{weatherForecast.time}</p>
    </div>
  );
};

export default WeatherForecastComponent;
