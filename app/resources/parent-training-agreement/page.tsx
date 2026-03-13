import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Parent/Training Only Player Agreement | ${SITE.nameAccented}`,
  description: `Review the ${SITE.nameAccented} Parent/Training Only Player Agreement for players participating in training-only programs.`,
};

const sections = [
  {
    title: 'Training-Only Program Overview',
    content:
      'The Training-Only program is designed for players who wish to participate in team training sessions without committing to full league play. This option is ideal for players who are exploring the club, have scheduling conflicts with league games, or are looking to supplement their development with additional training.',
  },
  {
    title: 'Player Expectations',
    items: [
      'Players will attend scheduled training sessions consistently.',
      'Players will arrive on time with proper equipment (cleats, shin guards, water, soccer ball).',
      'Players will follow all instructions from the coaching staff.',
      'Players will demonstrate respect toward coaches, teammates, and fellow training participants.',
      'Players will give their best effort during every training session.',
      'Players understand they are not eligible for league or tournament matches unless otherwise arranged.',
    ],
  },
  {
    title: 'Parent/Guardian Expectations',
    items: [
      'Parents will ensure timely drop-off and pick-up for all training sessions.',
      'Parents will communicate any absences in advance to the coaching staff.',
      'Parents will support the coaching staff and refrain from interfering with training sessions.',
      'Parents will fulfill all financial obligations associated with the training-only program.',
      'Parents will maintain open and respectful communication with club staff.',
    ],
  },
  {
    title: 'Program Details',
    items: [
      'Training-only players participate in team practice sessions as scheduled by the coaching staff.',
      'Training-only players may be invited to participate in scrimmages at the coach\'s discretion.',
      'Training-only players are not guaranteed playing time in official league or tournament games.',
      'Transition to full-team membership may be available based on roster availability and coach evaluation.',
      'The training-only fee structure is separate from full competitive team registration.',
    ],
  },
  {
    title: 'Financial Terms',
    items: [
      'Training-only fees must be paid in full by the specified due dates.',
      'Training-only fees cover coaching instruction and field usage only.',
      'Uniforms and equipment are the responsibility of the player/family.',
      'Training-only fees are non-refundable unless otherwise specified by club administration.',
      'Financial arrangements should be discussed privately with club administration.',
    ],
  },
];

export default function ParentTrainingAgreementPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary/80" />
        <div className="relative z-10 px-6 py-24 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            {SITE.nameAccented} Resources
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            TRAINING ONLY AGREEMENT
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Guidelines for players and families in our training-only program.
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section
          key={section.title}
          className={`py-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-surface'}`}
        >
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 text-2xl font-bold text-primary-dark md:text-3xl">
              {section.title}
            </h2>
            {'content' in section && section.content && (
              <p className="text-lg leading-relaxed text-gray-600">
                {section.content}
              </p>
            )}
            {'items' in section && section.items && (
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
            )}
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="bg-primary-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Interested in Our Training Program?
          </h2>
          <p className="mt-4 text-white/80">
            Contact us to learn more about training-only options and
            availability for your player.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-3">
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
