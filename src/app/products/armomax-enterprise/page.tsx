import Link from 'next/link'

export default function ArmoMaxEnterprise() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">ArmoMax Enterprise</span>
          </div>
        </div>
      </nav>

      {/* Product Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Ultimate Enterprise Solution
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ArmoMax Enterprise
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The ultimate cybersecurity platform for large enterprises. Custom integrations, 
                dedicated support, and advanced compliance tools for maximum protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                  Contact Sales
                </button>
                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                  Request Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-white text-8xl font-bold opacity-50">AME</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">Custom Pricing</div>
            <div className="text-lg text-gray-600">Tailored to your organization's needs</div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Features</h2>
            <p className="text-lg text-gray-600">Comprehensive security designed for complex organizations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Custom Integrations", description: "Seamless integration with your existing enterprise tools and workflows", icon: "🔗" },
              { title: "Dedicated Support", description: "24/7 priority support with dedicated account management", icon: "🎯" },
              { title: "Advanced Compliance", description: "Built-in compliance for SOC2, HIPAA, GDPR, PCI-DSS, and more", icon: "✅" },
              { title: "Multi-Tenant Architecture", description: "Secure separation for different business units and subsidiaries", icon: "🏢" },
              { title: "Custom Reporting", description: "Tailored security reports and dashboards for executive teams", icon: "📊" },
              { title: "API Access", description: "Full API access for custom integrations and automation", icon: "⚙️" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Enterprise-Level Security?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let&apos;s discuss how ArmoMax Enterprise can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Contact Sales Team
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
