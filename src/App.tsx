import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DistrictProfile from "./pages/DistrictProfile";
import SavedViewsPage from "./pages/SavedViewsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/district/:id" element={<DistrictProfile />} />
      <Route path="/saved" element={<SavedViewsPage />} />
    </Routes>
  );
}
