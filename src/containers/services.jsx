import React from 'react'
import { ServicesData } from '@/utlis/helper'

const Services = () => {
  return (
    <section
  id="services"
  className="w-full min-h-screen pt-24 px-6 mx-auto space-y-12"
>
  {/* Heading */}
  <div className="text-center space-y-4">
    <h2 className="text-xl md:text-2xl font-bold uppercase text-neutral-800">
      Our Services
    </h2>

    <h3 className="text-2xl md:text-4xl font-serif text-neutral-600">
      Renovations tailored 
      <span className="font-sans font-semibold text-neutral-400">
        {" "}For YOU
      </span>
    </h3>

    <p className="max-w-3xl mx-auto text-neutral-500 tracking-wide">
      At Naja Design Studio, every project begins with a discerning, almost curatorial reading of the space—its architecture, its imperfections, and the quiet opportunities waiting to be revealed. We look beyond surface impressions, identifying essential repairs and refining existing elements to create a more nuanced, elevated experience. These insights become the foundation of a tailored design narrative, one that seamlessly marries craftsmanship and intention while bringing your vision into a more luxurious, expressive form.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {ServicesData.map((service) => (
      <div
        key={service.id}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
      >
       

        {/* Content */}
        <div className="p-6 space-y-4">
          <h4 className="text-2xl font-serif text-neutral-800">
            {service.title}
          </h4>

          <p className="text-neutral-500 leading-relaxed">
            {service.description}
          </p>

          <button className="mt-2 px-5 py-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition">
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
  )
}

export default Services