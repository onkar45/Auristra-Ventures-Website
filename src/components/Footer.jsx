export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-bold mb-3">AURISTRA VENTURES</h3>
            <p className="text-blue-200 text-sm leading-relaxed">Your trusted partner for quality products and services</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1.5 text-blue-200 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Services</h4>
            <ul className="space-y-1.5 text-blue-200 text-sm">
              <li><a href="#hospital-equipment" className="hover:text-white transition-colors">Hospital Equipment</a></li>
              <li><a href="#office-stationery" className="hover:text-white transition-colors">Office Stationery</a></li>
              <li><a href="#furniture-work" className="hover:text-white transition-colors">Furniture Work</a></li>
              <li><a href="#college-solutions" className="hover:text-white transition-colors">College Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Contact Info</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+919172763721" className="hover:text-white transition-colors">+91 9172763721</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:info@auristraventures.com" className="hover:text-white transition-colors break-all">info@auristraventures.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span>🌐</span>
                <a href="https://www.auristraventures.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.auristraventures.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span className="leading-relaxed">Neelkanth Sanskruti Society, Sector No. 06, Karanjade, Panvel, Mumbai</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-4">
          <p className="text-center text-blue-200 text-xs">&copy; 2026 Auristra Ventures. All rights reserved.</p>
        </div>
      </div>
      
      {/* Design Credit Section */}
      <div className="bg-blue-950 py-3">
        <div className="container mx-auto px-6">
          <p className="text-center text-blue-100 text-xs md:text-sm">
            Designed by <a href="https://shekruweb.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-300 transition-colors">Shekru Labs India Pvt Ltd</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
