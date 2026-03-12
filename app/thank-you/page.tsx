import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Unico Futbol Club",
  description:
    "Thank you for contacting Unico Futbol Club. We will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F9FC] px-6">
      <div className="text-center">
        {/* Checkmark Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-gray-900">
          Thank You!
        </h1>
        <p className="mx-auto mb-8 max-w-md text-lg text-gray-600">
          We&apos;ve received your message and will get back to you shortly.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[#1B3A8C] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0F2461] focus:outline-none focus:ring-2 focus:ring-[#3564C4] focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Return Home
        </Link>
      </div>
    </main>
  );
}
