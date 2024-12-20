import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, Globe, HandshakeIcon } from "lucide-react";

const Peace = () => {
  const features = [
    {
      icon: Heart,
      title: "Cultural Immersion Simulators",
      description: "Virtual and augmented reality experiences fostering cross-cultural empathy and understanding."
    },
    {
      icon: Globe,
      title: "Global Dialogue Network",
      description: "Digital space for open communication between diverse communities and stakeholders."
    },
    {
      icon: HandshakeIcon,
      title: "Conflict Resolution",
      description: "AI-powered systems for conflict prediction and prevention through data analysis."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-paxgreen mb-8">
              Peace & Love Through Technology
            </h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Building bridges through technology and understanding, fostering global peace and harmony.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-12 h-12 text-paxblue mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Peace;