import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, GALLERY_IMAGES } from "@/lib/constants";

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
    <main className="min-h-screen bg-[#F8F9FC]">
      {/* Hero */}
      <section className="relative flex min-h-[17rem] flex-col justify-center bg-primary-dark py-16 text-white md:min-h-[20rem] md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
        <div className="container-site relative">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            GALLERY
          </h1>
          <p className="mt-3 text-lg font-medium tracking-wide text-blue-200">
            Moments from the field, the sidelines, and the {SITE.nameAccented} family.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="container-site py-16 md:py-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[320px]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
            Join the club
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Be part of the next season’s highlights.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tryouts"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Try outs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border-2 border-primary text-primary transition-colors hover:bg-primary/5 px-6 py-3 text-sm font-semibold"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
