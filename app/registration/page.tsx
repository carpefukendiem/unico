import type { Metadata } from "next"
import Link from "next/link"
import { SITE, CONTACT, EXTERNAL_LINKS } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Registration | ${SITE.nameAccented}`,
  description: `Register your player for ${SITE.nameAccented} in Santa Barbara, CA. Learn about the registration process, fees, and requirements for our competitive youth soccer programs.`,
  openGraph: {
    title: `Registration | ${SITE.nameAccented}`,
    description: `Player registration for ${SITE.nameAccented} competitive youth soccer in Santa Barbara, CA.`,
    url: `${SITE.url}/registration`,
  },
}

const steps = [
  {
    step: "1",
    title: "Create an Account",
    description:
      "Visit our registration portal on StackSports and create a parent/guardian account if you don't already have one.",
  },
  {
    step: "2",
    title: "Complete Player Profile",
    description:
      "Fill out your player's information, including age, position, and any medical details required for participation.",
  },
  {
    step: "3",
    title: "Select Your Program",
    description:
      "Choose the appropriate team or program based on your player's age group and skill level.",
  },
  {
    step: "4",
    title: "Submit Payment",
    description:
      "Complete the registration by submitting the seasonal fee. Payment plans may be available upon request.",
  },
]

const faqs = [
  {
    question: "When does registration open?",
    answer:
      "Registration typically opens in the spring for fall/winter seasons. Follow us on Instagram or contact us directly for the latest dates.",
  },
  {
    question: "What are the registration fees?",
    answer:
      "Fees vary by age group and program type. Contact us for current pricing. We strive to keep costs competitive and may offer payment plans.",
  },
  {
    question: "Can my child register if they haven't tried out?",
    answer:
      "For competitive teams, players must attend tryouts before registering. Training-only programs may be available without a tryout.",
  },
  {
    question: "What does registration include?",
    answer:
      "Registration typically includes coaching, training sessions, league fees, tournament entries, and a player kit. Details vary by program.",
  },
  {
    question: "Is there a sibling discount?",
    answer:
      "Please contact us to discuss family and sibling pricing options. We want to make our programs accessible to all families.",
  },
  {
    question: "What if I need to withdraw after registering?",
    answer:
      "Refund policies vary by timing and program. Please refer to the parent/player agreement at /resources/parent-player-agreement or reach out to our staff for details.",
  },
]

export default function RegistrationPage() {
  return (
    <main>
      {/* ----------------------------------------------------------------- */}
      {/* Hero Banner */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/images/team-champs.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary/60" />
        <div className="relative z-10 px-6 py-24 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            {SITE.nameAccented}
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            REGISTRATION
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Secure your player&apos;s spot and join the {SITE.nameAccented}{" "}
            family.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* How to Register */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">
            How to Register
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-primary-light" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Registration for {SITE.nameAccented} is handled through StackSports,
            our official registration platform. Follow the steps below to get
            your player signed up and ready for the season.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Registration Steps */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Register Now CTA */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-primary-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Register Now on StackSports
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Click below to go directly to our registration portal. You&apos;ll
            need to create or log in to your StackSports account to complete
            registration.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={EXTERNAL_LINKS.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary-dark transition hover:bg-blue-100"
            >
              Go to Registration Portal
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* FAQ */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary-dark md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-100 bg-surface p-6 md:p-8"
              >
                <h3 className="text-lg font-bold text-primary-dark">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Bottom Contact CTA */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-lg text-gray-600">
            Still have questions about registration? We&apos;re here to help.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-semibold text-primary transition hover:text-primary-dark"
            >
              {CONTACT.email}
            </a>
            <span className="hidden text-gray-300 sm:inline">|</span>
            <a
              href={CONTACT.phoneHref}
              className="font-semibold text-primary transition hover:text-primary-dark"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
