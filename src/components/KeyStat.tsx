import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface KeyStatsProps {
  fundingPerPupil: string;
  broadbandAccess: string;
  studentTeacherRatio: string;
}

export function KeyStats({
  fundingPerPupil,
  broadbandAccess,
  studentTeacherRatio,
}: KeyStatsProps) {
  return (
    <div className="px-6 py-6 bg-white border-b">
      <h2 className="text-lg mb-4">Key Stats:</h2>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
          <span>Funding per pupil: {fundingPerPupil}</span>
        </li>
        <li className="flex items-center">
          <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
          <span>Broadband access: {broadbandAccess}</span>
        </li>
        <li className="flex items-center">
          <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
          <span>Student-Teacher Ratio: {studentTeacherRatio}</span>
        </li>
      </ul>
    </div>
  );
}
