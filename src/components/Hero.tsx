import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-white via-green-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.07)_50%,transparent_50%)] bg-[length:4px_100%] z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-paxgreen mb-6 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-paxgreen to-paxblue">
              Empowering Sustainability, Peace, and Love Through Technology
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            Join us in creating a world where innovation meets compassion. Together, we can build a sustainable and peaceful future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "400ms" }}>
            <Button 
              className="bg-gradient-to-r from-paxgreen to-paxgreen-light hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="border-paxgreen text-paxgreen hover:bg-paxgreen/10 text-lg px-8 py-6 transition-all duration-300"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};