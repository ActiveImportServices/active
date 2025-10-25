# Active Contracting & Import Co. - Modern Website

A cutting-edge, modern construction company website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Modern Design & UX
- **Dark Mode Theme**: Industrial construction aesthetic with deep navy, blacks, and accent oranges
- **Smooth Animations**: Framer Motion-powered scroll animations, parallax effects, and micro-interactions
- **Glass Morphism**: Modern glass effects for cards and overlays
- **Responsive Design**: Fully responsive, mobile-first approach
- **Hero Slider**: Immersive full-screen image slider with smooth transitions
- **Animated Statistics**: Counter animations with scroll triggers
- **Interactive Cards**: Hover effects with lift and scale animations

### Pages
1. **Homepage** - Hero slider, services overview, company highlights, statistics, and CTAs
2. **Company Profile** - Complete company history with animated timeline
3. **Services** - Detailed services with interactive cards and images
4. **Projects** - Portfolio grid with project showcases
5. **Gallery** - Masonry layout with lightbox functionality
6. **Career** - Modern job listings with application information
7. **Contact** - Contact form, map, and business information

### Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Form Handling**: React hooks with validation

## 🎨 Design Features

### Color Scheme
- Primary: Deep Navy (#0f172a)
- Secondary: Slate (#1e293b)
- Accent: Industrial Orange (#f97316)
- Accent Yellow: Machinery Yellow (#fbbf24)
- Concrete: #64748b
- Steel: #475569

### Components
- **Navbar**: Floating navigation with scroll effects
- **Footer**: Comprehensive footer with social links
- **HeroSlider**: Auto-playing image carousel
- **AnimatedSection**: Scroll-triggered animations
- **CounterAnimation**: Animated number counters
- **Card**: Reusable card component with glass effects
- **Button**: Animated button component with variants
- **Lightbox**: Full-screen image viewer for gallery

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

The development server will start at [http://localhost:3000](http://localhost:3000) (or next available port).

Visit the website at **http://localhost:3001** (currently running)

## 📝 Project Structure

```
active-contracting/
├── app/
│   ├── career/              # Career page
│   ├── company-profile/     # About page
│   ├── contact-us/          # Contact page
│   ├── gallery/             # Gallery page
│   ├── projects/            # Projects page
│   ├── services/            # Services page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── animations/          # Animation components
│   │   ├── AnimatedSection.tsx
│   │   ├── CounterAnimation.tsx
│   │   └── ParallaxSection.tsx
│   ├── layout/              # Layout components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── ui/                  # UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── HeroSlider.tsx
│       └── Lightbox.tsx
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── images/              # Static images
```

## 🎯 Key Features Implementation

### Smooth Scroll Animations
- Components fade and slide in as you scroll
- Using `react-intersection-observer` for scroll detection
- Customizable delay and direction

### Hero Slider
- Auto-playing carousel with 5-second intervals
- Smooth transitions with Framer Motion
- Navigation arrows and indicators
- Keyboard navigation support

### Animated Statistics
- Numbers count up when scrolled into view
- Spring animations for smooth counting
- Customizable duration and formatting

### Lightbox Gallery
- Full-screen image viewer
- Keyboard navigation (Arrow keys, Escape)
- Smooth transitions between images
- Image counter display

### Contact Form
- Client-side validation
- Success/error states
- Responsive design
- Form submission handling

## 🔧 Customization

### Updating Content

#### Homepage Slider
Edit the `slides` array in `app/page.tsx`:
```typescript
const slides = [
  {
    image: 'your-image-url.jpg',
    title: 'Your Title',
    subtitle: 'Your Subtitle',
  },
];
```

#### Services
Edit the `services` array in `app/services/page.tsx`

#### Job Listings
Edit the `jobOpenings` array in `app/career/page.tsx`

#### Gallery Images
Edit the `galleryImages` array in `app/gallery/page.tsx`

### Styling

The theme is configured in `app/globals.css` with CSS custom properties:
```css
:root {
  --primary: #0f172a;
  --accent: #f97316;
  --accent-yellow: #fbbf24;
  /* Add more custom properties */
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Philosophy

This website follows modern 2024/2025 design trends:
- Bold, large typography (60px+ headings on desktop)
- Generous white space
- Smooth, purposeful animations
- Industrial/construction color palette
- Glass morphism effects
- Dark mode first approach
- Premium, high-end feel

## 📄 License

© 2024 Active Contracting & Import Co. All rights reserved.

## 🤝 Support

For support, email info@activecontracting.net or call +974 4488 2224

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
