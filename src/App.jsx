import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <footer className="bg-white border-t border-emerald-100 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-emerald-900/70">© {new Date().getFullYear()} Verdant Landscapes. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-emerald-900/70">
              <a href="#about" className="hover:text-emerald-900">About</a>
              <a href="#services" className="hover:text-emerald-900">Services</a>
              <a href="#gallery" className="hover:text-emerald-900">Gallery</a>
              <a href="#contact" className="hover:text-emerald-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
