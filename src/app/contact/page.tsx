'use client'

import { useState } from 'react'
import WhatsAppFloatingButton from '../../components/WhatsAppFloatingButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You would typically send this data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Our Office",
      details: ["123 Security Boulevard", "Cyber City, CC 12345", "United States"],
      action: "Get Directions"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Mon-Fri 9AM-6PM EST"],
      action: "Call Now"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: ["contact@armoureds.com", "support@armoureds.com", "sales@armoureds.com"],
      action: "Send Email"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
      action: "View Calendar"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-2">
            Have questions about our security solutions? We&apos;re here to help you find the perfect protection for your needs.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center px-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
              Schedule a Demo
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales Question</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="demo">Request Demo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 sm:transform sm:hover:scale-105 text-sm sm:text-base"
                >
                  Send Message
                </button>
                
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  Ready to protect your digital assets? Our security experts are standing by to help you choose the right solution.
                </p>
              </div>
              
              <div className="grid gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3 sm:mr-4 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm sm:text-base text-gray-600">{detail}</p>
                          ))}
                        </div>
                        <button className="mt-2 sm:mt-3 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm transition-colors duration-200">
                          {info.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-12 sm:py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Security Emergency?</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
            If you&apos;re experiencing an active security incident, contact our emergency response team immediately.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center px-2">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
              Emergency Hotline: +1 (555) 911-HELP
            </button>
            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
              24/7 Live Chat
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">How quickly can you respond to security incidents?</h3>
              <p className="text-sm sm:text-base text-gray-600">Our emergency response team is available 24/7 and typically responds to critical incidents within 5 minutes.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Do you offer custom enterprise solutions?</h3>
              <p className="text-sm sm:text-base text-gray-600">Yes, we provide fully customized security solutions tailored to enterprise requirements. Contact our sales team for details.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">What support channels do you provide?</h3>
              <p className="text-sm sm:text-base text-gray-600">We offer phone, email, live chat, and WhatsApp support. Enterprise customers also get dedicated account managers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
    </div>
  )
}
