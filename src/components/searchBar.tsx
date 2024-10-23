import React from "react";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 1000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  if (debouncedValue.length > 0) console.log(debouncedValue);

  return (
    <div
      id="searchbar"
      className="w-full grid col-span-3 pt-10 pb-14 px-40 gap-y-4  bg-gradient-to-b from-amber-900 rounded-b-3xl"
    >
      <h1 className="text-5xl font-bold text-gray-300 justify-self-center">
        Weather
      </h1>
      <input
        type="text"
        className="bg-gray-300 self-center p-4 text-xl font-medium min-w-72 rounded-xl text-gray-700 placeholder-gray-500"
        placeholder="Search for a country or city"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
