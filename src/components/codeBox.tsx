export const CodeBox: React.FC<IcountryBoxProps> = (props) => {
  const joinedCodeArray = props.country?.idd.suffixes.join(",");
  const callingCode = props.country?.idd.root + "" + joinedCodeArray;

  return (
    <div className="px-4 pb-6">
      <div className="w-full h-full flex flex-col justify-between items-center px-8 py-4 bg-gradient-to-t from-gray-700 rounded-md ">
        <div className="w-full bg-cyan-900 border-2 border-cyan-950 shadow-md rounded-xl text-xl font-semibold text-gray-300 text-center px-8 py-4">
          CALLING CODE
        </div>
        <div className="py-24 px-8 text-5xl text-gray-300 font-bold text-center">
          <p>{props.country?.idd.root ? callingCode : "_ _ _"}</p>
        </div>
      </div>
    </div>
  );
};
