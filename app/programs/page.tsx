import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE, CONTACT, EXTERNAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Programs | ${SITE.nameAccented}`,
  description: `Explore ${SITE.nameAccented} programs: competitive teams, summer camps, and tryouts for youth soccer players ages U6-U19 in Santa Barbara, CA.`,
  openGraph: {
    title: `Programs | ${SITE.nameAccented}`,
    description: `Competitive teams, summer camps, and development programs for youth soccer in Santa Barbara.`,
    url: `${SITE.url}/programs`,
  },
};

const programs = [
  {
    title: 'Competitive Teams',
    subtitle: 'Ages U8 - U19 | Year-Round',
    description:
      'Our competitive program is the heart of Único FC. Teams train year-round and compete in the Coast Soccer League under Cal South. Players develop technical skill, tactical intelligence, and the mental toughness needed to excel at every level.',
    features: [
      'Year-round training with licensed coaches',
      'Coast Soccer League competition',
      'Tournament play throughout California',
      'Age-appropriate development curriculum',
      'Boys and girls teams from U8 to U19',
    ],
    image: '/images/gallery-6.jpg',
    cta: { label: 'Try Out for a Team', href: '/tryouts' },
  },
  {
    title: 'Summer Camps',
    subtitle: 'All Ages | Summer Sessions',
    description:
      'Intensive skills development camps led by our experienced coaching staff. Perfect for players looking to sharpen their technique and game IQ during the off-season. Open to all skill levels.',
    features: [
      'Expert coaching in a fun environment',
      'Technical skills and tactical training',
      'Small-sided games and scrimmages',
      'Character building and teamwork',
      'All skill levels welcome',
    ],
    image: '/images/gallery-7.jpg',
    cta: { label: 'Learn About Camps', href: '/camps' },
  },
  {
    title: 'Player Development',
    subtitle: 'All Ages | Ongoing',
    description:
      'Our development philosophy centers on building technically skilled, tactically intelligent, and mentally strong athletes. Every session is designed to challenge players while fostering a love for the beautiful game.',
    features: [
      'Individual skill development plans',
      'Position-specific training sessions',
      'Video analysis and feedback',
      'Physical conditioning programs',
      'Mental performance coaching',
    ],
    image: '/images/gallery-8.jpg',
    cta: { label: 'Contact Us', href: '/contact' },
  },
];

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary-dark">
        <Image
          src="/images/team-group.jpg"
          alt="Único FC training session"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary/60" />
        <div className="relative z-10 px-6 py-24 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            {SITE.nameAccented}
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            OUR PROGRAMS
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Comprehensive youth soccer development for every age and skill level
            in Santa Barbara.
          </p>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, idx) => (
        <section
          key={program.title}
          className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-surface'}`}
        >
          <div className="container-site">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                idx % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:[direction:ltr]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="lg:[direction:ltr]">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
                  {program.subtitle}
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary-dark md:text-4xl">
                  {program.title}
                </h2>
                <div className="section-divider mt-4" />
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  {program.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={program.cta.href}
                  className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-primary-light hover:shadow-lg"
                >
                  {program.cta.label}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Registration CTA */}
      <section className="relative py-24">
        <Image
          src="/images/team-celebrate.jpg"
          alt="Único FC celebrating together"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/80" />
        <div className="container-site relative z-10 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            READY TO GET STARTED?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Register today or contact us to learn which program is the right fit
            for your player.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={EXTERNAL_LINKS.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-14 px-10 text-base"
            >
              Register Now
            </a>
            <Link href="/contact" className="btn-outline h-14 px-10 text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
