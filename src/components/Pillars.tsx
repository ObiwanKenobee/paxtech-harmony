import { Leaf, Heart, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Sustainability through Technology",
    description: "Advanced AI, IoT, and renewable energy solutions for a greener future.",
    icon: Leaf,
    gradient: "from-green-400 to-emerald-600",
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
    gradient: "from-paxgold to-amber-500",
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
    gradient: "from-red-400 to-pink-500",
    features: [
      "Cultural immersion VR",
      "Global dialogue network",
      "Conflict prediction AI",
      "Faith-inspired collaboration"
    ]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Pillars = () => {
  return (
    <section id="pillars" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-paxgreen to-paxblue mb-12"
        >
          Our Pillars
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/90 border-0 overflow-hidden">
                <CardHeader className={`bg-gradient-to-br ${pillar.gradient} text-white`}>
                  <pillar.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl font-bold">{pillar.title}</CardTitle>
                  <p className="mt-2 text-white/90">{pillar.description}</p>
                </CardHeader>
                <CardContent className="mt-4">
                  <ul className="space-y-2">
                    {pillar.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-gray-700 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-paxgreen to-paxblue mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};