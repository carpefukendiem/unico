'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, CONTACT, SITE, type NavLink } from '@/lib/constants';

// ---------------------------------------------------------------------------
// Icons (inline SVGs to avoid extra dependencies)
// ---------------------------------------------------------------------------
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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}


function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// NavItem Component (Desktop)
// ---------------------------------------------------------------------------
function DesktopNavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  if (link.dropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-white"
        >
          {link.label}
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          ref={dropdownRef}
          role="menu"
          className={`absolute left-0 top-full z-50 mt-1 min-w-[260px] overflow-hidden rounded-lg border border-white/10 bg-primary-dark shadow-xl shadow-black/20 transition-all duration-200 ${
            open
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          {link.dropdown.map((item) => {
            const ItemTag = item.external ? 'a' : Link;
            const externalProps = item.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <ItemTag
                key={item.label}
                href={item.href}
                role="menuitem"
                {...externalProps}
                className="flex items-center justify-between gap-3 px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
              </ItemTag>
            );
          })}
        </div>
      </div>
    );
  }

  const Tag = link.external ? 'a' : Link;
  const externalProps = link.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag
      href={link.href}
      {...externalProps}
      className="flex items-center gap-1 px-3 py-2 text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-white"
    >
      {link.label}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// Header Component
// ---------------------------------------------------------------------------
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-black/10'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      {/* ----------------------------------------------------------------- */}
      {/* Top Bar                                                           */}
      {/* ----------------------------------------------------------------- */}
      <div
        className={`border-b border-white/10 transition-all duration-300 ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-site flex items-center justify-between py-1.5 text-xs text-white/70">
          <div className="flex items-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <EnvelopeIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{CONTACT.email}</span>
            </a>
          </div>
          <a
            href={CONTACT.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{CONTACT.instagram.handle}</span>
          </a>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Main Navigation Bar                                               */}
      {/* ----------------------------------------------------------------- */}
      <div className="container-site">
        <nav
          className="flex items-center justify-between py-3"
          aria-label="Main navigation"
        >
          {/* Logo + Club Name */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${SITE.nameAccented} - Home`}
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt={`${SITE.nameAccented} crest`}
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="font-heading text-lg font-bold uppercase leading-tight tracking-wider text-white">
                {SITE.nameAccented.split(' ').slice(0, 1).join(' ')}
              </span>
              <span className="font-heading text-[0.65rem] font-medium uppercase tracking-[0.2em] text-blue-200">
                Futbol Club
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <DesktopNavItem key={link.label} link={link} />
            ))}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary hidden text-xs lg:inline-flex"
            >
              Contact Us
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`absolute transition-all duration-200 ${
                  mobileMenuOpen
                    ? 'rotate-0 scale-100 opacity-100'
                    : 'rotate-90 scale-75 opacity-0'
                }`}
              >
                <CloseIcon className="h-6 w-6" />
              </span>
              <span
                className={`absolute transition-all duration-200 ${
                  mobileMenuOpen
                    ? '-rotate-90 scale-75 opacity-0'
                    : 'rotate-0 scale-100 opacity-100'
                }`}
              >
                <MenuIcon className="h-6 w-6" />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Mobile Menu Overlay                                               */}
      {/* ----------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 top-0 z-40 lg:hidden ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-primary-dark shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative h-12 w-12 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt={`${SITE.nameAccented} crest`}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-base font-bold uppercase tracking-wider text-white">
                {SITE.nameAccented}
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close menu"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile nav links */}
          <nav className="px-5 py-4" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                if (link.dropdown) {
                  return (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileResourcesOpen(!mobileResourcesOpen)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                        aria-expanded={mobileResourcesOpen}
                      >
                        {link.label}
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform duration-200 ${
                            mobileResourcesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <ul
                        className={`overflow-hidden transition-all duration-200 ${
                          mobileResourcesOpen
                            ? 'max-h-60 opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        {link.dropdown.map((item) => {
                          const ItemTag = item.external ? 'a' : Link;
                          const externalProps = item.external
                            ? {
                                target: '_blank' as const,
                                rel: 'noopener noreferrer',
                              }
                            : {};
                          return (
                            <li key={item.label}>
                              <ItemTag
                                href={item.href}
                                {...externalProps}
                                className="flex items-center justify-between rounded-lg px-8 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <span>{item.label}</span>
                              </ItemTag>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }

                const Tag = link.external ? 'a' : Link;
                const externalProps = link.external
                  ? {
                      target: '_blank' as const,
                      rel: 'noopener noreferrer',
                    }
                  : {};

                return (
                  <li key={link.label}>
                    <Tag
                      href={link.href}
                      {...externalProps}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                    </Tag>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="border-t border-white/10 px-5 py-4">
            <Link
              href="/contact"
              className="btn-primary w-full justify-center text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile contact info */}
          <div className="border-t border-white/10 px-5 py-4">
            <div className="space-y-3 text-sm text-white/60">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <PhoneIcon className="h-4 w-4" />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <EnvelopeIcon className="h-4 w-4" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
                {CONTACT.instagram.handle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
