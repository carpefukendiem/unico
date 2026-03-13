import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import { CONTACT, GALLERY_IMAGES, HERO_IMAGES, SECTION_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Unico Futbol Club | Santa Barbara Youth Soccer",
  description:
    "Unico FC provides opportunities for youth soccer players in Santa Barbara County to experience a healthy, safe, and developmentally appropriate environment to learn, love and live the game of soccer.",
  keywords: [
    "youth soccer",
    "Santa Barbara soccer",
    "soccer club",
    "Unico FC",
    "competitive soccer",
    "youth sports",
    "Santa Barbara County",
  ],
  openGraph: {
    title: "Unico Futbol Club | Santa Barbara Youth Soccer",
    description:
      "Santa Barbara's premier youth soccer club. Competitive teams, summer camps, and development programs for ages U8-U19.",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function HeroSection() {
  return (
    <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={HERO_IMAGES.homepage}
        alt="Único FC players on the field"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      {/* Content - contained and legible */}
      <div className="container-site relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
          Santa Barbara, California
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">&Uacute;NICO</span>
          <span className="block text-gradient-accent">FUTBOL CLUB</span>
        </h1>

        <p className="mt-4 max-w-lg text-base font-medium text-white/85 sm:text-lg md:text-xl">
          Santa Barbara&rsquo;s Premier Youth Soccer
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary h-12 px-6 text-sm">
            Join Our Club
          </Link>
          <Link href="/programs" className="btn-outline h-12 px-6 text-sm">
            View Programs
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-white/50">
            Scroll
          </span>
          <svg
            className="h-6 w-6 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO VIDEO                                                         */
/* ------------------------------------------------------------------ */
function HeroVideoSection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-16 md:py-24" aria-label="Club video">
      <div className="container-site">
        <h2 className="mb-8 text-center font-heading text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          See Único in action
        </h2>
        <HeroVideo />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT PREVIEW                                                      */
/* ------------------------------------------------------------------ */
function AboutPreview() {
  return (
    <section className="mesh-bg overflow-hidden bg-white py-24 lg:py-32">
      <div className="container-site">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Stacked images */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={SECTION_IMAGES.teamAction}
                alt="Único FC players in action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 aspect-[4/3] w-3/5 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:-right-8">
              <Image
                src={SECTION_IMAGES.teamCelebrate}
                alt="Único FC team celebration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 30vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/10 to-primary-light/10" />
          </div>

          {/* Text content */}
          <div className="lg:pl-4">
            <span className="mb-2 inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
              Who We Are
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
              WE ARE &Uacute;NICO F.C.
            </h2>
            <div className="section-divider mt-4" />

            <p className="mt-8 text-lg leading-relaxed text-dark-muted/80">
              &Uacute;nico FC provides opportunities for youth soccer players to
              experience a healthy, safe, and developmentally appropriate
              environment to learn, love and live the game of soccer.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-dark-muted/80">
              &Uacute;nico FC&rsquo;s goal is to bring select soccer to the
              youth of Santa Barbara County and to teach skills and develop
              players. Our players will share a passion for the game, seek to
              improve their skills, and want to play at the highest possible
              level.
            </p>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary-light"
            >
              Learn More About Us
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
  );
}

/* ------------------------------------------------------------------ */
/*  PROGRAMS                                                           */
/* ------------------------------------------------------------------ */
const programs = [
  {
    title: "Competitive Teams",
    description:
      "Year-round training and league play for ages U8 through U19. Our competitive program develops well-rounded players ready to excel at every level.",
    detail: "Ages U8 - U19  |  Year-Round",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 11h-.5A3.375 3.375 0 009 14.25v4.5m3.75-12V3.75m0 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
      </svg>
    ),
    href: "/programs",
    linkText: "Explore Programs",
  },
  {
    title: "Summer Camps",
    description:
      "Intensive skills development camps led by experienced coaches. Perfect for players looking to sharpen their technique and game IQ during the off-season.",
    detail: "All Ages  |  Summer Sessions",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    href: "/camps",
    linkText: "View Camps",
  },
  {
    title: "Try Outs",
    description:
      "Open to all skill levels. We believe every player deserves a chance to prove themselves. Come show us what you can do on the pitch.",
    detail: "Open to All  |  Multiple Dates",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: "/tryouts",
    linkText: "View Tryout Dates",
  },
];

function ProgramsSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-site">
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
            OUR PROGRAMS
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-hover group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md"
            >
              {/* Icon area */}
              <div className="gradient-primary flex h-48 items-center justify-center">
                <div className="rounded-2xl bg-white/10 p-5 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  {program.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-xl font-bold text-primary-dark">
                  {program.title}
                </h3>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-light">
                  {program.detail}
                </span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-dark-muted/80">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary-light"
                >
                  {program.linkText}
                  <svg
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
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

              {/* Blue accent bar at bottom */}
              <div className="gradient-primary h-1 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STATS BAR                                                          */
/* ------------------------------------------------------------------ */
const stats = [
  { value: "15+", label: "Teams" },
  { value: "200+", label: "Players" },
  { value: "20+", label: "Coaches" },
  { value: "Est. 2022", label: "Founded" },
];

function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-16 lg:py-20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-site relative">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GALLERY                                                            */
/* ------------------------------------------------------------------ */
function GallerySection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-site">
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
            Our Moments
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
            GALLERY
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        {/* Masonry grid */}
        <div className="gallery-masonry mt-16">
          {GALLERY_IMAGES.slice(0, 5).map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary-dark"
          >
            View full gallery
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA SECTION                                                        */
/* ------------------------------------------------------------------ */
function CTASection() {
  return (
    <section className="relative py-32 lg:py-40">
      {/* Background image */}
      <Image
        src={HERO_IMAGES.homepageCta}
        alt="Soccer field and coaching"
        fill
        className="object-cover"
        sizes="100vw"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/80" />

      <div className="container-site relative z-10 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          ARE YOU A PLAYER INTERESTED IN &Uacute;NICO FC?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          We are always looking for dedicated players who share our passion for
          the beautiful game. Take the first step and reach out today.
        </p>
        <Link
          href="/contact"
          className="btn-primary mt-10 h-14 px-10 text-base"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INSTAGRAM                                                          */
/* ------------------------------------------------------------------ */
function InstagramSection() {
  return (
    <section className="border-t border-gray-100 bg-white py-20 lg:py-24" aria-labelledby="instagram-heading">
      <div className="container-site text-center">
        <h2 id="instagram-heading" className="text-2xl font-bold text-primary-dark sm:text-3xl">
          Follow Us on Instagram
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-gray-600">
          Stay up to date with the latest from {CONTACT.instagram.handle} — games, training, and club news.
        </p>
        <a
          href={CONTACT.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#F77737] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C13584] focus:ring-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          {CONTACT.instagram.handle}
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SPONSORS                                                           */
/* ------------------------------------------------------------------ */
const sponsors = [
  { src: "/images/logo-ussoccer.png", alt: "US Soccer" },
  { src: "/images/logo-usyouth.png", alt: "US Youth Soccer" },
  { src: "/images/logo-calsouth.jpg", alt: "Cal South" },
  { src: "/images/logo-csl.png", alt: "CSL" },
];

function SponsorsSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-site">
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
            Our Affiliations
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl">
            PROUDLY AFFILIATED
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        {/* Logos */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 items-center gap-12 sm:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.alt}
              className="group flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={140}
                height={80}
                className="h-auto max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HeroVideoSection />
      <AboutPreview />
      <ProgramsSection />
      <StatsBar />
      <GallerySection />
      <CTASection />
      <InstagramSection />
      <SponsorsSection />
    </main>
  );
}
