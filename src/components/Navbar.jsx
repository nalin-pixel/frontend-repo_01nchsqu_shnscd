import { Menu, Leaf } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md border border-emerald-100">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-semibold text-emerald-900 tracking-tight">Verdant Landscapes</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-emerald-900/80 hover:text-emerald-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-emerald-700 transition-colors">
                Get a Quote
              </a>
            </nav>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 text-emerald-900" onClick={() => setOpen(!open)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-emerald-100 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-emerald-900/80 hover:bg-emerald-50">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 bg-emerald-600 text-white font-semibold text-center">
                Get a Quote
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
