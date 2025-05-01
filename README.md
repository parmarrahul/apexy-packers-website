# Apexy Packers and Movers Website

A modern, responsive website for Apexy Packers and Movers built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern and responsive design
- Smooth animations with Framer Motion
- SEO optimized
- Fast loading with Next.js
- Type-safe with TypeScript
- Beautiful UI with Tailwind CSS
- Interactive contact form
- Testimonials slider
- Animated statistics
- Mobile-friendly navigation

## Prerequisites

1. Install Node.js:
   - Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)
   - Recommended version: 18.x or later
   - After installation, restart your computer

2. Verify installation:
   Open PowerShell or Command Prompt and run:
   ```bash
   node --version
   npm --version
   ```
   Both commands should display version numbers.

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd apexy-packers
```

2. Run the setup script:
```powershell
# On Windows (PowerShell)
.\setup.ps1

# On Linux/Mac
chmod +x setup.sh
./setup.sh
```

3. Start the development server:
```bash
npm run dev
```

The website should now be running at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
apexy-packers/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Services.tsx  # Services section
│   │   ├── Stats.tsx     # Statistics section
│   │   ├── Testimonials.tsx # Testimonials slider
│   │   └── ContactForm.tsx  # Contact form
│   └── types/
│       └── index.d.ts    # TypeScript declarations
├── public/
│   └── images/           # Image assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── setup.ps1             # Windows setup script
├── setup.sh             # Linux/Mac setup script
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Required Images

Add the following images to the `public/images` directory:
- `moving-truck.jpg` - Hero section image
- `domestic-shifting.jpg` - Domestic shifting service
- `vehicle-shifting.jpg` - Vehicle transport service
- `international-shifting.jpg` - International shipping
- `corporate-shifting.jpg` - Corporate relocation

Add testimonial images to `public/images/testimonials/`:
- `aarav.jpg`
- `ragani.jpg`
- `reyansh.jpg`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@apexypackers.com or call +91 9826610106. 