import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-paxgreen">PaxTech</Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/sustainability" className="text-gray-600 hover:text-paxgreen transition-colors">Sustainability</Link>
          <Link to="/economic" className="text-gray-600 hover:text-paxgreen transition-colors">Economic Growth</Link>
          <Link to="/peace" className="text-gray-600 hover:text-paxgreen transition-colors">Peace & Love</Link>
          <Link to="/about" className="text-gray-600 hover:text-paxgreen transition-colors">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-paxgreen transition-colors">Contact</Link>
        </nav>
        <Button className="bg-paxgreen hover:bg-paxgreen-light transition-colors">
          Get Involved
        </Button>
      </div>
    </header>
  );
};