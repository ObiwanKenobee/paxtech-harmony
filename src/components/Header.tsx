import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-paxgreen">PaxTech</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-paxgreen transition-colors">About</a>
          <a href="#pillars" className="text-gray-600 hover:text-paxgreen transition-colors">Our Pillars</a>
          <a href="#contact" className="text-gray-600 hover:text-paxgreen transition-colors">Contact</a>
        </nav>
        <Button className="bg-paxgreen hover:bg-paxgreen-light transition-colors">
          Get Involved
        </Button>
      </div>
    </header>
  );
};