export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1579976505882-b94da94b1b46?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2069&auto=format&fit=crop",
  ]

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 tracking-tight">Project Gallery</h2>
          <p className="mt-2 text-emerald-900/70 max-w-2xl mx-auto">A glimpse into the spaces we’ve transformed—crafted with precision and designed to last.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl shadow">
              <img src={src} alt="Landscaping project" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
