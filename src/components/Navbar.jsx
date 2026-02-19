import { useState } from 'react';
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs';
import { HiSpeakerphone } from 'react-icons/hi';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToTop = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase();
    const sections = {
      'hospital': '#hospital-equipment',
      'medical': '#hospital-equipment',
      'equipment': '#hospital-equipment',
      'stationery': '#office-stationery',
      'office': '#office-stationery',
      'furniture': '#furniture-work',
      'college': '#college-solutions',
      'education': '#college-solutions',
      'about': '#about',
      'contact': '#contact',
      'services': '#services'
    };

    for (const [keyword, section] of Object.entries(sections)) {
      if (query.includes(keyword)) {
        const element = document.querySelector(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setSearchQuery('');
          setMobileMenuOpen(false);
          return;
        }
      }
    }

    alert('No matching section found. Try: hospital, stationery, furniture, college, about, or contact');
  };

  const handleNavClick = () => {
    setMobileMenuClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileMenuClosing(false);
    }, 400);
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setMobileMenuClosing(false);
      }, 400);
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Section */}
      <div className="bg-white border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Logo and Title */}
          <a href="#home" onClick={scrollToTop} className="flex items-center gap-2 md:gap-4 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="auristra-logo scale-75 md:scale-100">
              <div className="auristra-logo-circle">
                <div className="logo-segment-1"></div>
                <div className="logo-segment-2"></div>
                <div className="logo-segment-3"></div>
                <div className="logo-segment-4"></div>
                <div className="logo-center"></div>
              </div>
            </div>
            <div>
              <h1 className="text-blue-900 text-lg md:text-2xl font-bold tracking-tight">AURISTRA</h1>
              <p className="text-blue-600 text-xs md:text-sm tracking-widest font-medium">VENTURES</p>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-blue-900 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Twitter">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Chat">
                <IoChatbubbleEllipsesOutline size={20} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                className="border border-blue-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <button onClick={handleSearch} className="text-blue-600 hover:text-blue-800 transition-colors">
                <BsSearch size={18} />
              </button>
            </div>

            {/* What's New Button */}
            <button className="bg-blue-600 text-white px-5 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2">
              <HiSpeakerphone size={18} />
              What's New
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md">
        <div className="container mx-auto px-6">
          <ul className="flex gap-8 text-sm relative">
            <li>
              <a href="#home" onClick={scrollToTop} className="block py-4 hover:bg-blue-700 px-3 transition-colors">Home</a>
            </li>
            
            <li 
              className="relative"
              onMouseEnter={() => setOpenDropdown('hospital')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a href="#hospital-equipment" className="block py-4 hover:bg-blue-700 px-3 transition-colors">
                Hospital Instruments & Equipments
              </a>
              {openDropdown === 'hospital' && (
                <ul className="absolute top-full left-0 bg-white text-gray-700 shadow-xl rounded-md w-64 py-2 z-50 border border-blue-100">
                  <li><a href="#hospital-equipment" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Medical Instruments</a></li>
                  <li><a href="#hospital-equipment" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Diagnostic Equipment</a></li>
                  <li><a href="#hospital-equipment" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Patient Beds & Hospital Furniture</a></li>
                  <li><a href="#hospital-equipment" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">OT & Ward Essentials</a></li>
                  <li><a href="#hospital-equipment" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Safety & Hygiene Products</a></li>
                </ul>
              )}
            </li>

            <li 
              className="relative"
              onMouseEnter={() => setOpenDropdown('stationary')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a href="#office-stationery" className="block py-4 hover:bg-blue-700 px-3 transition-colors">
                Office & Institutional Stationery
              </a>
              {openDropdown === 'stationary' && (
                <ul className="absolute top-full left-0 bg-white text-gray-700 shadow-xl rounded-md w-64 py-2 z-50 border border-blue-100">
                  <li><a href="#office-stationery" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Files, Registers & Paper Products</a></li>
                  <li><a href="#office-stationery" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Printers, Cartridges & Accessories</a></li>
                  <li><a href="#office-stationery" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Daily Office Consumables</a></li>
                  <li><a href="#office-stationery" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Customized Stationery Solutions</a></li>
                </ul>
              )}
            </li>

            <li 
              className="relative"
              onMouseEnter={() => setOpenDropdown('furniture')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a href="#furniture-work" className="block py-4 hover:bg-blue-700 px-3 transition-colors">
                Furniture Work (Supply + Installation)
              </a>
              {openDropdown === 'furniture' && (
                <ul className="absolute top-full left-0 bg-white text-gray-700 shadow-xl rounded-md w-64 py-2 z-50 border border-blue-100">
                  <li><a href="#furniture-work" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Office Desks, Chairs & Storage</a></li>
                  <li><a href="#furniture-work" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Hospital Furniture</a></li>
                  <li><a href="#furniture-work" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Classroom Furniture</a></li>
                  <li><a href="#furniture-work" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Modular Workstations</a></li>
                  <li><a href="#furniture-work" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Repair & Fitting Services</a></li>
                </ul>
              )}
            </li>

            <li 
              className="relative"
              onMouseEnter={() => setOpenDropdown('colleges')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a href="#college-solutions" className="block py-4 hover:bg-blue-700 px-3 transition-colors">
                Colleges
              </a>
              {openDropdown === 'colleges' && (
                <ul className="absolute top-full left-0 bg-white text-gray-700 shadow-xl rounded-md w-64 py-2 z-50 border border-blue-100">
                  <li><a href="#college-solutions" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Educational Supplies</a></li>
                  <li><a href="#college-solutions" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Classroom Furniture</a></li>
                  <li><a href="#college-solutions" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Lab Equipment</a></li>
                  <li><a href="#college-solutions" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Library Solutions</a></li>
                </ul>
              )}
            </li>

            <li>
              <a href="#why-choose-us" className="block py-4 hover:bg-blue-700 px-3 transition-colors">Why Choose Us?</a>
            </li>

            <li>
              <a href="#about" className="block py-4 hover:bg-blue-700 px-3 transition-colors">About</a>
            </li>

            <li>
              <a href="#contact" className="block py-4 hover:bg-blue-700 px-3 transition-colors">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden bg-white border-b border-blue-100 shadow-lg ${mobileMenuClosing ? 'mobile-menu-exit' : 'mobile-menu-enter'}`}>
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="flex items-center gap-2 mb-4">
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                className="flex-1 border border-blue-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
              <button onClick={handleSearch} className="text-blue-600">
                <BsSearch size={18} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="space-y-2">
              <li>
                <a href="#home" onClick={(e) => { scrollToTop(e); handleNavClick(); }} className="block py-2 text-blue-900 hover:text-blue-600">Home</a>
              </li>
              <li>
                <a href="#hospital-equipment" onClick={handleNavClick} className="block py-2 text-blue-900 hover:text-blue-600">Hospital Instruments & Equipments</a>
              </li>
              <li>
                <a href="#office-stationery" onClick={handleNavClick} className="block py-2 text-blue-900 hover:text-blue-600">Office & Institutional Stationery</a>
              </li>
              <li>
                <a href="#furniture-work" onClick={handleNavClick} className="block py-2 text-blue-900 hover:text-blue-600">Furniture Work</a>
              </li>
              <li>
                <a href="#college-solutions" onClick={handleNavClick} className="block py-2 text-blue-900 hover:text-blue-600">Colleges</a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={handleNavClick} className="block py-2 text-blue-900 hover:text-blue-600">Why Choose Us?</a>
              </li>
              <li>
                <a href="#about" onClick={handleNavClick} className="block py-2 text-blue-900 hover:text-blue-600">About</a>
              </li>
              <li>
                <a href="#contact" onClick={handleNavClick} className="block py-2 text-blue-900 hover:text-blue-600">Contact Us</a>
              </li>
            </ul>

            {/* Mobile Social Icons */}
            <div className="flex gap-4 mt-4 pt-4 border-t border-blue-100 justify-center">
              <a href="#" className="text-blue-600" aria-label="Twitter"><FaXTwitter size={20} /></a>
              <a href="#" className="text-blue-600" aria-label="Chat"><IoChatbubbleEllipsesOutline size={22} /></a>
              <a href="#" className="text-blue-600" aria-label="Facebook"><FaFacebookF size={20} /></a>
              <a href="#" className="text-blue-600" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
              <a href="#" className="text-blue-600" aria-label="YouTube"><FaYoutube size={22} /></a>
              <a href="#" className="text-blue-600" aria-label="Instagram"><FaInstagram size={22} /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
