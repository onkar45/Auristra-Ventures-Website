export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">About Auristra Ventures</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
            Auristra Ventures is a leading provider of quality products and services across multiple sectors. 
            With years of experience and a commitment to excellence, we serve hospitals, educational institutions, 
            offices, and businesses with reliable solutions.
          </p>

          {/* Mission Statement */}
          <div className="bg-white rounded-xl shadow-lg p-10 border-t-4 border-blue-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed pl-16">
              To provide reliable, affordable, and high-quality supply services that help institutions operate efficiently and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
