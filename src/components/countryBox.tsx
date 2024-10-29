export const CountryBox: React.FC<IcountryBoxProps> = (props) => {
  return (
    <div className="px-4 pb-6">
      <div className=" w-full h-full flex flex-col justify-between items-center px-8 py-4 bg-gradient-to-t from-gray-700 rounded-md ">
        <div className="w-full bg-cyan-900 border-2 border-cyan-950 shadow-md rounded-xl text-xl font-semibold text-gray-300 text-center px-8 py-4">
          RELATED COUNTRY
        </div>
        <div
          className={
            props.country
              ? "w-full py-4 pt-9 px-4 space-y-1 text-xl text-amber-300 font-bold"
              : "w-full py-4 pt-9 px-4 space-y-1 text-xl text-gray-300 font-bold"
          }
        >
          <p>
            Official Name:{" "}
            <span className="text-gray-200">
              {props.country?.name?.official ?? " ---"}
            </span>
          </p>
          <p>
            Capital:{" "}
            <span className="text-gray-200">
              {props.country?.capital ?? " ---"}
            </span>
          </p>
          <p>
            Region:{" "}
            <span className="text-gray-200">
              {props.country?.region ?? " ---"}
            </span>
          </p>
          <p>
            Populiation:{" "}
            <span className="text-gray-200">
              {props.country?.population ?? " ---"}
            </span>
          </p>
          <p>
            Languages:{" "}
            <span className="text-gray-200">
              {Object.values(props?.country?.languages ?? {}).map(
                (item) => ` ${item}`
              ) ?? " ---"}
            </span>
          </p>
          <p>
            Time Zone:{" "}
            <span className="text-gray-200">
              {props.country?.timezones?.[0] ?? " ---"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
