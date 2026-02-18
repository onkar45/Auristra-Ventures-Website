import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(value)) {
          error = 'Please enter a valid phone number';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate on change if field has been touched
    if (touched[name]) {
      setErrors({
        ...errors,
        [name]: validateField(name, value)
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true
    });

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) {
      return;
    }
    
    // Create email content
    const subject = `Contact Form: Message from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;
    
    // Open default email client with pre-filled content
    const mailtoLink = `mailto:Premkala.k@auristraventures.com,Info@auristraventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setErrors({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setTouched({
      name: false,
      email: false,
      phone: false,
      message: false
    });
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-3">Contact Us</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-2"></div>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm">
          Get in touch with us for any inquiries about our products and services
        </p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 border border-blue-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-sm">Name *</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border-2 rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors ${
                  errors.name && touched.name ? 'border-red-500 focus:border-red-500' : 'border-blue-200 focus:border-blue-500'
                }`}
                placeholder="Your name"
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-sm">Email *</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border-2 rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors ${
                  errors.email && touched.email ? 'border-red-500 focus:border-red-500' : 'border-blue-200 focus:border-blue-500'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-sm">Phone *</label>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border-2 rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors ${
                  errors.phone && touched.phone ? 'border-red-500 focus:border-red-500' : 'border-blue-200 focus:border-blue-500'
                }`}
                placeholder="+91 "
              />
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-sm">Message *</label>
              <textarea 
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border-2 rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors resize-none ${
                  errors.message && touched.message ? 'border-red-500 focus:border-red-500' : 'border-blue-200 focus:border-blue-500'
                }`}
                placeholder="Your message"
              ></textarea>
              {errors.message && touched.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
