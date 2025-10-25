import Image from 'next/image';
import AnimatedSection from '@/components/animations/AnimatedSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Layers,
  TruckIcon,
  HardHat,
  Building2,
  Ruler,
  Trees,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Active Contracting & Import Co.',
  description:
    'Comprehensive construction services including limestone aggregate, road contracting, excavation, building construction, and landscaping in Qatar.',
};

const services = [
  {
    icon: Layers,
    title: 'Raw Limestone Aggregate',
    description:
      'Premium quality limestone aggregate materials of all sizes for construction purposes. Our largest crusher site in Qatar ensures consistent supply and superior quality.',
    features: [
      'All aggregate sizes available',
      'Consistent quality control',
      'Largest production line in Qatar',
      'Timely delivery guaranteed',
    ],
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_11352925-365x243.jpg',
  },
  {
    icon: TruckIcon,
    title: 'Road Contracting',
    description:
      'Complete road construction services with modern equipment and experienced workforce. We handle projects of all scales with precision and efficiency.',
    features: [
      'Highway construction',
      'Urban road development',
      'Road maintenance',
      'Quality paving services',
    ],
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_174041411-365x244.jpg',
  },
  {
    icon: Building2,
    title: 'Parking Lot Contracting',
    description:
      'Professional parking lot design and construction services. From commercial complexes to residential areas, we deliver durable and efficient parking solutions.',
    features: [
      'Custom design solutions',
      'Drainage systems',
      'Line marking & signage',
      'Durable surface materials',
    ],
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_30704257-365x243.jpg',
  },
  {
    icon: HardHat,
    title: 'Excavation Services',
    description:
      'Expert excavation services for building basements, trenches, and site preparation. Our skilled operators and modern machinery ensure precision and safety.',
    features: [
      'Building basement excavation',
      'Trench excavation',
      'Site preparation',
      'Backfilling services',
    ],
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_1279-365x243.jpg',
  },
  {
    icon: Trees,
    title: 'Landscaping',
    description:
      'Comprehensive landscaping services to enhance the beauty and functionality of your property. Professional design and execution for all types of projects.',
    features: [
      'Landscape design',
      'Irrigation systems',
      'Garden maintenance',
      'Green space development',
    ],
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_73286953-365x243.jpg',
  },
  {
    icon: Building2,
    title: 'Building Construction',
    description:
      'High-rise building apartments and single-family houses construction. Our experienced engineers and workforce deliver successful performance in all building projects.',
    features: [
      'High-rise apartments',
      'Single-family houses',
      'Commercial buildings',
      'Structural engineering',
    ],
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_0038-365x243.jpg',
  },
];

const additionalServices = [
  'Complete project management',
  'Quality assurance & control',
  'Safety compliance',
  'Environmental management',
  'Equipment rental services',
  '24/7 emergency support',
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://activecontracting.net/wp-content/uploads/2013/03/IMG_1259-e1401133823653.jpg"
            alt="Active Contracting Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-concrete max-w-3xl mx-auto">
              Complete Construction Solutions for Every Project Need
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Specialized in Providing Complete{' '}
              <span className="gradient-text">Construction Services</span>
            </h2>
            <p className="text-concrete text-lg leading-relaxed mb-4">
              The company is specialized in providing raw limestone aggregate for
              construction purposes; in addition to the contracting of roads and
              parking lots. ACI has also other disciplines of work which includes
              excavation of building basements, trenches plus landscaping.
            </p>
            <p className="text-concrete text-lg leading-relaxed">
              Our experienced engineers and workforce have also shown successful
              performance in erecting high rise building apartments and single
              family houses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Card className="h-full p-8">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mb-4">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-4">
                        {service.title}
                      </h3>

                      <p className="text-concrete text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-accent" />
                            </div>
                            <span className="text-white">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Additional Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete <span className="gradient-text">Support</span> Services
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={service} delay={index * 0.05}>
                <Card className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">{service}</span>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-yellow to-accent opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a <span className="gradient-text">Custom Solution?</span>
            </h2>
            <p className="text-concrete text-xl mb-8">
              Contact us to discuss your specific project requirements and get a
              tailored solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" href="/contact-us">Get a Quote</Button>
              <Button size="lg" variant="outline" href="/projects">
                View Projects
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
