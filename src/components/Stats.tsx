'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats: Stats[] = [
  {
    value: "10+",
    label: "Years of Trust",
    description: "delivering smiles since 2015"
  },
  {
    value: "5000+",
    label: "Moves Annually",
    description: "happily across the world"
  },
  {
    value: "50+",
    label: "Total Location",
    description: "In India"
  },
  {
    value: "100+",
    label: "Trained Manpower",
    description: "Makes your move safe & on time"
  }
];

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const numericValue = parseInt(value);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const incrementTime = (duration * 1000) / end;

      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {isNaN(numericValue) ? value : count + (value.includes('+') ? '+' : '')}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Strengths, Which Makes Us
          </h2>
          <p className="text-xl text-gray-600">
            The Most Preferable Moving Brand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <Counter value={stat.value} />
              <h3 className="text-xl font-semibold mt-4 mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 