import { Metadata } from 'next';
import Services from '@/components/Services';
import JsonLd, { organizationSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Apexy Packers and Movers - Professional Moving & Relocation Services',
  description: 'Leading packers and movers providing professional relocation services across India and worldwide. Expert in domestic, international, and corporate moving solutions.',
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <main className="min-h-screen">
        <section className="bg-primary text-white py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Moving & Relocation Services
              </h1>
              <p className="text-lg mb-8">
                Expert packers and movers for all your relocation needs
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get a Quote
              </button>
            </div>
          </div>
        </section>
        
        <Services />
      </main>
    </>
  );
} 