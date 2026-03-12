import type { Metadata } from "next"
import Link from "next/link"
import { SITE, CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Summer Camps | ${SITE.nameAccented}`,
  description: `Join ${SITE.nameAccented} summer soccer camps in Santa Barbara, CA. Expert coaching, skill development, and competitive play for youth players of all levels.`,
  openGraph: {
    title: `Summer Camps | ${SITE.nameAccented}`,
    description: `Join ${SITE.nameAccented} summer soccer camps in Santa Barbara. Expert coaching and skill development for youth players.`,
    url: `${SITE.url}/camps`,
  },
}

const campFeatures = [
  {
    title: "Skill Development",
    description:
      "Focused training on ball control, passing, shooting, and tactical awareness led by our licensed coaching staff.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: "Competitive Play",
    description:
      "Daily scrimmages and small-sided games that challenge players to apply skills in match-like scenarios.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.016 6.016 0 0 1-2.52.952m0 0a6.016 6.016 0 0 1-2.52-.952" />
      </svg>
    ),
  },
  {
    title: "Character Building",
    description:
      "Emphasis on teamwork, sportsmanship, discipline, and leadership that extends beyond the field.",
    icon: (
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
]

const campDetails = [
  { label: "Dates", value: "Summer 2026 — Dates TBD" },
  { label: "Location", value: "Santa Barbara, CA" },
  { label: "Ages", value: "U6 through U14 (Boys & Girls)" },
  { label: "Experience", value: "All skill levels welcome" },
  { label: "Coaching", value: "USSF-licensed coaching staff" },
]

export default function CampsPage() {
  return (
    <main>
      {/* ----------------------------------------------------------------- */}
      {/* Hero Banner */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/images/team-action.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary/60" />
        <div className="relative z-10 px-6 py-24 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            {SITE.nameAccented}
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            SUMMER CAMPS
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Elevate your game this summer with intensive training, competitive
            play, and expert coaching in Santa Barbara.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* About Our Camps */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">
            Train Like an Elite Player
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Our summer camp programs are designed to push young athletes to the
            next level. Whether your child is just starting out or preparing for
            competitive travel soccer, our USSF-licensed coaches deliver
            age-appropriate, high-energy sessions that develop technical skill,
            tactical understanding, and a love for the beautiful game.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Camp Features */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-light-bg py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {campFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary-dark">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Camp Details */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary-dark md:text-4xl">
            Camp Details
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            {campDetails.map((item, idx) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-8 py-5 ${
                  idx % 2 === 0 ? "bg-white" : "bg-light-bg"
                }`}
              >
                <span className="font-semibold text-primary-dark">
                  {item.label}
                </span>
                <span className="text-gray-600">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* CTA */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-primary-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Join?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Spots fill up fast! Contact us to learn more about our summer camp
            programs and secure your player&apos;s spot.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-gold px-8 py-3 font-semibold text-primary-dark transition hover:bg-gold-dark"
            >
              Contact Us
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
