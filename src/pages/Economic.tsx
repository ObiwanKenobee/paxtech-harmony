import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Coins, Globe, LineChart } from "lucide-react";

const Economic = () => {
  const features = [
    {
      icon: Coins,
      title: "Green Entrepreneurship Platform",
      description: "Digital hub offering mentorship, funding, and collaboration tools for sustainable startups."
    },
    {
      icon: Globe,
      title: "Global Circular Economy",
      description: "Seamless digital platform for buying, selling, and innovating with recyclable materials."
    },
    {
      icon: LineChart,
      title: "Dynamic Policy Integration",
      description: "Tools for modeling and implementing sustainability-focused policies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-paxgreen mb-8">
              Economic Growth Platform
            </h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Enabling sustainable business growth and innovation through technology and collaboration.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-12 h-12 text-paxgold mb-4" />
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

export default Economic;