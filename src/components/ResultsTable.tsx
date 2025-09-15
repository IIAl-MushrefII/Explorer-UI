import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface DistrictData {
  id: string;
  name: string;
  funding: string;
  broadband: string;
  demographics: string;
}

const sampleData: DistrictData[] = [
  {
    id: "1",
    name: "Chicago Public Schools",
    funding: "$12,000",
    broadband: "65%",
    demographics: "Urban",
  },
  {
    id: "2",
    name: "Springfield School District",
    funding: "$9,500",
    broadband: "78%",
    demographics: "Suburban",
  },
  {
    id: "3",
    name: "Aurora West USD 129",
    funding: "$11,200",
    broadband: "72%",
    demographics: "Suburban",
  },
  {
    id: "4",
    name: "Rockford School District",
    funding: "$8,800",
    broadband: "58%",
    demographics: "Urban",
  },
  {
    id: "5",
    name: "Naperville CUSD 203",
    funding: "$15,600",
    broadband: "95%",
    demographics: "Suburban",
  },
  {
    id: "6",
    name: "Peoria USD 150",
    funding: "$10,100",
    broadband: "69%",
    demographics: "Urban",
  },
  {
    id: "7",
    name: "Evanston Township HSD",
    funding: "$18,200",
    broadband: "92%",
    demographics: "Suburban",
  },
  {
    id: "8",
    name: "Decatur School District",
    funding: "$9,200",
    broadband: "61%",
    demographics: "Urban",
  },
];

export function ResultsTable() {
  const navigate = useNavigate();

  const handleRowClick = (district: DistrictData) => {
    navigate(`/district/${district.id}`);
    // Here you would typically navigate to a detailed view
  };

  return (
    <div className="px-6 py-4 flex-1">
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>District Name</TableHead>
              <TableHead>Funding per Student</TableHead>
              <TableHead>Broadband Access</TableHead>
              <TableHead>Demographics</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((district) => (
              <TableRow
                key={district.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => handleRowClick(district)}
              >
                <TableCell>{district.name}</TableCell>
                <TableCell>{district.funding}</TableCell>
                <TableCell>{district.broadband}</TableCell>
                <TableCell>{district.demographics}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
