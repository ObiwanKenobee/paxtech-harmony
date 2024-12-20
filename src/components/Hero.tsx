import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-white via-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-paxgreen mb-6">
            Empowering Sustainability, Peace, and Love Through Technology
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join us in creating a world where innovation meets compassion. Together, we can build a sustainable and peaceful future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-paxgreen hover:bg-paxgreen-light text-lg px-8 py-6">
              Learn More
            </Button>
            <Button variant="outline" className="border-paxgreen text-paxgreen hover:bg-paxgreen/10 text-lg px-8 py-6">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};