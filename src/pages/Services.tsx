import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import site from '../content/site.json'

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Campbell's Collision Repair Shop, Indianapolis IN"
        description="Collision repair, auto paint, frame straightening, dent repair, rust and corrosion repair, and auto glass. Free estimates. Lifetime workmanship warranty."
        path="/services"
      />

      {/* Header */}
      <section className="py-20 md:py-28" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">Services</p>
          <h1 className="h-display text-4xl md:text-5xl text-smoke max-w-2xl">
            WHAT WE FIX
          </h1>
          <p className="mt-4 text-smoke/55 max-w-lg leading-relaxed">
            Collision repair, paint, frame work, dent removal, rust repair, and glass.
            Every service backed by a lifetime workmanship warranty.
          </p>
        </div>
      </section>

      {/* Service list */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="space-y-8">
            {site.services.map((s, i) => (
              <div
                key={i}
                id={s.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}
                className="service-card bg-white border border-border p-8 grid gap-6 md:grid-cols-3 md:items-start"
              >
                <div className="md:col-span-2">
                  <h2 className="h-display text-xl text-iron mb-3">{s.title.toUpperCase()}</h2>
                  <p className="text-sm text-iron/75 leading-relaxed">{s.body}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-xs uppercase tracking-[0.18em] text-brass mb-1">Ideal for</p>
                  <p className="text-sm text-iron/60">{s.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py section-divider" style={{ background: 'hsl(var(--card))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">How it works</p>
          <h2 className="h-display text-2xl md:text-3xl text-iron mb-8">FROM ESTIMATE TO PICKUP</h2>

          <div className="grid gap-8 md:grid-cols-4">
            {site.process.map((p, i) => (
              <div key={i}>
                <span
                  className="inline-flex items-center justify-center w-10 h-10 text-sm font-semibold mb-3"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--iron))' }}
                >
                  {p.step}
                </span>
                <h3 className="h-display text-base text-iron mb-2">{p.title.toUpperCase()}</h3>
                <p className="text-sm text-iron/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="h-display text-xl md:text-2xl text-smoke">
              Need a repair? Start with a free estimate.
            </p>
          </div>
          <Link
            to="/estimate"
            className="bg-brass text-iron px-7 py-3.5 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all text-center shrink-0"
          >
            Request estimate
          </Link>
        </div>
      </section>
    </>
  )
}
