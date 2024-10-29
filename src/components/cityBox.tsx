export const CityBox: React.FC<IweatherBoxProps> = (props) => {
  return (
    <div className=" px-4 pb-6">
      <div className=" w-full h-full flex flex-col justify-between items-center px-8 py-4 bg-gradient-to-t from-gray-700 rounded-md ">
        <div className="w-full bg-cyan-900 border-2 border-cyan-950 shadow-md rounded-xl text-xl font-semibold text-gray-300 text-center px-8 py-4">
          CITY WEATHER REPORT
        </div>
        <div className="w-full h-[65px]">
          {props.weatherData && (
            <img
              className="w-[28%] md:w-[28%] sm:w-[24%] flex self-center mx-auto my-auto"
              src={`https://openweathermap.org/img/w${props.weatherData?.weather[0].icon[2]}/${props.weatherData?.weather[0].icon}.png`}
              alt="weather-icon"
            />
          )}
        </div>
        <div
          className={
            props.weatherData
              ? "w-full py-4 pt-9 px-4 space-y-1 text-xl text-amber-300 font-bold"
              : "w-full py-4 pt-9 px-4 space-y-1 text-xl text-gray-300 font-bold"
          }
        >
          <p>
            City Name:{" "}
            <span className="text-gray-200">
              {props.weatherData?.name ?? " ---"}
            </span>
          </p>
          <p>
            Wind Speed:{" "}
            <span className="text-gray-200">
              {props.weatherData?.wind.speed
                ? `${props.weatherData.wind.speed} m/s`
                : "---"}
            </span>
          </p>
          <p>
            Temperature:{" "}
            <span className="text-gray-200">
              {props.weatherData?.main.temp
                ? `${props.weatherData.main.temp} F`
                : "---"}
            </span>
          </p>
          <p>
            Humidity:{" "}
            <span className="text-gray-200">
              {props.weatherData?.main.humidity
                ? `${props.weatherData.main.humidity}%`
                : "---"}
            </span>
          </p>
          <p>
            Visibility:{" "}
            <span className="text-gray-200">
              {props.weatherData?.visibility
                ? `${props.weatherData.visibility} m`
                : "---"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
