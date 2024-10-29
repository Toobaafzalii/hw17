import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Container } from "./components/Container";
import { SearchBar } from "./components/searchBar";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient();
  const [selectedItem, setSelectedItem] = useState<IselectedItem>({
    geometry: {
      lat: "51.505",
      lng: "-6.09",
    },
    name: "",
    formatted: "",
  });

  const onLocationSelect = (selectedItem: IselectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full">
        <SearchBar onLocationSelect={onLocationSelect} />
        <Container item={selectedItem} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
