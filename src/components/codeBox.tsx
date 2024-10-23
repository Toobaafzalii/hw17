export const CodeBox: React.FC = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col justify-between items-center px-8 py-4 bg-gradient-to-t from-gray-700 rounded-md ">
        <div className="w-full bg-amber-900 border-2 border-amber-950 shadow-md rounded-xl text-xl font-semibold text-gray-300 text-center px-8 py-4">
          CALLING CODE
        </div>
        <div className="py-24 px-8 text-5xl text-gray-300 font-bold text-center">
          {" "}
          _ _ _{" "}
        </div>
      </div>
      <p className=" text-amber-900 text-lg font-semibold pt-4 text-center px-2 text-nowrap">
        ---------------------
      </p>
    </div>
  );
};
