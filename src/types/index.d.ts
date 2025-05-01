/// <reference types="react" />
/// <reference types="next" />

declare module 'framer-motion' {
  export const motion: any;
}

interface Service {
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface Stats {
  value: string;
  label: string;
  description: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
  message: string;
} 