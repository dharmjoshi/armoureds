import Link from 'next/link'

export default function ArmoShieldPro() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and neutralize threats in real-time",
      icon: "🤖"
    },
    {
      title: "24/7 Security Operations Center",
      description: "Round-the-clock monitoring by certified security professionals",
      icon: "🛡️"
    },
    {
      title: "Automated Incident Response",
      description: "Immediate automated response to threats minimizes damage and downtime",
      icon: "⚡"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights and reporting for security posture management",
      icon: "📊"
    },
    {
      title: "Compliance Management",
      description: "Built-in compliance tools for SOC2, HIPAA, GDPR, and other regulations",
      icon: "✅"
    },
    {
      title: "API Integration",
      description: "Seamless integration with existing security and business tools",
      icon: "🔗"
    }
  ]

  const specifications = [
    { label: "Deployment", value: "Cloud-based, On-premise, Hybrid" },
    { label: "Supported Platforms", value: "Windows, macOS, Linux, Mobile" },
    { label: "Users", value: "Unlimited" },
    { label: "Data Retention", value: "1 year (configurable)" },
    { label: "Response Time", value: "< 5 minutes" },
    { label: "Uptime SLA", value: "99.9%" },
    { label: "Support", value: "24/7 Priority Support" },
    { label: "Training", value: "Included" }
  ]

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
            <span className="text-gray-900">ArmoShield Pro</span>
          </div>
        </div>
      </nav>

      {/* Product Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Enterprise Solution
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ArmoShield Pro
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Enterprise-grade cybersecurity platform with AI-powered threat detection, 
                real-time monitoring, and automated incident response for comprehensive protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                  Schedule Demo
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  30-day free trial
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No setup fees
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-white text-8xl font-bold opacity-50">ASP</div>
                </div>
                {/* Floating elements to suggest dashboard/monitoring */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg">
                  <div className="text-green-600 text-sm font-semibold">✓ System Secure</div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg">
                  <div className="text-blue-600 text-sm font-semibold">📊 Live Dashboard</div>
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
            <div className="text-4xl font-bold text-gray-900 mb-2">$299</div>
            <div className="text-lg text-gray-600">per month, per organization</div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600">Comprehensive protection powered by cutting-edge technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-lg text-gray-600">Detailed technical information and requirements</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">System Requirements</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Complete security platform setup
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Team training and onboarding
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 priority support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Regular security updates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Compliance reporting tools
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Guarantees</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 99.9% uptime SLA</li>
                  <li>• End-to-end encryption</li>
                  <li>• SOC 2 Type II certified</li>
                  <li>• GDPR & HIPAA compliant</li>
                  <li>• Zero-trust architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Enterprise?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of enterprises who trust ArmoShield Pro to protect their digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/products/armomax-enterprise" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">ArmoMax Enterprise</h3>
              <p className="text-gray-600 mb-4">Ultimate security solution with custom integrations and dedicated support.</p>
              <span className="text-blue-600 font-medium">Learn More →</span>
            </Link>
            
            <Link href="/products/armocloud-secure" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">ArmoCloud Secure</h3>
              <p className="text-gray-600 mb-4">Comprehensive cloud security platform for modern infrastructure.</p>
              <span className="text-blue-600 font-medium">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
