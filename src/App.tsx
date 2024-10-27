import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Container } from "./components/Container";
import { SearchBar } from "./components/searchBar";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient();
  const [selectedItem, setSelectedItem] = useState<IselectedItem>({
    geometry: {
      lat: "",
      lng: "",
    },
    name: "",
  });

  const onLocationSelect = (selectedItem: IselectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SearchBar onLocationSelect={onLocationSelect} />
      <Container item={selectedItem} />
    </QueryClientProvider>
  );
}

export default App;
