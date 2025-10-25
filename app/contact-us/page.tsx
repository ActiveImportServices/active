'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/animations/AnimatedSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+974 4488 2224'],
    link: 'tel:0097444882224',
  },
  {
    icon: Phone,
    title: 'Fax',
    details: ['+974 4486 1161'],
    link: null,
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@activecontracting.net'],
    link: 'mailto:info@activecontracting.net',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: [
      'Freej Clip-Ahmad Ben Ali Street',
      'Ben Omran-Hiraa Complex No 6',
      'P.O.Box 63947',
      'Doha, Qatar',
    ],
    link: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://activecontracting.net/wp-content/uploads/2013/03/IMG_1265-e1401133954803.jpg"
            alt="Contact Active Contracting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-concrete max-w-3xl mx-auto">
              Get in Touch - We're Here to Help With Your Construction Needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Reach Out
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <Card className="text-center h-full">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-concrete text-sm">
                        {info.link && i === 0 ? (
                          <a
                            href={info.link}
                            className="hover:text-accent transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <Card className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Send Us a Message
                </h3>
                <p className="text-concrete mb-6">
                  Fill out the form and we'll get back to you as soon as
                  possible.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <p className="text-green-500 text-sm">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-semibold mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-primary border border-white/10 text-white placeholder-concrete focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white text-sm font-semibold mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-primary border border-white/10 text-white placeholder-concrete focus:border-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white text-sm font-semibold mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-primary border border-white/10 text-white placeholder-concrete focus:border-accent focus:outline-none transition-colors"
                        placeholder="+974 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-white text-sm font-semibold mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-primary border border-white/10 text-white placeholder-concrete focus:border-accent focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white text-sm font-semibold mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-primary border border-white/10 text-white placeholder-concrete focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </AnimatedSection>

            {/* Map & Business Hours */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                {/* Map */}
                <Card className="p-0 overflow-hidden">
                  <div className="relative h-[400px]">
                    <Image
                      src="https://activecontracting.net/wp-content/uploads/2013/03/map2.jpg"
                      alt="Active Contracting Location Map"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card>

                {/* Business Hours */}
                <Card className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Business Hours
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-concrete">Sunday - Thursday</span>
                      <span className="text-white font-semibold">
                        7:00 AM - 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-concrete">Friday</span>
                      <span className="text-white font-semibold">Closed</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-concrete">Saturday</span>
                      <span className="text-white font-semibold">
                        8:00 AM - 2:00 PM
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <p className="text-accent text-sm">
                      <strong>24/7 Emergency Support Available</strong>
                      <br />
                      For urgent inquiries, please call us anytime.
                    </p>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prefer a <span className="gradient-text">Direct Call?</span>
            </h2>
            <p className="text-concrete text-xl mb-8">
              Our team is ready to assist you with any inquiries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0097444882224"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-accent to-accent-yellow text-white hover:shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
              <a
                href="mailto:info@activecontracting.net"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
