import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import AnimateOnScroll, { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../../../components/AnimateOnScroll'
import AnimatedButton, { PrimaryButton, SecondaryButton } from '../../../components/AnimatedButton'

export const metadata: Metadata = {
  title: 'ArmoGuard Basic - Essential Cybersecurity Protection | Armoureds',
  description: 'ArmoGuard Basic provides essential cybersecurity protection for individuals and small businesses. Features real-time threat monitoring, email alerts, and intuitive dashboard. Starting at $9.99/month.',
  keywords: 'cybersecurity, basic protection, threat monitoring, small business security, individual protection, affordable security',
  openGraph: {
    title: 'ArmoGuard Basic - Essential Cybersecurity Protection',
    description: 'Essential cybersecurity protection with real-time monitoring and threat detection',
    url: 'https://armoureds.com/products/armoguard-basic',
    siteName: 'Armoureds',
    images: [
      {
        url: '/images/products/armoguard-basic-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'ArmoGuard Basic dashboard interface showing threat monitoring and security status',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function ArmoGuardBasic() {
  const productImages = [
    {
      src: '/images/products/armoguard-basic-dashboard.jpg',
      alt: 'ArmoGuard Basic main dashboard showing security overview with threat detection status and system health metrics',
      title: 'Main Dashboard'
    },
    {
      src: '/images/products/armoguard-basic-alerts.jpg',
      alt: 'ArmoGuard Basic real-time alerts panel displaying security notifications and threat warnings',
      title: 'Real-time Alerts'
    },
    {
      src: '/images/products/armoguard-basic-reports.jpg',
      alt: 'ArmoGuard Basic security reports showing detailed analytics and threat analysis charts',
      title: 'Security Reports'
    },
    {
      src: '/images/products/armoguard-basic-settings.jpg',
      alt: 'ArmoGuard Basic settings interface for configuring security preferences and notification options',
      title: 'Configuration Panel'
    }
  ]

  const specifications = [
    {
      category: "Protection Features",
      items: [
        "Real-time malware scanning",
        "Email threat detection",
        "Web browsing protection",
        "Firewall monitoring",
        "Basic intrusion detection"
      ]
    },
    {
      category: "Monitoring & Alerts",
      items: [
        "24/7 threat monitoring",
        "Email notifications",
        "Weekly security reports",
        "System health alerts",
        "Basic incident response"
      ]
    },
    {
      category: "System Requirements",
      items: [
        "Windows 10/11 or macOS 10.15+",
        "2GB RAM minimum",
        "500MB disk space",
        "Internet connection required",
        "Chrome, Firefox, or Safari browser"
      ]
    },
    {
      category: "Support & Updates",
      items: [
        "Email support (24-48h response)",
        "Automatic security updates",
        "Knowledge base access",
        "Community forum",
        "Monthly feature updates"
      ]
    }
  ]

  const features = [
    {
      title: "Essential Threat Protection",
      description: "Core security features to protect against common cyber threats including malware, phishing, and suspicious activities",
      icon: "🛡️"
    },
    {
      title: "Smart Email Alerts",
      description: "Receive instant notifications about security events, threats detected, and system status updates via email",
      icon: "📧"
    },
    {
      title: "Intuitive Dashboard",
      description: "Clean, easy-to-understand security overview with visual indicators and actionable insights",
      icon: "📊"
    },
    {
      title: "Automated Protection",
      description: "Set-and-forget security that automatically adapts to new threats without user intervention",
      icon: "🤖"
    },
    {
      title: "Weekly Reports",
      description: "Comprehensive security summaries delivered weekly with threat analysis and recommendations",
      icon: "📈"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance of your digital assets with immediate threat response",
      icon: "⏰"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/products" className="text-gray-500 hover:text-gray-700">
                  Products
                </Link>
              </li>
              <li>
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className="text-gray-900 font-medium">ArmoGuard Basic</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Best Value
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  ArmoGuard Basic
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  Essential cybersecurity protection designed for individuals and small businesses. 
                  Get started with comprehensive digital security at an affordable price.
                </p>
                
                <div className="flex items-baseline space-x-2 mb-8">
                  <span className="text-4xl font-bold text-blue-600">$9.99</span>
                  <span className="text-xl text-gray-500">/month</span>
                  <span className="text-sm text-gray-400 line-through ml-2">$19.99</span>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">30-day free trial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Cancel anytime</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Money-back guarantee</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <PrimaryButton size="lg" className="flex-1 sm:flex-initial">
                    Start Free Trial
                  </PrimaryButton>
                  <SecondaryButton size="lg">
                    Schedule Demo
                  </SecondaryButton>
                </div>
              </div>
            </FadeInLeft>
            
            <FadeInRight>
              <div className="relative">
                <Image
                  src="/images/products/armoguard-basic-hero.jpg"
                  alt="ArmoGuard Basic product interface showcasing the main security dashboard with real-time threat monitoring, protection status, and user-friendly controls for essential cybersecurity management"
                  width={600}
                  height={400}
                  priority
                  className="rounded-lg shadow-2xl"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">99.8%</div>
                    <div className="text-sm text-gray-600">Threat Detection</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Active Protection</span>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Product Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Product Screenshots
            </h2>
            <p className="text-lg text-gray-600">
              Explore the ArmoGuard Basic interface and features
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productImages.map((image, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="aspect-video relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{image.title}</h3>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for essential cybersecurity protection
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Detailed information about ArmoGuard Basic capabilities and requirements
            </p>
          </FadeInUp>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{spec.category}</h3>
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Digital Life?
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust ArmoGuard Basic for their cybersecurity needs.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton 
                className="bg-white text-blue-600 hover:bg-gray-100"
                size="lg"
              >
                Start Free Trial
              </PrimaryButton>
              <SecondaryButton 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
                size="lg"
              >
                Contact Sales
              </SecondaryButton>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
