'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Company Profile', href: '/company-profile' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Career', href: '/career' },
  { name: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Hidden on scroll */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -100 : 0,
        }}
        className="hidden lg:block bg-primary/95 backdrop-blur-sm border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 text-sm">
            <div className="flex items-center gap-6 text-concrete">
              <a
                href="mailto:info@activecontracting.net"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@activecontracting.net
              </a>
              <a
                href="tel:0097444882224"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +974 4488 2224
              </a>
            </div>
            <div className="text-concrete">
              Established 2004 | Leading Contracting Company in Qatar
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-xl shadow-black/20'
            : 'bg-primary/80 backdrop-blur-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-14 w-56"
              >
                <Image
                  src="https://activecontracting.net/wp-content/uploads/2013/03/logo1.png"
                  alt="Active Contracting & Import Co"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-white hover:text-accent transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-yellow group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-accent hover:bg-secondary/50 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-secondary/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-primary hover:text-accent transition-all duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                  <a
                    href="mailto:info@activecontracting.net"
                    className="flex items-center gap-2 px-4 py-2 text-concrete hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@activecontracting.net
                  </a>
                  <a
                    href="tel:0097444882224"
                    className="flex items-center gap-2 px-4 py-2 text-concrete hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +974 4488 2224
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
