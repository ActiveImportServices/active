'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  ArrowUp,
} from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Company Profile', href: '/company-profile' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Career', href: '/career' },
  { name: 'Contact Us', href: '/contact-us' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'http://www.facebook.com/pages/Active-Contracting-and-Import/429369960482472',
    icon: Facebook,
  },
  { name: 'Twitter', href: 'http://twitter.com', icon: Twitter },
  { name: 'YouTube', href: 'http://youtube.com', icon: Youtube },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary border-t border-white/5">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-14 w-56"
              >
                <Image
                  src="https://activecontracting.net/wp-content/uploads/2013/03/logo1.png"
                  alt="Active Contracting & Import Co"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-concrete text-sm leading-relaxed">
              Leading contracting company in Qatar since 2004. Specialized in
              limestone aggregate, road construction, and excavation services.
            </p>
            <div className="pt-2">
              <p className="text-accent font-semibold text-lg gradient-text">
                Breaking Ground To Success
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-concrete hover:text-accent transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@activecontracting.net"
                  className="flex items-start gap-3 text-concrete hover:text-accent transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info@activecontracting.net</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0097444882224"
                  className="flex items-start gap-3 text-concrete hover:text-accent transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+974 4488 2224</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-concrete">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Freej Clip-Ahmad Ben Ali Street
                  <br />
                  Ben Omran-Hiraa Complex No 6<br />
                  P.O.Box 63947
                  <br />
                  Doha, Qatar
                </span>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary/50 border border-white/10 flex items-center justify-center text-concrete hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2">
              <Link
                href="/contact-us"
                className="block px-4 py-2 rounded-lg bg-secondary/50 border border-white/10 text-concrete hover:text-accent hover:border-accent transition-all duration-300 text-sm text-center"
              >
                Email Us
              </Link>
              <Link
                href="/contact-us"
                className="block px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-yellow text-white hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-sm text-center font-semibold"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-concrete text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Active Contracting & Import Co.
              All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-concrete">
              <span>Established 2004</span>
              <span className="hidden md:inline">|</span>
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent-yellow text-white flex items-center justify-center shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
