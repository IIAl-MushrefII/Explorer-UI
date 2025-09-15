import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b bg-white px-6 py-4">
      <nav className="flex items-center space-x-8">
        <h1 className="text-xl font-semibold text-primary">
          Education Accessibility Explorer
        </h1>
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary"
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary"
          >
            <Link to="/saved">Saved Views</Link>
          </Button>
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary"
          >
            <Link to="/district/1">About</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
