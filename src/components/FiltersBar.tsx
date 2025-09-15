import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export function FiltersBar() {
  return (
    <div className="px-6 py-4 border-b bg-white">
      <div className="flex space-x-4">
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Funding" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Funding Levels</SelectItem>
            <SelectItem value="high">High ($15,000+)</SelectItem>
            <SelectItem value="medium">Medium ($10,000-$15,000)</SelectItem>
            <SelectItem value="low">Low (Under $10,000)</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Broadband" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Broadband Levels</SelectItem>
            <SelectItem value="high">High (80%+)</SelectItem>
            <SelectItem value="medium">Medium (60%-80%)</SelectItem>
            <SelectItem value="low">Low (Under 60%)</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Demographics" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Demographics</SelectItem>
            <SelectItem value="urban">Urban</SelectItem>
            <SelectItem value="suburban">Suburban</SelectItem>
            <SelectItem value="rural">Rural</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}