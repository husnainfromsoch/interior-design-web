import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221312573-404f9a52798d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1722923400899-af08ffc715c6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558346648-9757f2fa4474?q=80&w=1200&auto=format&fit=crop",
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
