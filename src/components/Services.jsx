export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Turnkey Projects Consultancy</h3>
            <p className="text-gray-700">Complete project management and consultancy services for institutional projects</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Medical & Educational Colleges</h3>
            <p className="text-gray-700">Engineering Colleges, Agri Colleges, Veterinary Colleges and all education institute projects</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Medicines & Surgical Supply</h3>
            <p className="text-gray-700">All medicines and surgical material supply for healthcare facilities</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Specialized Medical Units</h3>
            <p className="text-gray-700">Work in IVF, Cathlab, Modular OT with advanced technology</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🩺</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">ICU Setup Solutions</h3>
            <p className="text-gray-700">Advance MICU, NICU, SICU, PICU setup with complete equipment</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Complete Hospital Supply</h3>
            <p className="text-gray-700">Supply hospital all instruments and equipments, stationary, all furniture work, digital school e-library</p>
          </div>
        </div>
      </div>
    </section>
  );
}
