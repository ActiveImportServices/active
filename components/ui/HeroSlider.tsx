'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

const slides = [
  {
    image:
      'https://activecontracting.net/wp-content/uploads/2013/12/IMG-20131210-WA0002.jpg',
    title: 'Breaking Ground To Success',
    subtitle: 'Leading Contracting Company in Qatar Since 2004',
  },
  {
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_0140-e1401133674861.jpg',
    title: 'Excellence in Construction',
    subtitle: 'Premium Limestone Aggregate & Road Contracting Services',
  },
  {
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_0016.jpg',
    title: 'Building the Future',
    subtitle: 'State-of-the-Art Equipment & Professional Workforce',
  },
  {
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/slider12.jpg',
    title: 'Quality & Innovation',
    subtitle: 'Largest Production Line in Qatar',
  },
  {
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_1259-e1401133823653.jpg',
    title: 'Trusted Partner',
    subtitle: 'Delivering Excellence Across the Middle East',
  },
  {
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_1265-e1401133954803.jpg',
    title: 'Infrastructure Development',
    subtitle: 'Complete Solutions for Large-Scale Projects',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover scale-110 animate-[scale_20s_ease-in-out_infinite_alternate]"
              priority={currentSlide === 0}
              quality={90}
            />
            {/* LIGHTER Gradient Overlays for visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            {/* Diagonal accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-yellow/15" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-5xl"
              >
                {/* Animated line above title - THICKER and MORE VIBRANT */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="h-2 bg-gradient-to-r from-accent to-accent-yellow mb-8 rounded-full shadow-lg shadow-accent/50"
                />

                {/* MASSIVE BOLD HEADING */}
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-none tracking-tight drop-shadow-2xl"
                >
                  {slides[currentSlide].title.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="inline-block mr-4"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* IMPROVED SUBTITLE */}
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-10 font-medium leading-relaxed max-w-3xl drop-shadow-lg"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* POWERFUL CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    href="/services"
                    className="text-xl px-10 py-5 shadow-2xl shadow-accent/50"
                  >
                    Our Services
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    href="/contact-us"
                    className="text-xl px-10 py-5 border-3 backdrop-blur-sm bg-white/5"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Floating geometric shapes */}
          <div className="absolute top-32 right-32 w-40 h-40 border-2 border-accent/20 rounded-lg rotate-45 animate-[spin_20s_linear_infinite] hidden lg:block" />
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent-yellow/10 rounded-full animate-[float_4s_ease-in-out_infinite] backdrop-blur-sm hidden lg:block" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-gradient-to-r from-accent to-accent-yellow'
                : 'w-8 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
