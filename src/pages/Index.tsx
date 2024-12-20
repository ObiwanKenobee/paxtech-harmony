import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Pillars />
      <Footer />
    </div>
  );
};

export default Index;