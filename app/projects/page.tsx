import Image from 'next/image';
import AnimatedSection from '@/components/animations/AnimatedSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Building2, Clock, MapPin, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Active Contracting & Import Co.',
  description:
    'Explore our portfolio of completed and ongoing construction projects across Qatar. From infrastructure to building construction.',
};

const projects = [
  {
    title: 'Major Infrastructure Development',
    category: 'Road Construction',
    location: 'Doha, Qatar',
    status: 'Coming Soon',
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_0140-e1401133674861.jpg',
    description:
      'Large-scale road construction project utilizing our premium limestone aggregate and modern equipment.',
  },
  {
    title: 'Commercial Complex',
    category: 'Building Construction',
    location: 'Qatar',
    status: 'Coming Soon',
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_1259-e1401133823653.jpg',
    description:
      'Multi-story commercial building with complete excavation and construction services.',
  },
  {
    title: 'Industrial Site Development',
    category: 'Excavation & Aggregate',
    location: 'Qatar',
    status: 'Coming Soon',
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_1265-e1401133954803.jpg',
    description:
      'Comprehensive site development including excavation, backfilling, and aggregate supply.',
  },
  {
    title: 'Residential Development',
    category: 'Building Construction',
    location: 'Doha, Qatar',
    status: 'Coming Soon',
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/IMG_0016.jpg',
    description:
      'High-quality residential construction with modern design and superior finishing.',
  },
  {
    title: 'Highway Extension Project',
    category: 'Road Construction',
    location: 'Qatar',
    status: 'Coming Soon',
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/slider12.jpg',
    description:
      'Major highway construction project demonstrating our expertise in large-scale infrastructure.',
  },
  {
    title: 'Parking Complex',
    category: 'Parking Lot Construction',
    location: 'Qatar',
    status: 'Coming Soon',
    image:
      'https://activecontracting.net/wp-content/uploads/2013/03/shutterstock_30704257-365x243.jpg',
    description:
      'Modern parking facility with efficient design and durable construction.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://activecontracting.net/wp-content/uploads/2013/12/IMG-20131210-WA0002.jpg"
            alt="Active Contracting Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-concrete max-w-3xl mx-auto">
              Building Qatar's Future, One Project at a Time
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              Showcasing our expertise in delivering world-class construction
              projects across various sectors.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <Card className="h-full overflow-hidden p-0 group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                  </div>

                  <div className="p-6">
                    <div className="text-accent text-sm font-semibold mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-concrete leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-concrete">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <Card className="text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  500+
                </div>
                <div className="text-concrete">Projects Completed</div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-yellow to-accent flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-concrete">Active Projects</div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">20+</div>
                <div className="text-concrete">Years Experience</div>
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
              Ready to Start Your{' '}
              <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-concrete text-xl mb-8">
              Let's discuss how we can bring your vision to life with our
              expertise and commitment to excellence.
            </p>
            <Button size="lg" href="/contact-us">Get Started Today</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
