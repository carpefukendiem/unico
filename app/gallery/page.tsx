import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SITE, GALLERY_IMAGES } from "@/lib/constants";

const GalleryGrid = dynamic(() => import("@/components/GalleryGrid"), { ssr: true });

export const metadata: Metadata = {
  title: `Gallery | ${SITE.nameAccented}`,
  description: `Photos and moments from ${SITE.nameAccented} — training, games, and club life in Santa Barbara.`,
  openGraph: {
    title: `Gallery | ${SITE.nameAccented}`,
    description: `Photos and moments from ${SITE.nameAccented} in Santa Barbara.`,
    url: `${SITE.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex min-h-[17rem] flex-col items-center justify-center bg-primary-dark py-16 text-white md:min-h-[20rem] md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
        <div className="container-site relative z-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            {SITE.nameAccented}
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            GALLERY
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Moments from the field, the sidelines, and the {SITE.nameAccented} family. Click any image to view full size.
          </p>
        </div>
      </section>

      {/* Full-width gallery: no cropping, larger tiles, click to open lightbox */}
      <section className="w-full px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <GalleryGrid images={GALLERY_IMAGES} />
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-[#F8F9FC] py-14 md:py-16">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
            Join the club
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Be part of the next season&apos;s highlights.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tryouts"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg"
            >
              Try outs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
