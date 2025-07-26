import Navbar from './Navbar'
import WhatsAppFloatingButton from './WhatsAppFloatingButton'
import PageTransition from './PageTransition'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content Area with Page Transitions */}
      <main className="pt-16">
        {/* pt-16 adds top padding to account for fixed navbar height */}
        <PageTransition>
          <div className="min-h-screen">
            {children}
          </div>
        </PageTransition>
      </main>
      
      {/* Optional Footer Space */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Armoureds. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button - Available on all pages except contact */}
      <WhatsAppFloatingButton />
    </div>
  )
}

export default Layout
