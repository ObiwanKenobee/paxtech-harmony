export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-paxgreen mb-4">PaxTech</h3>
            <p className="text-gray-600">Building a better future through technology and compassion.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-paxgreen">About Us</a></li>
              <li><a href="#pillars" className="text-gray-600 hover:text-paxgreen">Our Pillars</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-paxgreen">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-paxgreen">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-paxgreen">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-paxgreen">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-600">info@paxtech.org</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} PaxTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};