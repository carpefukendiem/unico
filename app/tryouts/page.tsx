import type { Metadata } from "next"
import Link from "next/link"
import { SITE, CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Try Outs | ${SITE.nameAccented}`,
  description: `Learn about ${SITE.nameAccented} tryouts in Santa Barbara, CA. Find out what to expect, requirements, and how to register for your chance to join our competitive youth soccer teams.`,
  openGraph: {
    title: `Try Outs | ${SITE.nameAccented}`,
    description: `Tryout information for ${SITE.nameAccented} competitive youth soccer teams in Santa Barbara, CA.`,
    url: `${SITE.url}/tryouts`,
  },
}

const whatToExpect = [
  {
    title: "Technical Evaluation",
    description:
      "Players are assessed on ball control, passing accuracy, first touch, and dribbling ability.",
  },
  {
    title: "Tactical Awareness",
    description:
      "Coaches observe decision-making, positioning, and understanding of game situations during small-sided play.",
  },
  {
    title: "Physical Assessment",
    description:
      "Speed, agility, endurance, and overall athleticism are evaluated through drills and match scenarios.",
  },
  {
    title: "Attitude & Coachability",
    description:
      "We look for players who are eager to learn, receptive to feedback, and demonstrate a positive competitive spirit.",
  },
]

const requirements = [
  "Players must be between U6 and U19 age groups",
  "Bring cleats, shin guards, water, and a soccer ball",
  "Arrive at least 15 minutes early for check-in",
  "Previous soccer experience is helpful but not required for younger age groups",
  "All players must have a parent or guardian present during tryouts",
  "Completed registration form (available online or on-site)",
]

export default function TryoutsPage() {
  return (
    <main>
      {/* ----------------------------------------------------------------- */}
      {/* Hero Banner */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/images/team-field.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary/60" />
        <div className="relative z-10 px-6 py-24 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            {SITE.nameAccented}
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            TRY OUTS
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Show us what you&apos;ve got. Join the club that develops champions
            on and off the field.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Tryout Overview */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">
            Your Path to {SITE.nameAccented}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Tryouts are your opportunity to demonstrate your ability and
            commitment. Our coaching staff evaluates every player in a
            supportive, competitive environment. We&apos;re not just looking for
            talent — we&apos;re looking for players who are ready to work hard,
            grow, and represent {SITE.nameAccented} with pride.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* What to Expect */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-light-bg py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary-dark md:text-4xl">
            What to Expect
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {whatToExpect.map((item, idx) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Requirements */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary-dark md:text-4xl">
            Requirements
          </h2>
          <div className="rounded-2xl border border-gray-100 bg-light-bg p-8 shadow-sm md:p-10">
            <ul className="space-y-4">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-6 w-6 flex-shrink-0 text-gold"
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
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* CTA */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-primary-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Try Out?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Reach out to learn about upcoming tryout dates and secure your spot.
            We look forward to seeing you on the field.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-gold px-8 py-3 font-semibold text-primary-dark transition hover:bg-gold-dark"
            >
              Contact Us to Register
            </Link>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
