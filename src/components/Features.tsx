import { Cpu, Coins, HandshakeIcon } from "lucide-react";
import { motion } from "framer-motion";

const featureSections = [
  {
    id: "sustainability",
    title: "Technology-Driven Sustainability",
    icon: Cpu,
    description: "Leveraging cutting-edge technology for environmental preservation",
    features: [
      "AI algorithms for waste reduction",
      "Real-time environmental monitoring",
      "Smart renewable energy systems",
      "Automated sustainability reporting"
    ],
    gradient: "from-green-50 to-blue-50"
  },
  {
    id: "economic",
    title: "Economic Growth Platform",
    icon: Coins,
    description: "Enabling sustainable business growth and innovation",
    features: [
      "Digital mentorship programs",
      "Sustainable startup funding",
      "Global marketplace access",
      "Green business analytics"
    ],
    gradient: "from-yellow-50 to-orange-50"
  },
  {
    id: "peace",
    title: "Peace & Conflict Resolution",
    icon: HandshakeIcon,
    description: "Building bridges through technology and understanding",
    features: [
      "Virtual reality cultural exchange",
      "AI-powered conflict prevention",
      "Cross-border collaboration tools",
      "Digital peace initiatives"
    ],
    gradient: "from-blue-50 to-purple-50"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Features = () => {
  return (
    <>
      {featureSections.map((section, index) => (
        <section 
          key={section.id} 
          className={`py-16 bg-gradient-to-br ${section.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.1)_50%,rgba(255,255,255,.1)_75%,transparent_75%,transparent)] bg-[length:64px_64px]" />
          </div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center mb-12"
            >
              <section.icon className="w-16 h-16 text-paxgreen mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-paxgreen to-paxblue">
                {section.title}
              </h2>
              <p className="text-xl text-gray-600 mt-4 text-center max-w-2xl">
                {section.description}
              </p>
            </motion.div>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {section.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  variants={item}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-paxgreen to-paxblue mb-4 group-hover:scale-150 transition-transform duration-300" />
                  <p className="text-gray-800 font-medium">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};