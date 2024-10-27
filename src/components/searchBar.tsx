import React, { useEffect } from "react";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useMutation } from "react-query";
import { fetchLocations } from "../api/location.api";

export const SearchBar: React.FC<IsearchBarProps> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 1000);
  const [searchResult, setSearchResult] = useState<Ilocation[] | undefined>([]);

  const locations = useMutation({
    mutationKey: ["locations"],
    mutationFn: (value: string) => fetchLocations(value),
  });

  useEffect(() => {
    locations.mutate(debouncedValue, {
      onSuccess(data) {
        setSearchResult(data.results);
      },
    });
  }, [debouncedValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const onResultClick = (selectedItem: IselectedItem) => {
    props.onLocationSelect(selectedItem);
    setSearchResult(undefined);
  };

  return (
    <div
      id="searchbar"
      className=" w-full grid col-span-3 pt-10 pb-14 px-40 gap-y-4  bg-gradient-to-b from-cyan-900 rounded-b-3xl"
    >
      <h1 className="text-5xl font-bold text-gray-300 justify-self-center">
        Weather
      </h1>
      <input
        type="text"
        className="relative bg-gray-300 self-center p-4 text-xl font-medium min-w-72 rounded-xl text-gray-700 placeholder-gray-500"
        placeholder="Search for a country or city"
        value={inputValue}
        onChange={handleInputChange}
      />

      {searchResult && (
        <div className="relative -top-[14px]">
          <div className="absolute top-0 w-full z-10 bg-gray-200 min-w-72 flex flex-col justify-start items-start gap-2 rounded-lg">
            {searchResult.map((item) => (
              <div
                key={item.formatted}
                onClick={() => {
                  onResultClick({
                    geometry: item.geometry,
                    name: item.name,
                    formatted: item.formatted,
                  });
                }}
                className="w-full py-3 px-4 text-lg text-gray-600 font-medium hover:bg-gray-300 hover:cursor-pointer rounded-lg"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
