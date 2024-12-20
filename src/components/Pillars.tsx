import { Leaf, Heart, LineChart, Cpu, Globe, Coins, HandshakeIcon, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    title: "Sustainability through Technology",
    description: "Advanced AI, IoT, and renewable energy solutions for a greener future.",
    icon: Leaf,
    color: "text-green-500",
    features: [
      "AI-powered resource optimization",
      "IoT environmental monitoring",
      "Renewable energy integration",
      "Biodiversity tracking systems"
    ]
  },
  {
    title: "Economic Empowerment",
    description: "Green entrepreneurship and global marketplaces for sustainable growth.",
    icon: LineChart,
    color: "text-paxgold",
    features: [
      "Green startup platform",
      "Circular economy marketplace",
      "Blockchain transparency",
      "Dynamic policy tools"
    ]
  },
  {
    title: "Peace and Love",
    description: "Tools for cultural exchange, conflict resolution, and empathy building.",
    icon: Heart,
    color: "text-red-400",
    features: [
      "Cultural immersion VR",
      "Global dialogue network",
      "Conflict prediction AI",
      "Faith-inspired collaboration"
    ]
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
                <p className="text-gray-600 mt-2">{pillar.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-paxgreen mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};