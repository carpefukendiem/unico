import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, SITE, NAV_LINKS, AFFILIATES } from '@/lib/constants';

// ---------------------------------------------------------------------------
// Icons (inline SVGs)
// ---------------------------------------------------------------------------
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 011.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Quick Links for footer
// ---------------------------------------------------------------------------
const QUICK_LINKS = NAV_LINKS.filter(
  (link) => !link.dropdown && ['About', 'Coaches', 'Contact', 'Camps', 'Try Outs'].includes(link.label)
);

// ---------------------------------------------------------------------------
// Footer Component
// ---------------------------------------------------------------------------
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ================================================================= */}
      {/* CTA Banner                                                        */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden bg-primary-dark py-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-light/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary-light/10 blur-3xl" />
          <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-[0.05]" />
        </div>

        <div className="container-site relative text-center">
          <span className="mb-4 inline-block font-heading text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Join Our Club
          </span>
          <h2 className="mx-auto mb-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            Ready to Join the{' '}
            <span className="text-white">{SITE.nameAccented}</span>{' '}
            Family?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
            Take the first step toward elite player development. Register today
            or contact us to learn about our programs.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://system.gotsport.com/programs/593K68654?reg_role=player"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 text-base"
            >
              Register Now
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <Link href="/contact" className="btn-outline px-8 py-3.5 text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Main Footer                                                       */}
      {/* ================================================================= */}
      <footer
        className="bg-dark text-white/70"
        role="contentinfo"
        aria-label="Site footer"
      >
        {/* Four-column grid */}
        <div className="container-site py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Club Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="mb-5 flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt={`${SITE.nameAccented} crest`}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                    {SITE.nameAccented.split(' ').slice(0, 1).join(' ')}
                  </span>
                  <span className="font-heading text-[0.6rem] font-medium uppercase tracking-[0.2em] text-blue-200">
                    Futbol Club
                  </span>
                </div>
              </Link>
              <p className="mb-5 max-w-xs text-sm leading-relaxed">
                {SITE.tagline}. Committed to developing technically skilled,
                tactically intelligent, and mentally strong athletes.
              </p>
              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
                <span>{CONTACT.instagram.handle}</span>
              </a>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => {
                  const Tag = link.external ? 'a' : Link;
                  const externalProps = link.external
                    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
                    : {};
                  return (
                    <li key={link.label}>
                      <Tag
                        href={link.href}
                        {...externalProps}
                        className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-blue-200"
                      >
                        <span className="h-px w-3 bg-white/30 transition-all group-hover:w-5 group-hover:bg-white/60" />
                        {link.label}
                      </Tag>
                    </li>
                  );
                })}
                <li>
                  <a
                    href="https://system.gotsport.com/programs/593K68654?reg_role=player"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-blue-200"
                  >
                    <span className="h-px w-3 bg-white/30" />
                    Registration
                  </a>
                </li>
                <li>
                  <a
                    href="https://unicofutbolclub.itemorder.com/shop/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-blue-200"
                  >
                    <span className="h-px w-3 bg-white/30" />
                    Fan Gear
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-start gap-3 text-sm transition-colors hover:text-blue-200"
                  >
                    <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-200/60" />
                    <span>{CONTACT.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-start gap-3 text-sm transition-colors hover:text-blue-200"
                  >
                    <EnvelopeIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-200/60" />
                    <span>{CONTACT.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-200/60" />
                  <span>{CONTACT.location}</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Affiliations */}
            <div>
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Affiliations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {AFFILIATES.map((affiliate) => (
                  <a
                    key={affiliate.name}
                    href={affiliate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center rounded-lg bg-white/10 p-3 transition-all hover:bg-white/20 hover:shadow-lg hover:shadow-white/5"
                    aria-label={affiliate.name}
                  >
                    <div className="relative h-12 w-full">
                      <Image
                        src={affiliate.logo}
                        alt={affiliate.name}
                        fill
                        sizes="120px"
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Affiliate logos row (full width) */}
        <div className="border-t border-white/5">
          <div className="container-site flex flex-wrap items-center justify-center gap-8 py-8 sm:gap-12">
            {AFFILIATES.map((affiliate) => (
              <a
                key={`row-${affiliate.name}`}
                href={affiliate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={affiliate.name}
              >
                <div className="relative h-10 w-24 sm:w-28">
                  <Image
                    src={affiliate.logo}
                    alt={affiliate.name}
                    fill
                    sizes="112px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="container-site flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {currentYear} {SITE.nameAccented}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-blue-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
