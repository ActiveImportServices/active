'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/animations/AnimatedSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Briefcase,
  MapPin,
  Clock,
  TrendingUp,
  Users,
  Award,
  Heart,
  ArrowRight,
  Mail,
} from 'lucide-react';

const jobOpenings = [
  { title: 'JCB Operators', category: 'Operations', type: 'Full-time' },
  {
    title: 'Vibrator Roller Operators',
    category: 'Operations',
    type: 'Full-time',
  },
  { title: 'Steel Roller Operators', category: 'Operations', type: 'Full-time' },
  { title: 'Tire Roller Operators', category: 'Operations', type: 'Full-time' },
  { title: 'Excavator Operators', category: 'Operations', type: 'Full-time' },
  { title: 'Pipefitters', category: 'Technical', type: 'Full-time' },
  { title: 'Laborers', category: 'Operations', type: 'Full-time' },
  { title: 'Quantity Surveyors', category: 'Engineering', type: 'Full-time' },
  { title: 'Project Engineers', category: 'Engineering', type: 'Full-time' },
  {
    title: 'Cost Control Engineers',
    category: 'Engineering',
    type: 'Full-time',
  },
  { title: 'Safety Officers', category: 'Safety', type: 'Full-time' },
  {
    title: 'Training & Development Officer',
    category: 'HR',
    type: 'Full-time',
  },
  { title: 'Employee Relations Officer', category: 'HR', type: 'Full-time' },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Clear Path to Leadership',
    description: 'Fast-track to management roles with structured career development and mentorship programs',
    color: 'from-orange-500 to-red-500',
    bgPattern: 'bg-gradient-to-br',
  },
  {
    icon: Award,
    title: 'Top 10% Compensation',
    description: 'Industry-leading packages that reward your expertise and dedication to excellence',
    color: 'from-yellow-500 to-orange-500',
    bgPattern: 'bg-gradient-to-tl',
  },
  {
    icon: Users,
    title: 'Award-Winning Engineers',
    description: 'Collaborate with Qatar\'s most experienced construction professionals on landmark projects',
    color: 'from-amber-500 to-yellow-500',
    bgPattern: 'bg-gradient-to-tr',
  },
  {
    icon: Heart,
    title: 'Flexible Hours, Real Results',
    description: 'Performance-driven culture that values output over hours and family commitments',
    color: 'from-orange-600 to-amber-500',
    bgPattern: 'bg-gradient-to-bl',
  },
];

export default function CareerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://activecontracting.net/wp-content/uploads/2013/03/IMG_0016.jpg"
            alt="Careers at Active Contracting"
            fill
            className="object-cover scale-110 animate-[scale_20s_ease-in-out_infinite_alternate]"
            priority
          />
          {/* Lighter overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          {/* Animated diagonal overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-yellow/20 opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-left max-w-4xl">
            {/* Animated Icon */}
            <div className="inline-flex mb-8 animate-[float_3s_ease-in-out_infinite]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center shadow-2xl shadow-accent/50 transform hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Bold, Large Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 leading-none tracking-tight">
              Build Your
              <br />
              <span className="gradient-text animate-[gradient-shift_3s_ease_infinite] bg-[length:200%_auto]">
                Career
              </span>
            </h1>

            {/* Improved Subtitle */}
            <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mb-8 font-medium leading-relaxed">
              Shape the future of construction with{' '}
              <span className="text-accent-yellow font-bold">Qatar's #1</span>{' '}
              contracting company
            </p>

            {/* CTA Button */}
            <a
              href="#vacancies"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-yellow text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-accent/20 rounded-lg rotate-45 animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-32 left-10 w-20 h-20 bg-accent-yellow/10 rounded-full animate-[float_4s_ease-in-out_infinite]" />
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Why Join Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Your <span className="gradient-text">Future</span> With Us
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              At Active Contracting & Import Co., we value professional skills,
              teamwork spirit, and dedication. Join us to be part of something
              extraordinary.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.15}>
                <div
                  className={`group relative overflow-hidden rounded-2xl p-8 h-full cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                    index % 2 === 0 ? 'md:translate-y-8' : ''
                  }`}
                >
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Geometric pattern */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                  {/* Icon with unique animation */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl`}
                    >
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-concrete text-lg leading-relaxed group-hover:text-white/90 transition-colors">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="vacancies" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Current Vacancies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
              Explore our current job openings.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <AnimatedSection key={job.title} delay={index * 0.05}>
                <Card className="group hover:border-accent/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Briefcase className="w-6 h-6 text-accent group-hover:text-white" />
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {job.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-concrete text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>Doha, Qatar</span>
                    </div>
                    <div className="flex items-center gap-2 text-concrete text-sm">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.category}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={`mailto:info@activecontracting.net?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to apply for the ${job.title} position.%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0ABest regards`}
                      className="flex items-center text-accent group-hover:gap-2 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm font-semibold ml-2">
                        Apply Now - Send CV to info@activecontracting.net
                      </span>
                      <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              How to Apply
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span className="gradient-text">Application</span> Process
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <Card className="text-center h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Choose Position
                </h3>
                <p className="text-concrete leading-relaxed">
                  Browse our open positions and find the role that matches your
                  skills and interests.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="text-center h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Submit Application
                </h3>
                <p className="text-concrete leading-relaxed">
                  Send your CV and cover letter to our HR department via email
                  or contact form.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="text-center h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Join Our Team
                </h3>
                <p className="text-concrete leading-relaxed">
                  Complete the interview process and start your career with
                  Qatar's leading contractor.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-yellow to-accent opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Join Us?</span>
            </h2>
            <p className="text-concrete text-xl mb-8">
              Send your CV to{' '}
              <a
                href="mailto:info@activecontracting.net"
                className="text-accent hover:text-accent-yellow transition-colors"
              >
                info@activecontracting.net
              </a>{' '}
              or contact us for more information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@activecontracting.net"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-accent to-accent-yellow text-white hover:shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
              >
                Send Your CV
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
    </>
  );
}
