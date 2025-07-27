import Link from 'next/link'
import Image from 'next/image'

export default function Products() {
  const products = [
    {
      id: "armoshield-pro",
      name: "ArmoShield Pro",
      tagline: "Enterprise-grade protection",
      description: "Complete security suite with advanced threat detection, real-time monitoring, and automated response systems.",
      price: "$299/month",
      features: ["AI-powered threat detection", "24/7 monitoring", "Automated incident response", "Advanced analytics"],
      category: "Enterprise",
      popular: false,
      image: "/images/products/armoshield-pro-hero.jpg"
    },
    {
      id: "armoguard-basic",
      name: "ArmoGuard Basic",
      tagline: "Essential protection for everyone",
      description: "Essential cybersecurity protection designed for individuals and small businesses. Get started with comprehensive digital security at an affordable price.",
      price: "$9.99/month",
      features: ["Real-time threat protection", "Email alerts", "Intuitive dashboard", "24/7 monitoring", "Weekly reports", "30-day free trial"],
      category: "Personal",
      popular: true,
      image: "/images/products/armoguard-basic-hero.jpg"
    },
    {
      id: "armomax-enterprise",
      name: "ArmoMax Enterprise",
      tagline: "Ultimate security solution",
      description: "Comprehensive enterprise solution with custom integrations, dedicated support, and advanced compliance tools.",
      price: "Custom pricing",
      features: ["Custom integrations", "Dedicated support", "Compliance tools", "API access"],
      category: "Enterprise",
      popular: false,
      image: "/placeholder-product3.jpg"
    },
    {
      id: "armomobile-shield",
      name: "ArmoMobile Shield", 
      tagline: "Mobile-first protection",
      description: "Specialized mobile security solution protecting smartphones, tablets, and mobile workforce applications.",
      price: "$19/month",
      features: ["Mobile app protection", "Device management", "App security scanning", "Remote wipe"],
      category: "Mobile",
      popular: false,
      image: "/placeholder-product4.jpg"
    },
    {
      id: "armocloud-secure",
      name: "ArmoCloud Secure",
      tagline: "Cloud infrastructure protection",
      description: "Comprehensive cloud security platform protecting your cloud infrastructure, data, and applications.",
      price: "$199/month",
      features: ["Cloud monitoring", "Data encryption", "Access management", "Compliance reporting"],
      category: "Cloud",
      popular: false,
      image: "/placeholder-product5.jpg"
    },
    {
      id: "armohome-guard",
      name: "ArmoHome Guard",
      tagline: "Smart home security",
      description: "Protect your smart home devices, IoT network, and family&apos;s digital activities with intelligent monitoring.",
      price: "$29/month",
      features: ["IoT device monitoring", "Network security", "Parental controls", "Privacy protection"],
      category: "Home",
      popular: false,
      image: "/placeholder-product6.jpg"
    }
  ]

  const categories = ["All", "Enterprise", "Personal", "Mobile", "Cloud", "Home"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Security Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Discover our comprehensive range of cybersecurity products designed to protect 
            individuals, businesses, and enterprises from evolving digital threats.
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-2">
            <Link 
              href="/products/armoguard-basic"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Try ArmoGuard Basic - $9.99/month
            </Link>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-colors duration-200 text-sm sm:text-base ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                product.popular ? 'ring-2 ring-blue-500 ring-opacity-50 sm:transform sm:scale-105' : ''
              }`}>
                {/* Product Image Placeholder */}
                <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                  {product.popular && (
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-yellow-400 text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold animate-pulse">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-3xl sm:text-4xl md:text-6xl font-bold opacity-50">
                      {product.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                  {/* Category Badge */}
                  <div className="mb-2 sm:mb-3">
                    <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                      product.category === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                      product.category === 'Personal' ? 'bg-green-100 text-green-800' :
                      product.category === 'Mobile' ? 'bg-blue-100 text-blue-800' :
                      product.category === 'Cloud' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {product.category}
                    </span>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{product.tagline}</p>
                  <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">{product.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4 sm:mb-6">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">{product.price}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-xs sm:text-sm text-blue-600 font-medium">
                        +{product.features.length - 3} more features
                      </li>
                    )}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <Link 
                      href={`/products/${product.id}`}
                      className={`font-bold py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 text-center text-sm sm:text-base ${
                        product.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl sm:transform sm:hover:scale-105' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {product.popular ? 'Get Started Now' : 'Learn More'}
                    </Link>
                    <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-3 sm:px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                      Try Free
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Compare Our Solutions</h2>
            <p className="text-base sm:text-lg text-gray-600">Find the perfect security solution for your needs</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 sm:p-6 md:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Need Help Choosing?</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
              Our security experts can help you find the perfect solution for your specific needs.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                Schedule Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                View Comparison Chart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Get Protected?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-2">
            Join thousands of satisfied customers who trust Armoureds for their security needs.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
            Start Your Free Trial Today
          </button>
        </div>
      </section>
    </div>
  )
}
