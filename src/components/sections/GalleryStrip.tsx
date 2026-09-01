import Image from "next/image";

const images = [
  "/projects/marina-penthouse-terrace.avif",
  "/projects/downtown-villa-living.avif",
  "/projects/al-barari-kitchen.avif",
  "/projects/jbr-apartment-bathroom.avif",
  "/projects/villa-exterior.avif",
];

export default function GalleryStrip() {
  return (
    <section className="py-3">
      <div className="mx-auto grid max-w-[1180px] grid-cols-3 gap-2.5 px-6 sm:grid-cols-5 lg:px-8">
        {images.map((src, i) => (
          <div
            key={src}
            className="reveal-scale group relative aspect-square overflow-hidden rounded-lg"
            style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
