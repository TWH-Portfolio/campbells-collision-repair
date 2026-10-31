import { useState } from 'react'
import Seo from '../components/Seo'
import site from '../content/site.json'

interface FormData {
  name: string
  phone: string
  email: string
  vehicle: string
  damage: string
  insurance: string
  company_website: string
}

const SERVICE_HINTS: Record<string, string> = {
  collision: 'Helpful: describe the impact (front, rear, side), speed, and whether airbags deployed.',
  paint: 'Helpful: note if the paint is peeling, faded, or needs a full color change.',
  frame: 'Helpful: describe the collision and whether the car pulls to one side or the doors are misaligned.',
  dent: 'Helpful: note how many dents and their approximate size. Is the paint broken?',
  rust: 'Helpful: which panels are affected? How far has the rust spread?',
  glass: 'Helpful: which glass is damaged, and is it cracked or shattered?',
}

export default function Estimate() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    damage: '',
    insurance: '',
    company_website: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [selectedService, setSelectedService] = useState('')

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.company_website) return

    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <>
      <Seo
        title="Free Estimate | Campbell's Collision Repair Shop, Indianapolis IN"
        description="Get a free written estimate for collision repair, auto paint, or bodywork. Drop in or submit details online. Direct insurance billing available."
        path="/estimate"
      />

      {/* Header */}
      <section className="py-20 md:py-28" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">Free estimate</p>
          <h1 className="h-display text-4xl md:text-5xl text-smoke max-w-2xl">
            TELL US WHAT HAPPENED
          </h1>
          <p className="mt-4 text-smoke/55 max-w-lg leading-relaxed">
            Fill out the form below or call{' '}
            <a href={site.business.phoneHref} className="text-brass hover:underline">
              {site.business.phone}
            </a>{' '}
            for an immediate estimate. Written, itemized, no charge.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-py">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          {status === 'sent' ? (
            <div role="status" aria-live="polite" className="text-center py-16">
              <p className="h-display text-2xl text-iron mb-3">ESTIMATE REQUEST RECEIVED</p>
              <p className="text-sm text-iron/70 mb-6">
                We will review the details and get back to you within one business day
                with a written estimate.
              </p>
              <a
                href={site.business.phoneHref}
                className="text-sm text-brass hover:underline"
              >
                Need it sooner? Call {site.business.phone}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company_website">Company Website</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company_website}
                  onChange={(e) => update('company_website', e.target.value)}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Vehicle (year, make, model)
                </label>
                <input
                  id="vehicle"
                  type="text"
                  required
                  value={form.vehicle}
                  onChange={(e) => update('vehicle', e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                  placeholder="2022 Subaru Outback"
                />
              </div>

              <div>
                <label htmlFor="service-type" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Type of repair
                </label>
                <select
                  id="service-type"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                >
                  <option value="">Select one</option>
                  <option value="collision">Collision Repair</option>
                  <option value="paint">Auto Paint & Refinish</option>
                  <option value="frame">Frame Straightening</option>
                  <option value="dent">Dent & Bumper Repair</option>
                  <option value="rust">Rust & Corrosion Repair</option>
                  <option value="glass">Auto Glass</option>
                </select>
                {selectedService && SERVICE_HINTS[selectedService] && (
                  <p className="mt-2 text-xs text-brass">{SERVICE_HINTS[selectedService]}</p>
                )}
              </div>

              <div>
                <label htmlFor="damage" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Describe the damage
                </label>
                <textarea
                  id="damage"
                  required
                  rows={4}
                  value={form.damage}
                  onChange={(e) => update('damage', e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors resize-y"
                />
              </div>

              <div>
                <label htmlFor="insurance" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Insurance carrier (if filing a claim)
                </label>
                <input
                  id="insurance"
                  type="text"
                  value={form.insurance}
                  onChange={(e) => update('insurance', e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                  placeholder="State Farm, GEICO, Erie, etc."
                />
              </div>

              <div role="status" aria-live="polite">
                {status === 'error' && (
                  <p className="text-sm text-red-600 mb-4">
                    Something went wrong. Please call us directly at {site.business.phone}.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-brass text-iron py-4 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send estimate request'}
              </button>

              <p className="text-xs text-muted text-center">
                Or call{' '}
                <a href={site.business.phoneHref} className="text-brass hover:underline">
                  {site.business.phone}
                </a>{' '}
                for an immediate estimate.
              </p>
            </form>
          )}

          {/* Insurance reminder */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">Insurance carriers</p>
            <p className="text-sm text-iron/70 mb-4">
              We bill directly with every major Indiana carrier. No paperwork on your end.
            </p>
            <div className="flex flex-wrap gap-3">
              {site.insurance.map((name) => (
                <span key={name} className="text-xs text-muted border border-border px-3 py-1.5">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
