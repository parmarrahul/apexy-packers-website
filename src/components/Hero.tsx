'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[600px] bg-gray-100">
      <div className="container h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Privately Owned Moving Company
            </h1>
            <p className="text-lg text-gray-600">
              Apexy Packers and Movers provides secure packing, moving, and transportation services. 
              Equipped with expert staff and advanced machinery, we provide safe and timely delivery 
              for residential, commercial, and industrial moves.
            </p>
            <div className="flex space-x-4">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px]"
          >
            <Image
              src="https://www.apexypackers.com/assets/images/movers-banner-truck.jpg"
              alt="Moving Truck"
              fill
              className="object-cover rounded-lg"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://www.apexypackers.com/assets/img/movers-banner-truck.jpg";
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Service Icons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-8 shadow-lg transform translate-y-1/2">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Road Way",
                description: "Safe and efficient roadway transportation",
                image: "https://www.apexypackers.com/assets/img/movers-banner-truck.jpg"
              },
              {
                title: "Air Way",
                description: "Fast and secure airway transportation",
                image: "https://www.apexypackers.com/assets/img/movers-banner-airplane.jpg"
              },
              {
                title: "Ocean Way",
                description: "Reliable ocean freight services",
                image: "https://www.apexypackers.com/assets/img/movers-banner-ship.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = service.image.replace('/assets/images/', '/assets/img/');
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 