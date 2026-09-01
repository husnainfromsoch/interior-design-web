import Image from "next/image";

const points = [
  {
    title: "Bespoke Design Approach",
    body: "We create fully customized concepts tailored to your vision, lifestyle, and architectural aspirations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6}>
        <path d="M4 20 20 4M4 20l3-9 6-6 3 3-6 6-9 3Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Timeless Aesthetic Excellence",
    body: "Our designs transcend trends, delivering refined elegance that remains relevant and sophisticated for years to come.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2 3 8l9 6 9-6-9-6Zm0 6v14M3 8v9l9 5M21 8v9l-9 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Precision in Every Detail",
    body: "From spatial proportions to finishing touches, every element is meticulously crafted to achieve perfect harmony.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6}>
        <path d="m4 20 5-1 11-11-4-4L5 15l-1 5Zm10-14 4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-ivory py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-16 lg:px-16">
        <div className="reveal-left grid grid-cols-2 gap-4 lg:min-h-[720px]">
          <div className="group relative h-[320px] overflow-hidden rounded-2xl shadow-[0_20px_45px_-20px_rgba(46,42,37,0.35)] lg:h-full">
            <Image
              src="/images/imgi_3_5ec2bdbdede983e2b0bff75f_UWS_001.jpg"
              alt="Living room with sculptural wall accent"
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="group relative h-[320px] overflow-hidden rounded-2xl shadow-[0_20px_45px_-20px_rgba(46,42,37,0.35)] lg:h-full">
            <Image
              src="/images/imgi_4_5ec2cad6308d2152492c7406_Hathaway_003.jpg"
              alt="Layered textures and framed artwork"
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>

        <div className="reveal-right flex items-center">
          <div className="w-full max-w-[620px]">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              Why Choose Us
            </span>
            <h2 className="font-serif text-[32px] leading-[1.15] sm:text-[42px]">
              Our Commitment to Design{" "}
              <span className="italic text-wood">Excellence</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-warm-grey">
              We collaborate with trusted artisans and premium suppliers to ensure every
              structure and interior element reflects superior quality and enduring value.
            </p>

            <div className="mt-10 border-t border-stone">
              {points.map((point, i) => (
                <div
                  key={point.title}
                  className="reveal flex items-start justify-between gap-6 border-b border-stone py-7"
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                >
                  <div>
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.06em]">
                      {point.title}
                    </h3>
                    <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-warm-grey">
                      {point.body}
                    </p>
                  </div>
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm ${
                      i === 0 ? "bg-charcoal text-white" : "bg-wood text-white"
                    }`}
                  >
                    {point.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
