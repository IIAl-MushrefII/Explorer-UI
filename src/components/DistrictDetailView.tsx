import { useState } from "react";
import { DistrictHeader } from "./DistrictHeader";
import { KeyStats } from "./KeyStat";
import { ActionsBar } from "./ActionsBar";
import { ComparisonPanel, ComparisonDistrict } from "./ComparisonPanel";

interface District {
  id: string;
  name: string;
  county: string;
  state: string;
  fundingPerPupil: string;
  broadbandAccess: string;
  studentTeacherRatio: string;
  rank: string;
}

interface DistrictDetailViewProps {
  district: District;
}

export function DistrictDetailView({ district }: DistrictDetailViewProps) {
  const [pinnedDistricts, setPinnedDistricts] = useState<ComparisonDistrict[]>([
    {
      id: "1",
      name: "Chicago Public Schools",
      funding: "$12,000",
      broadband: "65%",
      rank: "12th",
    },
    {
      id: "2",
      name: "Springfield School District",
      funding: "$9,500",
      broadband: "78%",
      rank: "20th",
    },
  ]);

  const [isCurrentDistrictPinned, setIsCurrentDistrictPinned] = useState(
    pinnedDistricts.some((d) => d.id === district.id)
  );

  const handlePinForComparison = () => {
    if (isCurrentDistrictPinned) {
      // Unpin the current district
      setPinnedDistricts((prev) => prev.filter((d) => d.id !== district.id));
      setIsCurrentDistrictPinned(false);
    } else {
      // Pin the current district
      const newDistrict: ComparisonDistrict = {
        id: district.id,
        name: district.name,
        funding: district.fundingPerPupil,
        broadband: district.broadbandAccess,
        rank: district.rank,
      };
      setPinnedDistricts((prev) => [...prev, newDistrict]);
      setIsCurrentDistrictPinned(true);
    }
  };

  const handleSaveView = () => {
    console.log("Saving view for district:", district.name);
    // Here you would implement the save view functionality
  };

  const handleRemoveDistrict = (id: string) => {
    setPinnedDistricts((prev) => prev.filter((d) => d.id !== id));
    if (id === district.id) {
      setIsCurrentDistrictPinned(false);
    }
  };

  return (
    <div className="flex-1 bg-gray-50">
      <DistrictHeader
        district={district.name}
        county={district.county}
        state={district.state}
      />

      <KeyStats
        fundingPerPupil={district.fundingPerPupil}
        broadbandAccess={district.broadbandAccess}
        studentTeacherRatio={district.studentTeacherRatio}
      />

      <ActionsBar
        onPinForComparison={handlePinForComparison}
        onSaveView={handleSaveView}
        isPinned={isCurrentDistrictPinned}
      />

      <ComparisonPanel
        districts={pinnedDistricts}
        onRemoveDistrict={handleRemoveDistrict}
      />
    </div>
  );
}
