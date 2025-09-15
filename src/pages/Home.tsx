import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { FiltersBar } from "../components/FiltersBar";
import { ResultsTable } from "../components/ResultsTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <SearchBar />
      <FiltersBar />
      <ResultsTable />
    </div>
  );
}
