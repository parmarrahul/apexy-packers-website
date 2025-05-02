'use client';

import Header from '../../components/Header';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Book Services",
    description: "Contact us through phone, email, or our website to schedule your move.",
    icon: "📝"
  },
  {
    title: "Packing",
    description: "Our team carefully packs your items using high-quality materials.",
    icon: "📦"
  },
  {
    title: "Loading",
    description: "We safely load your belongings into our specialized vehicles.",
    icon: "🚛"
  },
  {
    title: "Transportation",
    description: "Your items are transported securely to the destination.",
    icon: "🚚"
  },
  {
    title: "Unloading",
    description: "We carefully unload and place items as per your instructions.",
    icon: "📍"
  },
  {
    title: "Unpacking",
    description: "Optional unpacking service to help you settle in quickly.",
    icon: "📭"
  }
];

export default function Process() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Process</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          We follow a systematic approach to ensure a smooth and efficient moving experience. 
          Here's how we make your relocation hassle-free:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
} 