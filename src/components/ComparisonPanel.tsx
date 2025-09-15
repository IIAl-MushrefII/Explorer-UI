import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export interface ComparisonDistrict {
  id: string;
  name: string;
  funding: string;
  broadband: string;
  rank: string;
}

interface ComparisonPanelProps {
  districts: ComparisonDistrict[];
  onRemoveDistrict: (id: string) => void;
}

export function ComparisonPanel({
  districts,
  onRemoveDistrict,
}: ComparisonPanelProps) {
  if (districts.length < 2) {
    return null;
  }

  return (
    <div className="px-6 py-6 bg-white border-b">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg">
          Comparison Panel ({districts.length} districts pinned):
        </h2>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>District</TableHead>
              <TableHead>Funding per Student</TableHead>
              <TableHead>Broadband Access</TableHead>
              <TableHead>State Rank</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {districts.map((district) => (
              <TableRow key={district.id}>
                <TableCell>{district.name}</TableCell>
                <TableCell>{district.funding}</TableCell>
                <TableCell>{district.broadband}</TableCell>
                <TableCell>{district.rank}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveDistrict(district.id)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
