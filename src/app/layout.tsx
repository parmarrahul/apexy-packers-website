import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Apexy Packers and Movers - Professional Moving & Relocation Services',
  description: 'Apexy Packers and Movers provides secure packing, moving, and transportation services with expert staff and advanced machinery for residential, commercial, and industrial moves.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-gray-400">
                  Apexy Packers and Movers provides secure packing, moving, and transportation services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Domestic Shifting</li>
                  <li>International Shifting</li>
                  <li>Corporate Shifting</li>
                  <li>Vehicle Transportation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/process">Our Process</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>+91 88173 57936</li>
                  <li>apexypackers@gmail.com</li>
                  <li>Shop No 5 Radhakrishna Market</li>
                  <li>Bhopal, Pin Code- 462043</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Apexy Packers and Movers. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 