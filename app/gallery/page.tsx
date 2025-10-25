'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/animations/AnimatedSection';
import Lightbox from '@/components/ui/Lightbox';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';
import type { Metadata } from 'next';

const galleryImages = [
  {
    url: 'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_11352925-365x243.jpg',
    thumbnail:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_11352925-180x100.jpg',
    title: 'Construction Equipment',
  },
  {
    url: 'https://activecontracting.net/wp-content/uploads/2013/03/IMG_12651-365x243.jpg',
    thumbnail:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_12651-180x100.jpg',
    title: 'Site Operations',
  },
  {
    url: 'https://activecontracting.net/wp-content/uploads/2013/03/IMG_0038-365x243.jpg',
    thumbnail:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_0038-180x100.jpg',
    title: 'Construction Site',
  },
  {
    url: 'https://activecontracting.net/wp-content/uploads/2013/03/IMG_1279-365x243.jpg',
    thumbnail:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_1279-180x100.jpg',
    title: 'Heavy Machinery',
  },
  {
    url: 'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_174041411-365x244.jpg',
    thumbnail:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_174041411-180x100.jpg',
    title: 'Road Construction',
  },
  {
    url: 'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_30704257-365x243.jpg',
    thumbnail:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_30704257-180x100.jpg',
    title: 'Infrastructure Development',
  },
  {
    url: 'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_73286953-365x243.jpg',
    thumbnail:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_73286953-180x100.jpg',
    title: 'Construction Work',
  },
  {
    url: 'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_85709279-365x243.jpg',
    thumbnail:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_85709279-180x100.jpg',
    title: 'Building Construction',
  },
];

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://activecontracting.net/wp-content/uploads/2013/03/IMG_1259-e1401133823653.jpg"
            alt="Active Contracting Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Project <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-concrete max-w-3xl mx-auto">
              Explore our work through images of completed projects and ongoing
              operations
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Our Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Excellence in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              Browse through our gallery showcasing construction equipment,
              completed projects, and ongoing operations across Qatar.
            </p>
          </AnimatedSection>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={image.url} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -8 }}
                  onClick={() => openLightbox(index)}
                  className="relative group cursor-pointer rounded-xl overflow-hidden bg-secondary/50 border border-white/5 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Image Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-sm md:text-base">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Image Count */}
          <AnimatedSection className="mt-12 text-center">
            <p className="text-concrete text-lg">
              Showing {galleryImages.length} images from our project portfolio
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to See <span className="gradient-text">More?</span>
            </h2>
            <p className="text-concrete text-xl mb-8">
              Visit our projects page for detailed information about our
              completed and ongoing work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-accent to-accent-yellow text-white hover:shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages.map((img) => img.url)}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
