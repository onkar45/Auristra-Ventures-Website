import { useState, useEffect } from 'react';
import medicalEquipment from '../assets/Gemini_Generated_Image_g4xqk5g4xqk5g4xq.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Auristra Ventures",
      subtitle: "Your Trusted Partner for Quality Products and Services",
      description: "Serving Government Departments, Hospitals, Educational Institutions & Businesses",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
      textColor: "text-white",
      buttonStyle: "bg-white text-blue-900 hover:bg-blue-50",
      link: "#services"
    },
    {
      title: "Hospital Instruments & Equipment",
      subtitle: "Advanced Medical Solutions for Modern Healthcare",
      description: "Premium surgical instruments, diagnostic equipment, and patient care essentials",
      image: medicalEquipment,
      textColor: "text-white",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
      link: "#hospital-equipment"
    },
    {
      title: "Office & Institutional Stationery",
      subtitle: "Complete Supply Solutions for Your Organization",
      description: "From daily consumables to customized stationery solutions",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80",
      textColor: "text-white",
      buttonStyle: "bg-white text-indigo-900 hover:bg-indigo-50",
      link: "#office-stationery"
    },
    {
      title: "Furniture Work & Installation",
      subtitle: "Professional Furniture Solutions",
      description: "Custom office furniture and modular workstations with expert installation",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
      textColor: "text-white",
      buttonStyle: "bg-white text-teal-900 hover:bg-teal-50",
      link: "#furniture-work"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[500px] md:h-[550px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-2xl">
                  <div className="min-h-[260px] md:min-h-[220px] flex flex-col justify-center">
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${slide.textColor} leading-tight`}>
                      {slide.title}
                    </h1>
                    <p className={`text-lg md:text-xl mb-2 ${slide.textColor} font-medium`}>
                      {slide.subtitle}
                    </p>
                    <p className={`text-sm md:text-base mb-5 ${slide.textColor} opacity-90`}>
                      {slide.description}
                    </p>
                  </div>
                  <a 
                    href={slide.link} 
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/');
                      const element = document.querySelector(slide.link);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className={`inline-flex items-center justify-center cursor-pointer ${slide.buttonStyle} px-8 py-3 text-sm rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px]`}
                  >
                    Explore Our Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white w-10 h-10 rounded-full transition-all z-20 flex items-center justify-center text-2xl border border-white/20"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white w-10 h-10 rounded-full transition-all z-20 flex items-center justify-center text-2xl border border-white/20"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
