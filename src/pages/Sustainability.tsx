import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cpu, Leaf, LineChart } from "lucide-react";

const Sustainability = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI for Resource Optimization",
      description: "Advanced AI algorithms analyze and minimize waste in manufacturing and supply chains."
    },
    {
      icon: Leaf,
      title: "IoT-Enhanced Monitoring",
      description: "Real-time environmental data collection and automated adjustments for sustainability."
    },
    {
      icon: LineChart,
      title: "Biodiversity Tracking",
      description: "AI-powered systems to monitor ecosystems and ensure sustainable land use."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-paxgreen mb-8">
              Technology-Driven Sustainability
            </h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Leveraging cutting-edge technology to create a sustainable future through innovative solutions and smart resource management.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-12 h-12 text-paxgreen mb-4" />
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

export default Sustainability;