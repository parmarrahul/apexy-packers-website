'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Poineers in Domestic Shifting",
    description: "Apexy Packers and Movers, pioneers in domestic shifting, provide safe, efficient, and hassle-free relocation services nationwide.",
    image: "/images/movers-service1.jpg",
  },
  {
    title: "Household/Car/Bike Shifting",
    description: "Apexy Packers and Movers offer safe and reliable household, car, and bike shifting services across India.",
    image: "/images/movers-service2.jpg",
  },
  {
    title: "International Shifting",
    description: "Apexy Packers and Movers provide secure, efficient, and hassle-free international shifting services with expert handling worldwide.",
    image: "/images/movers-service3.jpg",
  },
  {
    title: "Corporate Shifting",
    description: "Apexy Packers and Movers offer seamless corporate shifting services, ensuring safe, efficient, and timely office relocations.",
    image: "/images/movers-service4.jpg",
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Apexy Packers and Movers offer reliable packing, moving, transportation, 
            storage, and relocation services with utmost care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/50`} />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <span className="text-3xl text-white font-semibold">{service.title.split(' ')[0]}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
                  Read More... <span className="ml-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 