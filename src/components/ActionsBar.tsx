import { Button } from "./ui/button";
import { Pin, Bookmark } from "lucide-react";

interface ActionsBarProps {
  onPinForComparison: () => void;
  onSaveView: () => void;
  isPinned?: boolean;
}

export function ActionsBar({
  onPinForComparison,
  onSaveView,
  isPinned = false,
}: ActionsBarProps) {
  return (
    <div className="px-6 py-4 bg-white border-b">
      <div className="flex space-x-4">
        <Button
          onClick={onPinForComparison}
          variant={isPinned ? "default" : "outline"}
          className="flex items-center space-x-2"
        >
          <Pin className="h-4 w-4" />
          <span>
            {isPinned ? "Pinned for Comparison" : "Pin for Comparison"}
          </span>
        </Button>

        <Button
          onClick={onSaveView}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <Bookmark className="h-4 w-4" />
          <span>Save View</span>
        </Button>
      </div>
    </div>
  );
}
