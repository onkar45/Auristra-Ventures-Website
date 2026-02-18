export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AURISTRA VENTURES</h3>
            <p className="text-blue-200">Your trusted partner for quality products and services</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#hospital-equipment" className="hover:text-white transition-colors">Hospital Equipment</a></li>
              <li><a href="#office-stationery" className="hover:text-white transition-colors">Stationary</a></li>
              <li><a href="#furniture-work" className="hover:text-white transition-colors">Furniture Work</a></li>
              <li><a href="#college-solutions" className="hover:text-white transition-colors">College Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-blue-200">
              <li>📧 <a href="mailto:Premkala.k@auristraventures.com" className="hover:text-white transition-colors">Premkala.k@auristraventures.com</a></li>
              <li>📧 <a href="mailto:Info@auristraventures.com" className="hover:text-white transition-colors">Info@auristraventures.com</a></li>
              <li>📞 <a href="tel:+12345678900" className="hover:text-white transition-colors">+1 234 567 8900</a></li>
              <li>📍 Office of the Assistant Commissioner of Labour, Latur, Shashikant Sonawane Building, Tilak Nagar, Main Road, Latur</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
          <p>&copy; 2026 Auristra Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
