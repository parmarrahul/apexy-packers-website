'use client';

import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Get in touch with us for reliable moving services. We provide 24/7 support and ensure a smooth relocation experience.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    Shop No 5 Radhakrishna Market Rapadiya Road Near Shubham Warehouse, 11-mile Bypass, Bhopal, Pin Code- 462043
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+919826610106" className="hover:text-primary">+91 9826610106</a>
                    <br />
                    <a href="tel:+918817357936" className="hover:text-primary">+91 88173 57936</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <EnvelopeIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@apexypackers.com" className="hover:text-primary">info@apexypackers.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ClockIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-600">Mon - Sun 9:00AM TO 9PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
} 