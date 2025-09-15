interface DistrictHeaderProps {
  district: string;
  county: string;
  state: string;
}

export function DistrictHeader({
  district,
  county,
  state,
}: DistrictHeaderProps) {
  return (
    <div className="px-6 py-4 bg-white border-b">
      <h1 className="text-2xl mb-3">District: {district}</h1>
      <div className="flex space-x-8 text-muted-foreground">
        <span>County: {county}</span>
        <span>State: {state}</span>
      </div>
    </div>
  );
}
