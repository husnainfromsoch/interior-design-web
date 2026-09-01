"use client";

import { useState } from "react";
import { services } from "@/data/services";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "mt-2 w-full rounded border border-stone bg-ivory px-4 py-3 text-sm text-charcoal outline-none focus:border-wood";
  const labelClass = "text-sm text-warm-grey";

  if (submitted) {
    return (
      <p className="rounded border border-stone bg-ivory p-8 text-center text-warm-grey">
        Thank you &mdash; your enquiry has been received. Our team will be in touch shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full Name
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="service">
            Service Required
          </label>
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="location">
            Project Location
          </label>
          <input id="location" name="location" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email <span className="text-stone">(optional)</span>
          </label>
          <input id="email" name="email" type="email" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="timeline">
            Preferred Timeline <span className="text-stone">(optional)</span>
          </label>
          <input id="timeline" name="timeline" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message / Notes <span className="text-stone">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </div>

      <button
        type="submit"
        className="mt-2 justify-self-start rounded bg-wood px-[26px] py-[14px] text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-wood-dark"
      >
        Send Enquiry
      </button>
    </form>
  );
}
