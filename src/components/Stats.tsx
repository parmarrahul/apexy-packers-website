'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    number: "10+",
    label: "years of trust",
    subtext: "delivering smiles since 2015"
  },
  {
    number: "5000+",
    label: "moves annually",
    subtext: "happily across the world"
  },
  {
    number: "50+",
    label: "Total Location",
    subtext: "In India"
  },
  {
    number: "100+",
    label: "Trained manpower",
    subtext: "Makes your move safe & on time"
  }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">our strengths, which makes us</h2>
          <p className="text-xl text-primary font-semibold">the Most preferable moving brand</p>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</p>
              <p className="text-gray-600">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 