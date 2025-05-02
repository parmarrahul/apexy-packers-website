'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Office Manager",
    content: "Excellent service! The team was professional and handled our office relocation with great care. Everything was delivered on time and in perfect condition.",
    image: "https://www.apexypackers.com/assets/img/movers-client1.jpg"
  },
  {
    name: "Ragani Nutrisha",
    role: "HR Manager",
    content: "Very impressed with their international moving services. They made our corporate relocation smooth and hassle-free. Highly recommended!",
    image: "https://www.apexypackers.com/assets/img/movers-client1.jpg"
  },
  {
    name: "Reyansh Singh",
    role: "Business Owner",
    content: "The best packers and movers I've worked with. Their attention to detail and customer service is outstanding. Will definitely use their services again.",
    image: "https://www.apexypackers.com/assets/img/movers-client1.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our clients praise our reliable service, secure packing, timely delivery, 
            professional team, and hassle-free relocation experience.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="testimonials-slider pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = testimonial.image.replace('/assets/img/', '/assets/images/');
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
                <div className="mt-4 text-primary">★★★★★</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials; 