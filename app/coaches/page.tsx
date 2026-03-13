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

      {/* Coaches Grid - 4 cols large, 1 col mobile; larger cards like live site */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COACHES.map((coach) => {
            const isPlaceholder = coach.image.includes("unico-logo");
            return (
              <article
                key={coach.name}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Photo - larger portrait proportion */}
                <div
                  className={`relative aspect-[3/4] w-full overflow-hidden ${
                    isPlaceholder ? "bg-[#0F2461]" : ""
                  }`}
                >
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className={`transition-transform duration-300 group-hover:scale-105 ${
                      isPlaceholder
                        ? "object-contain p-10"
                        : "object-cover object-top"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  {/* Role */}
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#1B3A8C]">
                    {coach.role}
                  </p>

                  {/* Teams */}
                  {coach.teams && coach.teams.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {coach.teams.map((team) => (
                        <span
                          key={team}
                          className="inline-block rounded-full bg-[#F0F2F8] px-2.5 py-0.5 text-xs font-medium text-gray-600"
                        >
                          {team}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Name */}
                  <h2 className="mt-3 text-xl font-bold text-gray-900 md:text-2xl">
                    {coach.name}
                  </h2>

                  {/* Email */}
                  {coach.email && (
                    <a
                      href={`mailto:${coach.email}`}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-[#1B3A8C]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                      </svg>
                      {coach.email}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
