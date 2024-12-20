import { Leaf, Heart, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    title: "Sustainability through Technology",
    description: "Advanced AI, IoT, and renewable energy solutions for a greener future.",
    icon: Leaf,
    color: "text-green-500",
  },
  {
    title: "Economic Empowerment",
    description: "Green entrepreneurship and global marketplaces for sustainable growth.",
    icon: LineChart,
    color: "text-paxgold",
  },
  {
    title: "Peace and Love",
    description: "Tools for cultural exchange, conflict resolution, and empathy building.",
    icon: Heart,
    color: "text-red-400",
  },
];

export const Pillars = () => {
  return (
    <section id="pillars" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-paxgreen mb-12">
          Our Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader>
                <pillar.icon className={`w-12 h-12 ${pillar.color} mb-4`} />
                <CardTitle className="text-xl font-bold">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};