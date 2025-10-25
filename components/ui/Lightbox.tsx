'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
}: LightboxProps) {
  const [index, setIndex] = useState(currentIndex);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300 z-10"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 left-4 px-4 py-2 glass rounded-full text-white text-sm font-semibold z-10">
          {index + 1} / {images.length}
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-7xl w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full h-full max-h-[90vh]">
            <Image
              src={images[index]}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-contain"
              quality={95}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
