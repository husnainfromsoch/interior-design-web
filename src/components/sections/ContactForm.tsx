"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-lg border border-beige-dark/60 p-8 text-center text-muted">
        Thank you — your enquiry has been received. Our team will be in touch
        shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm text-muted" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-md border border-beige-dark/60 bg-background px-4 py-3 text-sm outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="text-sm text-muted" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-md border border-beige-dark/60 bg-background px-4 py-3 text-sm outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-muted" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-beige-dark/60 bg-background px-4 py-3 text-sm outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="text-sm text-muted" htmlFor="message">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-md border border-beige-dark/60 bg-background px-4 py-3 text-sm outline-none focus:border-gold"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-charcoal px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-gold"
      >
        Send Enquiry
      </button>
    </form>
  );
}
