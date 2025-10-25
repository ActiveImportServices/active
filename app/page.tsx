import HeroSlider from '@/components/ui/HeroSlider';
import AnimatedSection from '@/components/animations/AnimatedSection';
import CounterAnimation from '@/components/animations/CounterAnimation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  TruckIcon,
  HardHat,
  Layers,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Limestone Aggregate',
    description:
      'Premium quality raw limestone aggregate materials of all sizes for construction purposes.',
  },
  {
    icon: TruckIcon,
    title: 'Road Contracting',
    description:
      'Complete road construction and parking lot contracting with modern equipment.',
  },
  {
    icon: HardHat,
    title: 'Excavation Services',
    description:
      'Professional excavation of building basements, trenches, and site preparation.',
  },
  {
    icon: Building2,
    title: 'Building Construction',
    description:
      'High-rise building apartments and single-family houses with expert engineering.',
  },
];

const stats = [
  { number: 2004, label: 'Established', suffix: '' },
  { number: 20, label: 'Years Experience', suffix: '+' },
  { number: 500, label: 'Projects Completed', suffix: '+' },
  { number: 100, label: 'Team Members', suffix: '+' },
];

const features = [
  'ISO Certified Company',
  'Largest Crusher Site in Qatar',
  'Modern Equipment Fleet',
  'Expert Engineering Team',
  'Quality Assurance',
  '24/7 Customer Support',
];

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="relative py-20 -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <Card className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <CounterAnimation
                      end={stat.number}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-concrete text-sm md:text-base">
                    {stat.label}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 animated-gradient opacity-30" />
        {/* Atmospheric glow orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://activecontracting.net/wp-content/uploads/2013/03/thumb.jpg"
                  alt="Active Contracting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div>
                <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
                  About Active Contracting
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Breaking Ground To{' '}
                  <span className="gradient-text">Success</span>
                </h2>
                <p className="text-concrete text-lg mb-6 leading-relaxed">
                  Active Contracting and Import Co is one of the leading
                  contracting companies in the Middle East region. Established
                  in 2004 in Qatar, we bring decades of expertise in delivering
                  world-class construction solutions.
                </p>
                <p className="text-concrete text-lg mb-8 leading-relaxed">
                  In 2012, we were awarded the largest crusher site in Qatar,
                  establishing the largest production line competing in both
                  quality and quantity with international companies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" href="/company-profile">Learn More</Button>
                  <Button size="lg" variant="outline" href="/projects">
                    View Projects
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative border-t border-white/5">
        <div className="absolute inset-0 bg-deep-space opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete <span className="gradient-text">Construction</span>{' '}
              Solutions
            </h2>
            <p className="text-concrete text-lg">
              From limestone aggregate production to complete infrastructure
              development, we deliver excellence across all construction
              disciplines.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link href="/services">
                  <Card className="h-full group cursor-pointer">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-concrete leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-accent group-hover:gap-2 transition-all duration-300">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button size="lg" href="/services">View All Services</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Trusted{' '}
                <span className="gradient-text">Construction</span> Partner
              </h2>
              <p className="text-concrete text-lg mb-8 leading-relaxed">
                Our road to success is built on professional expertise, teamwork
                spirit, and the trust our clients place in us. We deliver the
                highest quality of work to compete on the international level.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" href="/contact-us">Get Started Today</Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-8">
                  <Award className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Award Winning
                  </h3>
                  <p className="text-concrete">
                    Recognized for excellence in construction
                  </p>
                </Card>
                <Card className="p-8 mt-8">
                  <Users className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Expert Team
                  </h3>
                  <p className="text-concrete">
                    Highly skilled professionals
                  </p>
                </Card>
                <Card className="p-8 -mt-8">
                  <Building2 className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Largest Site
                  </h3>
                  <p className="text-concrete">Biggest crusher in Qatar</p>
                </Card>
                <Card className="p-8">
                  <Layers className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Quality First
                  </h3>
                  <p className="text-concrete">
                    ISO certified excellence
                  </p>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-yellow/20 to-accent/20" />
        <div className="absolute inset-0 bg-rich-navy opacity-80" />
        {/* Dramatic glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your{' '}
              <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="text-concrete text-xl mb-8">
              Let's build something extraordinary together. Contact us today for
              a consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" href="/contact-us">Contact Us Now</Button>
              <Button size="lg" variant="outline" href="/projects">
                View Our Work
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
