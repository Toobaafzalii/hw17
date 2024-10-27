export const CapitalBox: React.FC = () => {
  return (
    <div className=" px-4 pb-6">
      <div className=" w-full h-full flex flex-col justify-between items-center px-8 py-4 bg-gradient-to-t from-gray-700 rounded-md ">
        <div className="w-full bg-amber-900 border-2 border-amber-950 shadow-md rounded-xl text-xl font-semibold text-gray-300 text-center px-8 py-4">
          CAPITAL WEATHER REPORT
        </div>
        <div className="w-full h-[65px]"></div>
        <div className="w-full py-4 pt-9 px-4 space-y-1 text-xl text-gray-300 font-bold">
          <p>Wind Speed: ---</p>
          <p>Temperature: ---</p>
          <p>Humidity: ---</p>
          <p>Visibility: ---</p>
        </div>
      </div>
    </div>
  );
};
