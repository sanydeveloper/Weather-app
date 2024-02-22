import "./Current-Weather.css";

const CurrentWeather = ({data}) => {

  let weatherbackground = () => {
    if(data.weather[0].description == 'overcast clouds') {
      document.body.style.background = "img\white-cloud-blue-sky_74190-2381.avif";
    }
  }
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
          {weatherbackground()}
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>

      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}&deg;C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}&deg;C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humadity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;