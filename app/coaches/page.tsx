import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COACHES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Coaches | Unico Futbol Club",
  description:
    "Meet the dedicated coaching staff of Unico Futbol Club in Santa Barbara, CA. Licensed professionals committed to developing elite youth soccer players.",
  openGraph: {
    title: "Coaches | Unico Futbol Club",
    description:
      "Meet the dedicated coaching staff of Unico Futbol Club in Santa Barbara, CA.",
    type: "website",
  },
};

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FC]">
      {/* Hero Section */}
      <section className="relative bg-[#0F2461] py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2461] via-[#1B3A8C] to-[#0F2461]" />
        <div className="relative mx-auto max-w-6xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-blue-200">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Coaches</span>
          </nav>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            COACHES
          </h1>
          <p className="mt-3 text-lg font-medium tracking-widest text-blue-200">
            Dedication. Expertise. Passion.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-gray-600">
            To help our players achieve their goals, knowledgeable and highly
            skilled coaching is required. Our coaches are paid, licensed
            professionals, supervised by our coaching director. Our emphasis on
            continuing education is what helps to distinguish our staff and
            develop our players.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {COACHES.map((coach) => (
            <article
              key={coach.name}
              className="group flex overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Photo */}
              <div className="relative h-auto w-40 flex-shrink-0 overflow-hidden sm:w-48">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 160px, 192px"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center p-5 sm:p-6">
                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#1B3A8C]">
                  {coach.role}
                </span>

                {coach.teams && coach.teams.length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {coach.teams.map((team) => (
                      <span
                        key={team}
                        className="inline-block rounded-full bg-[#F8F9FC] px-2.5 py-0.5 text-xs font-medium text-gray-600"
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {coach.name}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
