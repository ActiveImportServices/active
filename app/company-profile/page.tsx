import Image from 'next/image';
import AnimatedSection from '@/components/animations/AnimatedSection';
import CounterAnimation from '@/components/animations/CounterAnimation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Target,
  Eye,
  Award,
  Users,
  Building2,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Profile | Active Contracting & Import Co.',
  description:
    'Learn about Active Contracting & Import Co. - Leading construction company in Qatar since 2004. Our history, mission, vision, and commitment to excellence.',
};

const timeline = [
  {
    year: '2004',
    title: 'Company Founded',
    description:
      'Active Contracting and Import Co. established in Qatar, bringing construction expertise from Lebanon and African countries.',
  },
  {
    year: '2008',
    title: 'Expansion & Growth',
    description:
      'Expanded operations across Qatar with focus on limestone aggregate production and road construction.',
  },
  {
    year: '2012',
    title: 'Major Milestone',
    description:
      'Awarded the largest crusher site in Qatar, establishing the largest production line in the country.',
  },
  {
    year: '2015',
    title: 'ISO Certification',
    description:
      'Achieved ISO certification, setting new standards for quality and excellence in the construction industry.',
  },
  {
    year: '2020',
    title: 'International Recognition',
    description:
      'Competing on international level for large-scale projects with world-class quality and delivery.',
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description:
      'Recognized as one of the leading contracting companies in the Middle East region.',
  },
];

const stats = [
  { number: 20, label: 'Years of Excellence', suffix: '+' },
  { number: 500, label: 'Projects Completed', suffix: '+' },
  { number: 100, label: 'Team Members', suffix: '+' },
  { number: 50, label: 'Active Projects', suffix: '+' },
];

const values = [
  {
    icon: Target,
    title: 'Quality Excellence',
    description:
      'Committed to delivering the highest quality in every project we undertake.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description:
      'Highly skilled engineers and workforce dedicated to excellence.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description:
      'Utilizing cutting-edge technology and modern equipment for superior results.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description:
      'Environmentally responsible practices in all our operations.',
  },
];

export default function CompanyProfile() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://activecontracting.net/wp-content/uploads/2013/03/IMG_0140-e1401133674861.jpg"
            alt="Active Contracting Company Profile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Company <span className="gradient-text">Profile</span>
            </h1>
            <p className="text-xl md:text-2xl text-concrete max-w-3xl mx-auto">
              Building Excellence Since 2004 | Leading the Construction Industry
              in Qatar
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 -mt-10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <Card className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <CounterAnimation end={stat.number} suffix={stat.suffix} />
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

      {/* About Content */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://activecontracting.net/wp-content/uploads/2013/03/IMG_1265-e1401133954803.jpg"
                  alt="Active Contracting Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Breaking Ground To <span className="gradient-text">Success</span>
              </h2>

              <div className="space-y-4 text-concrete text-lg leading-relaxed">
                <p>
                  Active Contracting and Import Co is one of the leading
                  contracting companies in the Middle East region. Established in
                  2004 in Qatar, the company was previously operating in Lebanon
                  and other African countries under different names.
                </p>

                <p>
                  The scope of work of the company includes several contracting
                  sectors encompassing both the vertical and horizontal
                  construction. We are specialized in providing limestone
                  aggregate materials of all sizes; in addition to the execution
                  of backfilling and excavation works.
                </p>

                <p>
                  In 2012 Active Contracting and Import has been awarded the
                  largest crusher site in the state of Qatar and it has now the
                  largest line of production in Qatar competing in both quality
                  and quantity of production with several other domestic and
                  international companies.
                </p>

                <p>
                  Our road to success is summarized by the professional skills our
                  employees, engineers and workforce bring to the work environment,
                  in addition to our team work spirit and the trust our clients
                  have in us. We are doing the best in terms of quality of work
                  for the satisfaction of our clients and the objective of having
                  ACI competing on the International level for large scale
                  projects.
                </p>
              </div>

              <div className="mt-8">
                <Button size="lg" href="/contact-us">Get In Touch</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <Card className="h-full p-8 md:p-12">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-concrete text-lg leading-relaxed">
                  To deliver world-class construction solutions with unwavering
                  commitment to quality, safety, and innovation. We strive to
                  exceed client expectations while maintaining the highest
                  standards of professional excellence and environmental
                  responsibility.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card className="h-full p-8 md:p-12">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-yellow to-accent flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-concrete text-lg leading-relaxed">
                  To be the most trusted and innovative construction company in
                  the Middle East, recognized globally for our excellence in
                  delivering large-scale infrastructure projects that shape the
                  future and contribute to sustainable development.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Two Decades of <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              From humble beginnings to industry leadership, our journey reflects
              dedication, innovation, and unwavering commitment to excellence.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-yellow to-accent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 0.1}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] ml-20 md:ml-0">
                    <Card className="p-6">
                      <div className="text-4xl font-bold gradient-text mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-concrete leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-accent-yellow transform -translate-x-1/2 md:translate-x-0 shadow-lg shadow-accent/50" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Drives <span className="gradient-text">Our Success</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="h-full text-center group">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-yellow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-concrete leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-yellow to-accent opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work <span className="gradient-text">With Us?</span>
            </h2>
            <p className="text-concrete text-xl mb-8">
              Partner with Qatar's leading construction company for your next
              project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" href="/contact-us">Contact Us</Button>
              <Button size="lg" variant="outline" href="/services">
                View Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
