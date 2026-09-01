import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import MidCta from "@/components/sections/MidCta";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | G.A.G Interiors Dubai`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Our Services" title={service.title} description={service.intro} />

      <section className="py-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="reveal-left">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="mt-8">
              <Button href="/contact">Get a Quote</Button>
            </div>
          </div>

          <div className="reveal-right border-t border-stone">
            {service.highlights.map((point, i) => (
              <div
                key={point.title}
                className="reveal grid grid-cols-1 gap-1.5 border-b border-stone py-6 sm:grid-cols-[200px_1fr] sm:gap-6"
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <h3 className="text-[17px] font-medium">{point.title}</h3>
                <p className="text-sm text-warm-grey">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {otherServices.length > 0 && (
        <section className="bg-beige py-24">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
            <div className="reveal mb-12">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
                Explore More
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px]">Other services you may need.</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((s, i) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="reveal-scale group flex flex-col overflow-hidden rounded-xl border border-stone/70 bg-ivory shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-wood/40 hover:shadow-[0_16px_32px_-16px_rgba(46,42,37,0.25)]"
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="mb-2.5 text-[19px] font-medium">{s.title}</h3>
                    <p className="text-sm text-warm-grey">{s.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <MidCta />
    </>
  );
}
