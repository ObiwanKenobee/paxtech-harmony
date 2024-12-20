import { Cpu, Coins, HandshakeIcon } from "lucide-react";

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
    bgColor: "bg-gradient-to-br from-green-50 to-blue-50"
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
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50"
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
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50"
  }
];

export const Features = () => {
  return (
    <>
      {featureSections.map((section, index) => (
        <section key={section.id} className={`py-16 ${section.bgColor}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <section.icon className="w-16 h-16 text-paxgreen mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-center text-paxgreen">
                {section.title}
              </h2>
              <p className="text-xl text-gray-600 mt-4 text-center max-w-2xl">
                {section.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${featureIndex * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-paxgreen mb-4" />
                  <p className="text-gray-800 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};