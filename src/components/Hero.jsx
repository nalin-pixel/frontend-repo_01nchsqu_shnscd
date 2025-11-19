import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1523419409543-a9b9a7a5b9a6?q=80&w=2070&auto=format&fit=crop"
          alt="Lush green lawn with stone pathway and garden beds"
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 text-white py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Premium Landscaping for Timeless Outdoor Living
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mb-8">
              From pristine lawns to elegant stonework and lighting, we craft vibrant, enduring spaces that elevate your home.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow-lg shadow-emerald-900/20 hover:bg-emerald-700 transition-colors">
                Get Your Free Quote
              </a>
              <a href="#services" className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Lawn Care", value: "Mowing, edging, treatment" },
                { label: "Garden Design", value: "Planting, beds, mulch" },
                { label: "Stonework", value: "Patios, paths, walls" },
                { label: "Irrigation", value: "Smart watering systems" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white/90 text-emerald-900 p-4 shadow-sm border border-emerald-100">
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-emerald-900/70">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block"></div>
        </div>
      </div>

      <div className="absolute -bottom-8 left-0 right-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white shadow-xl border border-emerald-100 p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { title: "Trusted Experts", desc: "Over 10 years of premium service" },
                { title: "Eco-Friendly", desc: "Sustainable practices and materials" },
                { title: "Fully Insured", desc: "Peace of mind for every project" },
                { title: "5-Star Rated", desc: "Top-rated by homeowners like you" },
              ].map((f) => (
                <div key={f.title} className="rounded-xl bg-emerald-50 p-4 border border-emerald-100">
                  <p className="text-emerald-900 font-semibold text-sm">{f.title}</p>
                  <p className="text-emerald-900/70 text-xs">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
