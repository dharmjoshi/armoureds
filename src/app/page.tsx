import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import AnimateOnScroll, { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll'
import AnimatedButton, { PrimaryButton, SecondaryButton } from '../components/AnimatedButton'
import Hero3DFallback from '../components/Hero3DFallback'
import ManufacturingProcess from '../components/ManufacturingProcessOptimized'

export const metadata: Metadata = {
  title: 'Armoureds - Innovative Cybersecurity Solutions | Advanced Digital Protection',
  description: 'Protect your digital future with Armoureds cutting-edge cybersecurity solutions. Advanced encryption, real-time monitoring, and enterprise-grade protection for individuals and businesses.',
  keywords: 'cybersecurity, digital protection, encryption, security solutions, enterprise security, data protection',
  openGraph: {
    title: 'Armoureds - Leading Cybersecurity Solutions',
    description: 'Advanced protection solutions designed for modern digital challenges',
    url: 'https://armoureds.com',
    siteName: 'Armoureds',
    images: [
      {
        url: '/images/hero-security.jpg',
        width: 1200,
        height: 630,
        alt: 'Armoureds cybersecurity dashboard showing real-time threat protection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armoureds - Innovative Cybersecurity Solutions',
    description: 'Advanced protection solutions designed for modern digital challenges',
    images: ['/images/hero-security.jpg'],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Advanced 3D Hero Section with GSAP (CSS-based for stability) */}
      <Hero3DFallback />

      {/* Manufacturing Process Section */}
      <ManufacturingProcess />

      {/* Featured Product Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Most Popular Choice
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ArmoGuard Basic - Essential Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with professional-grade cybersecurity at an affordable price. Perfect for small businesses and individual users.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.3} className="grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Real-time threat monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Advanced firewall protection</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">24/7 email support</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">$9.99</div>
                <div className="text-gray-500 mb-4">per month</div>
                <Link href="/products/armoguard-basic">
                  <PrimaryButton size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200">
                    Get Started Now
                  </PrimaryButton>
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Malware detection & removal</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Automated security updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Easy setup & management</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Armoureds?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our solutions combine innovation, reliability, and user experience to deliver unmatched protection.
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.2}>
            <StaggerItem>
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Security</h3>
                <p className="text-gray-600">Military-grade encryption and protection protocols ensure your data stays secure.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600">Real-time monitoring and instant alerts keep you ahead of potential threats.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">User Friendly</h3>
                <p className="text-gray-600">Intuitive design and seamless integration make protection effortless.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Leading the Future of Digital Protection
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  For over a decade, Armoureds has been at the forefront of cybersecurity innovation. 
                  We protect millions of users worldwide with our cutting-edge solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our mission is simple: to make digital protection accessible, reliable, and effective 
                  for everyone, from individuals to enterprise organizations.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10M+</div>
                    <div className="text-gray-600">Protected Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99.9%</div>
                    <div className="text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </FadeInLeft>
            
            <FadeInRight>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Protected?</h3>
                <p className="mb-6">Join millions of satisfied customers who trust Armoureds for their security needs.</p>
                <AnimatedButton variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                </AnimatedButton>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Digital Life?
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <p className="text-xl text-blue-100 mb-8">
              Don&apos;t wait for a security breach. Take action today with Armoureds&apos; comprehensive protection suite.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                size="lg"
              >
                Get Started Now
              </AnimatedButton>
              <AnimatedButton 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
                size="lg"
              >
                Schedule Demo
              </AnimatedButton>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
