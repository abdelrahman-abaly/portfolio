import React from 'react'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center fade-in">Education</h2>
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="border-l-4 border-primary pl-6 py-2 slide-in-left" style={{transitionDelay: '0.1s'}}>
        <h3 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
        <p className="text-gray-600 mb-2">Luxor University • 2020 - 2024</p>
        <p>Specialized in web technologies and software development. Graduated with honors.</p>
      </div>
      <div className="border-l-4 border-primary pl-6 py-2 slide-in-left" style={{transitionDelay: '0.2s'}}>
        <h3 className="text-xl font-semibold">Full-stack Web Development Using MEARN</h3>
        <p className="text-gray-600 mb-2">Information Technology Institute (ITI) • 2024 - 2025</p>
        <p>Comprehensive training in modern Full-stack frameworks and best practices.</p>
      </div>
      <div className="border-l-4 border-primary pl-6 py-2 slide-in-left" style={{transitionDelay: '0.3s'}}>
        <h3 className="text-xl font-semibold">PHP-Summer-Course</h3>
        <p className="text-gray-600 mb-2">Information Technology Institute (ITI) • 2023</p>
        <p>Studied the fundamentals of Back-End development, including PHP, MySQL, and core server-side technologies.</p>
      </div>
    </div>
  </div>
</section>

  )
}
