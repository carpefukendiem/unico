"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface LeadFormProps {
  source: string;
  buttonText?: string;
  className?: string;
}

const ageOptions = [
  "U6",
  "U7",
  "U8",
  "U9",
  "U10",
  "U11",
  "U12",
  "U13",
  "U14",
  "U15",
  "U16",
  "U17",
  "U18",
  "U19",
];

export default function LeadForm({
  source,
  buttonText = "Send Message",
  className = "",
}: LeadFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mountTime, setMountTime] = useState<number>(0);

  useEffect(() => {
    setMountTime(Date.now());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get("_hp") as string;
    if (honeypot) {
      setLoading(false);
      return;
    }

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      age: formData.get("age") as string,
      message: formData.get("message") as string,
      source,
      _t: mountTime,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data?.message || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      router.push("/thank-you");
    } catch {
      setSubmitError("Unable to send message. Please check your connection and try again.");
      setLoading(false);
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#3564C4] focus:ring-2 focus:ring-[#3564C4]/20";

  return (
    <form onSubmit={handleSubmit} className={className}>
      {/* Honeypot - hidden from real users */}
      <input
        type="text"
        name="_hp"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0 h-0 w-0"
      />
      <input type="hidden" name="_t" value={mountTime} />

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className={inputClasses}
            aria-describedby="email-hint"
          />
          <p id="email-hint" className="sr-only">
            We&apos;ll use this to reply to your message.
          </p>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(805) 555-0123"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Player&apos;s Age Group
          </label>
          <select
            id="age"
            name="age"
            className={inputClasses + " appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-10"}
          >
            <option value="">Select age group</option>
            {ageOptions.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="How can we help you?"
            className={inputClasses + " resize-none"}
          />
        </div>

        {submitError && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
            aria-live="polite"
          >
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B3A8C] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0F2461] focus:outline-none focus:ring-2 focus:ring-[#3564C4] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading && (
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          )}
          {loading ? "Sending..." : buttonText}
        </button>
      </div>
    </form>
  );
}
