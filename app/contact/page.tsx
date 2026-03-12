import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Unico Futbol Club",
  description:
    "Get in touch with Unico Futbol Club in Santa Barbara, CA. Reach out for registration, tryout information, or general inquiries.",
  openGraph: {
    title: "Contact | Unico Futbol Club",
    description:
      "Get in touch with Unico Futbol Club in Santa Barbara, CA.",
    type: "website",
  },
};

export default function ContactPage() {
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
            <span className="text-white">Contact</span>
          </nav>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            GET IN TOUCH
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#1B3A8C]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#1B3A8C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Phone
                </h3>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-1 block text-lg font-semibold text-gray-900 transition-colors hover:text-[#1B3A8C]"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#1B3A8C]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#1B3A8C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Email
                </h3>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-1 block text-lg font-semibold text-gray-900 transition-colors hover:text-[#1B3A8C]"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#1B3A8C]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#1B3A8C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Location
                </h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {CONTACT.location}
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="overflow-hidden rounded-xl shadow-sm">
              <iframe
                title="Unico Futbol Club Location - Santa Barbara, CA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104937.37058498706!2d-119.78703395!3d34.4208305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e914c76f2d83d5%3A0xc8d13a64d7ba7648!2sSanta%20Barbara%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h2 className="mb-1 text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mb-6 text-sm text-gray-500">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <LeadForm source="contact-page" buttonText="Send Message" />
            </div>
          </div>
        </div>
      </section>

      {/* Follow on Instagram */}
      <section className="border-t border-gray-100 bg-white py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Follow Us on Instagram
          </h2>
          <a
            href={CONTACT.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#F77737] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            {CONTACT.instagram.handle}
          </a>
        </div>
      </section>
    </main>
  );
}
