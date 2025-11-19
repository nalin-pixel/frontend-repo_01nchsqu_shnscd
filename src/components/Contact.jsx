export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-emerald-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 tracking-tight">Request a Free Quote</h2>
          <p className="mt-2 text-emerald-900/70 max-w-2xl mx-auto">Tell us about your project and we’ll get back within one business day.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form className="rounded-2xl bg-white p-6 shadow-sm border border-emerald-100">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-1">Name</label>
                <input type="text" placeholder="Jane Doe" className="w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-1">Email</label>
                <input type="email" placeholder="jane@example.com" className="w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-emerald-900 mb-1">Service</label>
                <select className="w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Mowing & Lawn Care</option>
                  <option>Garden Design</option>
                  <option>Hedge Trimming</option>
                  <option>Irrigation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-emerald-900 mb-1">Message</label>
                <textarea rows="4" placeholder="Tell us a bit about your property and goals..." className="w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
              </div>
            </div>
            <button type="button" className="mt-4 inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700">Send Request</button>
          </form>

          <div className="rounded-2xl bg-emerald-900 text-emerald-50 p-6">
            <h3 className="text-xl font-semibold">Why homeowners choose us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"></span> Professional crew and punctual scheduling</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"></span> Premium materials and industry-best practices</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"></span> Clean, precise, and respectful on every job</li>
            </ul>
            <div className="mt-6 rounded-xl bg-emerald-800 p-4">
              <p className="text-sm/6">Call us at <span className="font-semibold">(555) 123-4567</span><br />or email <span className="font-semibold">hello@verdantlandscapes.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
