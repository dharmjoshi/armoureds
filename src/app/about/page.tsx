export default function About() {
  const timelineEvents = [
    { year: "2013", title: "Founded", description: "Armoureds was established with a vision to democratize cybersecurity." },
    { year: "2015", title: "First Product Launch", description: "Released our flagship protection suite to early adopters." },
    { year: "2018", title: "Series A Funding", description: "Secured $10M in funding to accelerate growth and development." },
    { year: "2020", title: "Global Expansion", description: "Expanded operations to Europe and Asia-Pacific regions." },
    { year: "2023", title: "AI Integration", description: "Launched AI-powered threat detection and prevention systems." },
    { year: "2025", title: "Industry Leader", description: "Recognized as the leading cybersecurity provider globally." }
  ]

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Former cybersecurity executive with 15+ years experience at major tech companies.",
      image: "/placeholder-avatar.jpg"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Security researcher and engineer who has led development of cutting-edge protection systems.",
      image: "/placeholder-avatar.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Product strategist focused on user experience and accessibility in security solutions.",
      image: "/placeholder-avatar.jpg"
    },
    {
      name: "David Park",
      role: "Chief Security Officer",
      bio: "Ethical hacker and security consultant with expertise in enterprise protection.",
      image: "/placeholder-avatar.jpg"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Armoureds</h1>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re on a mission to make cybersecurity accessible, effective, and user-friendly for everyone.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Armoureds was born from a simple observation: cybersecurity was too complex, 
                too expensive, and too exclusive. We believed everyone deserved enterprise-grade 
                protection without the enterprise-level complexity.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Starting in a small garage in Silicon Valley, our founders—a team of security 
                researchers and user experience designers—set out to democratize digital protection. 
                Today, we serve millions of users worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment remains unchanged: to provide cutting-edge security solutions 
                that are powerful enough for enterprises yet simple enough for everyday users.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To protect digital lives through innovative, accessible, and reliable cybersecurity solutions.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700">
                A world where everyone can navigate the digital landscape with confidence and security.
              </p>
            </div>
          </div>

          {/* Company Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Constantly pushing boundaries to stay ahead of emerging threats.</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">Making powerful security tools available to everyone.</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">Building lasting relationships through transparency and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones that shaped our growth and innovation</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-600"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md ml-12 md:ml-0">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      </div>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The experts behind Armoureds' innovative solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member photo */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Want to Join Our Mission?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We&apos;re always looking for passionate individuals who share our vision of accessible cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
