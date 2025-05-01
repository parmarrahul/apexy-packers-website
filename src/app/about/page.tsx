import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Apexy Packers and Movers',
  description: 'Learn about Apexy Packers and Movers, your trusted partner for safe, reliable, and hassle-free relocation services.',
};

export default function AboutPage() {
  return (
    <div className="pt-36">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Apexy Packers and Movers is a trusted residential and commercial moving company committed to providing seamless relocation services. 
            With years of experience, we specialize in safe packing, secure transportation, and efficient delivery of household and office belongings.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our professional team ensures careful handling, using high-quality packing materials and advanced techniques to prevent damage during transit. 
            Whether it's a local move or a long-distance relocation, we guarantee a smooth and stress-free experience.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional moving and packing services with utmost care, professionalism, and reliability, ensuring complete customer satisfaction.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted name in the relocation industry, known for our quality service, integrity, and customer-centric approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 