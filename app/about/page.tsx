import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Unico Futbol Club",
  description:
    "Learn about Unico Futbol Club, Santa Barbara's premier youth soccer organization. Our mission, values, and history of developing young athletes.",
  openGraph: {
    title: "About | Unico Futbol Club",
    description:
      "Learn about Unico Futbol Club, Santa Barbara's premier youth soccer organization.",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  HERO BANNER                                                        */
/* ------------------------------------------------------------------ */
function HeroBanner() {
  return (
    <section className="relative flex h-72 items-end overflow-hidden sm:h-80 md:h-96">
      {/* Background */}
      <Image
        src="/images/hero-4.jpg"
        alt="Unico FC team on the field"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/60 to-primary-dark/30" />

      {/* Content */}
      <div className="container-site relative z-10 pb-12 md:pb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          ABOUT
        </h1>
        <div className="section-divider mt-4" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN CONTENT - Club Info                                           */
/* ------------------------------------------------------------------ */
function ClubInfo() {
  return (
    <section className="mesh-bg bg-white py-24 lg:py-32">
      <div className="container-site">
        <div className="grid items-center gap-16 lg:grid-cols-5">
          {/* Logo area - 2 cols */}
          <div className="flex items-center justify-center lg:col-span-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-6 rounded-3xl border-2 border-dashed border-primary/10" />
              <div className="absolute -inset-12 rounded-3xl border border-dashed border-primary-light/10" />
              <div className="relative flex h-56 w-56 items-center justify-center rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl sm:h-72 sm:w-72">
                <Image
                  src="/images/unico-logo.webp"
                  alt="Unico Futbol Club logo"
                  width={200}
                  height={200}
                  className="h-auto w-auto max-w-full object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Text area - 3 cols */}
          <div className="lg:col-span-3">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl">
              &Uacute;NICO FUTBOL CLUB
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
            <p className="mt-5 text-lg leading-relaxed text-dark-muted/80">
              Based in beautiful Santa Barbara, California, we believe soccer
              is more than a game&mdash;it builds character, discipline, and
              lifelong friendships. Our coaching staff is committed to
              nurturing each player&rsquo;s potential while fostering a love
              for the beautiful game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MISSION & VALUES                                                   */
/* ------------------------------------------------------------------ */
const values = [
  {
    title: "Player Development",
    description:
      "We focus on age-appropriate training that develops technical skills, tactical awareness, and a deep understanding of the game at every level.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Teamwork & Unity",
    description:
      "Our name says it all. We build a culture where every player feels valued, supported, and driven to succeed together as one family.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We teach our players to compete with honor, respect opponents and officials, and carry themselves with pride both on and off the field.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "Rooted in Santa Barbara County, we are committed to making competitive soccer accessible and bringing diverse communities together through the sport.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in coaching, training environments, and competition, pushing every player to reach their full potential.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Passion",
    description:
      "We ignite a lifelong love for soccer. Our environment is designed to keep the game fun, challenging, and rewarding at every stage of development.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
];

function MissionValues() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-site">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
            What Drives Us
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
            MISSION &amp; VALUES
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-6 text-lg leading-relaxed text-dark-muted/80">
            Every decision we make is guided by our commitment to developing
            not just great soccer players, but great people.
          </p>
        </div>

        {/* Value cards grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="card-hover group rounded-2xl bg-white p-8 shadow-sm"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                {value.icon}
              </div>

              <h3 className="text-lg font-bold text-primary-dark">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-muted/80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CLUB HISTORY / TIMELINE                                            */
/* ------------------------------------------------------------------ */
const timeline = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Unico Futbol Club was founded with a clear mission: to bring high-quality, competitive youth soccer to the families of Santa Barbara County. Starting with just a handful of dedicated coaches and players, the club set out to create something truly unique.",
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description:
      "In our second year, the club expanded to multiple age groups from U8 to U16, registered with Cal South, and began competing in regional leagues. Our coaching staff grew to include experienced professionals with backgrounds in collegiate and professional soccer.",
  },
  {
    year: "2024",
    title: "Competitive Success",
    description:
      "Unico FC teams earned their first tournament championships and league titles. The club expanded its programs to include summer camps and year-round training, with over 150 players across more than 10 competitive teams.",
  },
  {
    year: "2025",
    title: "Building a Legacy",
    description:
      "With 200+ players, 20+ coaches, and teams spanning U8 through U19, Unico FC has established itself as one of Santa Barbara's premier youth soccer organizations. We continue to grow while staying true to our founding values.",
  },
];

function HistoryTimeline() {
  return (
    <section className="mesh-bg bg-white py-24 lg:py-32">
      <div className="container-site">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
            Our Journey
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
            CLUB HISTORY
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center line */}
          <div className="timeline-line" />

          <div className="space-y-20">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className="relative flex flex-col md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Desktop layout */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? "pr-12 text-right" : "order-2 pl-12 text-left"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-primary-light/15 px-5 py-2 font-heading text-2xl font-bold text-primary-dark">
                      {item.year}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-primary-dark">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-dark-muted/80">
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile layout */}
                  <div className="pl-12 md:hidden">
                    <span className="inline-block rounded-full bg-primary-light/15 px-4 py-1.5 font-heading text-lg font-bold text-primary-dark">
                      {item.year}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-primary-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-muted/80">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for desktop */}
                  <div className={isLeft ? "order-2 hidden md:block" : "hidden md:block"} />

                  {/* Center dot - desktop */}
                  <div className="absolute left-1/2 top-2 hidden h-5 w-5 -translate-x-1/2 md:block">
                    <div className="h-full w-full rounded-full border-4 border-white bg-primary-light shadow-md" />
                  </div>
                  {/* Mobile dot */}
                  <div className="absolute left-[20px] top-2 h-4 w-4 -translate-x-1/2 md:hidden">
                    <div className="h-full w-full rounded-full border-4 border-white bg-primary-light shadow-md" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */
function AboutCTA() {
  return (
    <section className="relative py-28 lg:py-36">
      {/* Background */}
      <Image
        src="/images/hero-3.jpg"
        alt="Unico FC players"
        fill
        className="object-cover"
        sizes="100vw"
        fetchPriority="low"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/80" />

      <div className="container-site relative z-10 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          READY TO JOIN THE &Uacute;NICO FAMILY?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Whether you are a seasoned player or just getting started, there is a
          place for you at &Uacute;nico FC. Get in touch to learn about
          upcoming tryouts and registration.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary h-14 px-10 text-base">
            Contact Us
          </Link>
          <Link href="/tryouts" className="btn-outline h-14 px-10 text-base">
            View Tryouts
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <main>
      <HeroBanner />
      <ClubInfo />
      <MissionValues />
      <HistoryTimeline />
      <AboutCTA />
    </main>
  );
}
