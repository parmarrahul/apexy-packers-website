'use client';

import Header from '../../components/Header';
import Services from '../../components/Services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We offer comprehensive packing and moving services tailored to meet your specific needs. 
            Our experienced team ensures safe and timely delivery of your belongings.
          </p>
        </div>
        <Services />
      </main>
    </div>
  );
} 