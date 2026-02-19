export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Hospital Equipment</h3>
            <p className="text-gray-700">Premium medical instruments and equipment for healthcare facilities</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Office Stationery</h3>
            <p className="text-gray-700">Complete range of office and school supplies for all your needs</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🪑</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Furniture Work</h3>
            <p className="text-gray-700">Custom furniture design and installation services</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">College Solutions</h3>
            <p className="text-gray-700">Educational supplies and equipment for institutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
