import React from 'react'

const Services = () => {
  return (
    <section id="experience" className="p-3 h-[max-content]">
    <h2 className="text-xl font-medium text-center mb-8 text-primary">My Services</h2>
    <div className="relative w-4/5 max-w-4xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-500"></div>

      <ul className="space-y-10 sm:space-y-0">
        {/* Timeline Item 1 */}
        <li className="flex flex-col md:flex-row items-center md:items-start md:odd:flex-row-reverse">
          <div className="relative w-full md:w-1/2 px-6 text-white">
            <div className="bg-blue-300/40 p-6 rounded-tr-2xl rounded-b-2xl shadow-lg">
            
              <h3 className="text-sm font-medium">Perfect Frontend Development </h3>
              <p className="mt-2 text-xs text-light leading-relaxed">
              From dynamic single-page applications to multi-page platforms, I create fast, scalable, and efficient web applications using cutting-edge technologies such as JavaScript, Next.js, and Tailwind CSS.
               </p>
            </div>
          </div>
          <div className="w-5 h-5 bg-gray-500 rounded-full absolute  hidden md:block md:top-1/2 transform md:translate-y-[-50%] md:left-1/2 md:-translate-x-1/2"></div>
        </li>

        {/* Timeline Item 2 */}
        <li className="flex flex-col md:flex-row items-center md:items-start md:even:flex-row">
        <div className="relative w-full md:w-1/2 px-6 text-white">
            <div className="bg-blue-300/40 p-6 rounded-tl-2xl rounded-b-2xl shadow-lg">
            
              <h3 className="text-sm font-medium">Performance Optimization </h3>
              <p className="mt-2 text-xs text-light leading-relaxed">
                Speed matters! I optimize websites for fast loading times, better performance, and SEO-friendly development to enhance user satisfaction and search visibility.
              </p>
            </div>
          </div>
          <div className="w-5 h-5 bg-gray-500 rounded-full absolute hidden md:block md:top-1/2 transform md:translate-y-[-50%] md:left-1/2 md:-translate-x-1/2"></div>
        </li>

        {/* Timeline Item 3 */}
        <li className="flex flex-col md:flex-row items-center md:items-start md:odd:flex-row-reverse">
        <div className="relative w-full md:w-1/2 px-6 text-white">
            <div className="bg-blue-300/40 p-6 rounded-tr-2xl rounded-b-2xl shadow-lg">
            
              <h3 className="text-sm font-medium">Backend Integration </h3>
              <p className="mt-2 text-xs text-light leading-relaxed">
              I connect the dots between the frontend and backend, integrating RESTful APIs, databases, and third-party services to deliver fully functional web applications.</p>
            </div>
          </div>
          <div className="w-5 h-5 bg-gray-500 rounded-full absolute hidden md:block md:top-1/2 transform md:translate-y-[-50%] md:left-1/2 md:-translate-x-1/2 hover:bg-bg"></div>
        </li>

        {/* Timeline Item 4 */}
        <li className="flex flex-col md:flex-row items-center md:items-start md:even:flex-row">
        <div className="relative w-full md:w-1/2 px-6 text-white">
            <div className="bg-blue-300/40 p-6 rounded-tl-2xl rounded-b-2xl shadow-lg">
            
              <h3 className="text-sm font-medium"> Problem Solving & Troubleshooting </h3>
              <p className="mt-2 text-xs text-light leading-relaxed">
              Got an issue slowing your project down? I specialize in identifying and resolving bugs, optimizing code, and ensuring smooth functionality across all components.</p>
            </div>
          </div>
          <div className="w-5 h-5 bg-gray-500 rounded-full absolute hidden md:top-1/2 md:block transform md:translate-y-[-50%] md:left-1/2 md:-translate-x-1/2 hover:bg-bg_variant"></div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Services