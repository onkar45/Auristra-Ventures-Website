import { collegeSolutions } from '../data/products';

export default function CollegeSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">College Solutions</h1>
          <p className="text-xl text-purple-100">
            Comprehensive solutions for educational institutions
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collegeSolutions.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Products Include:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-purple-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="#contact"
                  className="block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
