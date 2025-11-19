import { LawnMower, Sprout, Scissors, Droplets, Leaf } from "lucide-react"

const services = [
  {
    icon: LawnMower,
    title: "Mowing & Lawn Care",
    desc: "Scheduled mowing, edging, fertilization, and seasonal treatment for a lush, healthy lawn.",
  },
  {
    icon: Sprout,
    title: "Garden Design",
    desc: "Custom planting plans, raised beds, native species, mulch, and maintenance for vibrant gardens.",
  },
  {
    icon: Scissors,
    title: "Hedge Trimming",
    desc: "Shaping, pruning, and seasonal care for hedges and shrubs to keep your landscape crisp.",
  },
  {
    icon: Droplets,
    title: "Irrigation",
    desc: "Smart watering systems, repairs, and optimization to save water and keep plants thriving.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 text-xs font-semibold">
            <Leaf className="h-3.5 w-3.5" /> Our Services
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-emerald-900 tracking-tight">Tailored care for every outdoor space</h2>
          <p className="mt-2 text-emerald-900/70 max-w-2xl mx-auto">Professional, reliable, and eco-conscious services designed to make your property stand out.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-1.5 text-sm text-emerald-900/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
