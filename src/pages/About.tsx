import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-paxgreen mb-8">
              About PaxTech
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                PaxTech is a transformative technology platform that integrates sustainability, economic growth, peace, and love. Rooted in the values of harmony and compassion, we're dedicated to fostering a world united by empathy and understanding.
              </p>
              <h2 className="text-2xl font-bold text-paxgreen mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-8">
                We aim to harmonize economic growth, environmental sustainability, and global peace by fostering a circular economy, driving innovation, and leveraging advanced technologies like AI, IoT, and renewable energy systems.
              </p>
              <h2 className="text-2xl font-bold text-paxgreen mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To create innovative solutions that address the root causes of global challenges, fostering understanding, love, and cooperation across cultures and communities through technology and compassion.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;