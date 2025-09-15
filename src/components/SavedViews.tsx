import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Eye, Edit3, Bookmark } from "lucide-react"

interface SavedComparison {
  id: string
  name: string
  description?: string
  lastModified: string
}

const savedComparisons: SavedComparison[] = [
  {
    id: "1",
    name: "Illinois Underserved Districts",
    description: "Districts with low funding and broadband access in Illinois",
    lastModified: "2 days ago"
  },
  {
    id: "2", 
    name: "Cook County Funding < $10k",
    description: "All districts in Cook County with per-pupil funding under $10,000",
    lastModified: "1 week ago"
  },
  {
    id: "3",
    name: "My Broadband Study",
    description: "Cross-state comparison of broadband access rates",
    lastModified: "3 days ago"
  }
]

export function SavedViews() {
  const handleViewComparison = (comparison: SavedComparison) => {
    console.log(`Opening saved comparison: ${comparison.name}`)
    // Here you would re-run the saved SQL query and navigate to results
  }

  const handleEditComparison = (comparison: SavedComparison) => {
    console.log(`Editing saved comparison: ${comparison.name}`)
    // Here you would open the edit interface for the saved comparison
  }

  return (
    <div className="flex-1 bg-gray-50">
      <div className="px-6 py-6">
        <div className="mb-6">
          <h1 className="text-2xl mb-2">Saved Comparisons</h1>
          <p className="text-muted-foreground">
            Click to open → re-runs the saved SQL query
          </p>
        </div>

        <div className="space-y-4 max-w-4xl">
          {savedComparisons.map((comparison) => (
            <Card key={comparison.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="flex-shrink-0">
                      <Bookmark className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{comparison.name}</h3>
                      {comparison.description && (
                        <p className="text-muted-foreground text-sm mt-1">
                          {comparison.description}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        Last modified: {comparison.lastModified}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleViewComparison(comparison)}
                      className="flex items-center space-x-2"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View</span>
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => handleEditComparison(comparison)}
                      className="flex items-center space-x-2"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>Edit</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {savedComparisons.length === 0 && (
          <div className="text-center py-12">
            <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg mb-2">No saved comparisons yet</h3>
            <p className="text-muted-foreground">
              Create and save your first comparison to see it here.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}