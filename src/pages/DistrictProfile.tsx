import { Header } from "../components/Header";
import { DistrictDetailView } from "../components/DistrictDetailView";

const sampleDistrict = {
  id: "1",
  name: "Chicago Public Schools",
  county: "Cook",
  state: "Illinois",
  fundingPerPupil: "$12,000",
  broadbandAccess: "65%",
  studentTeacherRatio: "18:1",
  rank: "12th",
};

export default function DistrictProfile() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <DistrictDetailView district={sampleDistrict} />
    </div>
  );
}
