import { collegeSolutions } from '../data/products';

export default function CollegeSection() {
  return (
    <section id="college-solutions" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">College Solutions</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions for educational institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collegeSolutions.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-blue-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4 flex-grow">
                  <h4 className="font-semibold text-blue-800 mb-2">Products Include:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="#contact"
                  className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md mt-auto"
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
