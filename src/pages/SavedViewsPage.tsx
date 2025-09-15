import { Header } from "../components/Header";
import { SavedViews } from "../components/SavedViews";

export default function SavedViewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <SavedViews />
    </div>
  );
}
