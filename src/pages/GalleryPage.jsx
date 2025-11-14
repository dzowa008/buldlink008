import React from 'react';
export default function GalleryPage() {
  // Image data with categories for filtering
  const IMAGES = [
    { src: "/images/gallery1.jpg", alt: "plumbing", category: "Plumbing" },
    { src: "/images/gallery2.jpg", alt: "electric work", category: "Electrical" },
    { src: "/images/gallery3.jpg", alt: "builder", category: "Construction" },
    { src: "/images/gallery4.jpg", alt: "pipes", category: "Plumbing" },
    { src: "/images/gallery5.jpg", alt: "wiring", category: "Electrical" },
    { src: "/images/gallery6.jpg", alt: "construction", category: "Construction" },
    { src: "/images/gallery7.jpg", alt: "water fitting", category: "Plumbing" },
    { src: "/images/gallery8.jpg", alt: "sewage pipes", category: "Plumbing" },
    { src: "/images/gallery9.jpg", alt: "earthworks", category: "Construction" },
  ];

  const [activeCategory, setActiveCategory] = React.useState("All");
  const [lightboxIndex, setLightboxIndex] = React.useState(null); // null means closed

  const categories = React.useMemo(() => [
    "All",
    ...Array.from(new Set(IMAGES.map((i) => i.category))),
  ], []);

  const filtered = React.useMemo(() => {
    if (activeCategory === "All") return IMAGES;
    return IMAGES.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = (e) => {
    e?.stopPropagation?.();
    setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : (i - 1 + filtered.length) % filtered.length));
  };
  const nextImage = (e) => {
    e?.stopPropagation?.();
    setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : (i + 1) % filtered.length));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gallery-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-lg font-light">Welcome to Buildlinks</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">OUR GALLERY</h1>
          <p className="text-xl mt-4">
            Certified builders, plumbers, and electricians across Zimbabwe —{" "}
            <span className="text-blue-400 font-semibold">compare, connect</span>
            , and hire with confidence.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-20">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-colors shadow-sm ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white/80 text-gray-800 border-gray-200 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, idx) => (
            <button
              key={img.src + idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Open ${img.alt} image`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium px-2 py-1 rounded bg-black/50 backdrop-blur">
                {img.category}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Controls */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
              aria-label="Close"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}