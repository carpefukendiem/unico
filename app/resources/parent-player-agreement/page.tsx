import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Parent/Player Agreement | ${SITE.nameAccented}`,
  description: `Review the ${SITE.nameAccented} Parent/Player Agreement. Important guidelines for players and families participating in our competitive youth soccer programs.`,
};

const sections = [
  {
    title: 'Player Conduct',
    items: [
      'Players will demonstrate good sportsmanship at all times during practices, games, and team events.',
      'Players will respect coaches, referees, opponents, and teammates at all times.',
      'Players will attend all scheduled practices and games unless excused in advance by the coach.',
      'Players will arrive on time, properly equipped, and ready to participate.',
      'Players will refrain from using abusive or inappropriate language on or off the field.',
      'Players will follow all rules and guidelines set by the coaching staff.',
    ],
  },
  {
    title: 'Parent/Guardian Conduct',
    items: [
      'Parents will support the coaching staff and refrain from coaching from the sidelines.',
      'Parents will demonstrate positive sportsmanship and be respectful to all participants, officials, and spectators.',
      'Parents will refrain from confronting coaches, referees, or other parents in a negative manner during games or practices.',
      'Parents will communicate concerns to the coaching staff in a private, respectful setting.',
      'Parents will ensure players arrive on time and are picked up promptly after practices and games.',
      'Parents will fulfill all financial obligations to the club on time.',
    ],
  },
  {
    title: 'Commitment & Attendance',
    items: [
      'Players are expected to attend a minimum of 80% of all practices and games.',
      'Advance notice must be given for any planned absences.',
      'Unexcused absences may result in reduced playing time.',
      'Players who miss practices without notice risk losing their roster spot.',
      'Family vacations and school commitments should be communicated to coaches at the start of the season.',
    ],
  },
  {
    title: 'Financial Responsibilities',
    items: [
      'All registration fees must be paid in full by the specified due dates.',
      'Families are responsible for purchasing required uniforms and equipment.',
      'Tournament fees and travel costs are the responsibility of the family unless otherwise specified.',
      'Refund policies will be communicated at the time of registration.',
      'Financial hardship situations should be discussed privately with club administration.',
    ],
  },
  {
    title: 'Communication',
    items: [
      'The club will communicate through official channels (email, team apps, and the club website).',
      'Parents should direct questions to the appropriate coach or club administrator.',
      'A 24-hour cooling-off period is required before discussing any concerns following a game.',
      'Social media posts should reflect positively on the club, its players, and the soccer community.',
    ],
  },
];

export default function ParentPlayerAgreementPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[17rem] items-center justify-center overflow-hidden bg-primary-dark md:min-h-[20rem]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary/80" />
        <div className="container-site relative z-10 py-16 text-center md:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            {SITE.nameAccented} Resources
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            PARENT/PLAYER AGREEMENT
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Guidelines and expectations for players and families participating
            in our programs.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-lg leading-relaxed text-gray-600">
            At {SITE.nameAccented}, we believe that a positive, respectful
            environment is essential for player development. This agreement
            outlines the expectations for both players and parents/guardians to
            ensure a great experience for everyone involved. By registering with
            {' '}{SITE.nameAccented}, you agree to uphold these standards.
          </p>
        </div>
      </section>

      {/* Agreement Sections */}
      {sections.map((section, idx) => (
        <section
          key={section.title}
          className={`py-16 ${idx % 2 === 0 ? 'bg-surface' : 'bg-white'}`}
        >
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 text-2xl font-bold text-primary-dark md:text-3xl">
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
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
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="bg-primary-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Questions About This Agreement?
          </h2>
          <p className="mt-4 text-white/80">
            If you have any questions about the parent/player agreement, please
            don&apos;t hesitate to reach out.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3"
            >
              Contact Us
            </Link>
            <a
              href={`mailto:${CONTACT.email}`}
              className="btn-outline px-8 py-3"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
