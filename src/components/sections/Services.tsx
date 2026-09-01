import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-beige py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              Services
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px]">Everything, under one roof.</h2>
          </div>
          <p className="max-w-sm text-[17px] text-warm-grey">
            Seven services, one coordinated team &mdash; from first drawing to final handover.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 gap-px border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex min-h-[190px] flex-col justify-between bg-ivory p-8">
              <div>
                <h3 className="mb-2.5 text-[19px] font-medium">{service.title}</h3>
                <p className="mb-4 text-sm text-warm-grey">{service.description}</p>
              </div>
              <Link href={service.href} className="text-[13px] font-semibold text-wood hover:text-wood-dark">
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
