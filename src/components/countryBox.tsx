export const CountryBox: React.FC = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col justify-between items-center px-8 py-4 bg-gradient-to-t from-gray-700 rounded-md ">
        <div className="w-full bg-amber-900 border-2 border-amber-950 shadow-md rounded-xl text-xl font-semibold text-gray-300 text-center px-8 py-4">
          COUNTRY NAME
        </div>
        <div className="w-full py-4 pt-9 px-4 space-y-1 text-xl text-gray-300 font-bold">
          <p>Native Name: ---</p>
          <p>Capital: ---</p>
          <p>Region: ---</p>
          <p>Populiation: ---</p>
          <p>Languages: ---</p>
          <p>Time Zone: ---</p>
        </div>
      </div>
    </div>
  );
};
