export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 tracking-tight">Crafting premium landscapes with care</h2>
          <p className="mt-4 text-emerald-900/80">
            We’re a team of detail-obsessed professionals dedicated to building and maintaining outdoor spaces that are beautiful, functional, and sustainable. From initial design to ongoing care, you’ll get thoughtful guidance and craftsmanship you can trust.
          </p>
          <ul className="mt-6 space-y-3 text-emerald-900/80">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></span> Locally owned and fully insured</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></span> Eco-friendly materials and methods</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></span> Transparent pricing and clear timelines</li>
          </ul>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2069&auto=format&fit=crop" alt="Garden design" className="h-52 w-full object-cover rounded-2xl shadow" />
            <img src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1974&auto=format&fit=crop" alt="Stone pathway" className="h-52 w-full object-cover rounded-2xl shadow mt-8" />
            <img src="https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=1974&auto=format&fit=crop" alt="Hedge trimming" className="h-52 w-full object-cover rounded-2xl shadow" />
            <img src="https://images.unsplash.com/photo-1658692051708-519fbdac7e8f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdXRkb29yJTIwbGlnaHRpbmd8ZW58MHwwfHx8MTc2MzU2MjMzMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Outdoor lighting" className="h-52 w-full object-cover rounded-2xl shadow mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
