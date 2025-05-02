'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top bar */}
      <div className="bg-white py-2 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="tel:+918817357936" className="flex items-center text-gray-600 hover:text-primary">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span>+91 88173 57936</span>
              </a>
              <a href="mailto:apexypackers@gmail.com" className="flex items-center text-gray-600 hover:text-primary">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                <span>apexypackers@gmail.com</span>
              </a>
            </div>
            <div>
              <button className="text-[#ff5e14] hover:text-[#e54d0a] font-medium transition-colors">
                Request A Call Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                Apexy Packers
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
              <Link href="/process" className="text-gray-700 hover:text-primary transition-colors">Process</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
              <button className="bg-[#ff5e14] text-white px-6 py-3 rounded hover:bg-[#e54d0a] transition-colors">
                Get A Quote
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 