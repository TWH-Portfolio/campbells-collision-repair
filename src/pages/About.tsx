import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import site from '../content/site.json'

const SHOP_IMG = 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=900&q=80'

export default function About() {
  return (
    <>
      <Seo
        title="About Campbell's Collision Repair Shop | Indianapolis, IN"
        description="Collision repair and auto body work at 1055 W 25th St. I-CAR Gold Class certified, PPG paint systems, and a 5.0 Google rating from 36 reviews."
        path="/about"
      />

      {/* Hero banner */}
      <section className="relative py-20 md:py-28" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">About</p>
          <h1 className="h-display text-4xl md:text-5xl text-smoke max-w-2xl">
            THE SHOP ON W 25TH ST
          </h1>
          <p className="mt-4 text-smoke/55 max-w-lg leading-relaxed">
            Collision repair, paint, and bodywork in Indianapolis.
            I-CAR Gold Class certified. Lifetime warranty on every repair.
          </p>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="h-display text-2xl md:text-3xl text-iron mb-4">
              BUILT FOR INDIANA ROADS
            </h2>
            <div className="space-y-4 text-sm text-iron/75 leading-relaxed">
              <p>
                Indiana winters put salt on every road and ice under every tire.
                We see the damage that comes from both: corrosion eating through rocker panels
                and collisions from black ice on I-465. This shop was built to handle all of it.
              </p>
              <p>
                Every estimate is written line by line. Every repair is documented with photos.
                We call before any scope changes. We text updates at every milestone.
                When the car is ready, it is washed, vacuumed, and inspected before you see it.
              </p>
              <p>
                We work directly with your insurance company. No phone tag, no back-and-forth.
                You drop off the vehicle and pick it up when it is done.
                The 5.0 rating across 36 reviews is the result of doing this the same way every time.
              </p>
            </div>
          </div>

          <div className="aspect-[4/5]">
            <img
              src={SHOP_IMG}
              alt="Technician working on structural repair at Campbell's Collision Repair Shop"
              className="w-full h-full object-cover"
              width={900}
              height={1125}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py section-divider" style={{ background: 'hsl(var(--card))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">The team</p>
          <h2 className="h-display text-2xl md:text-3xl text-iron mb-8">WHO DOES THE WORK</h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {site.team.map((member, i) => (
              <div key={i} className="bg-white border border-border p-6">
                <div
                  className="w-12 h-12 flex items-center justify-center text-sm font-semibold mb-4"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--iron))' }}
                >
                  {member.name.split(' ').map(w => w[0]).join('')}
                </div>
                <h3 className="h-display text-base text-iron">{member.name.toUpperCase()}</h3>
                <p className="text-xs text-brass mt-1">{member.role}</p>
                <p className="text-sm text-iron/70 mt-3 leading-relaxed">{member.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-py section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">Certifications</p>
          <h2 className="h-display text-2xl md:text-3xl text-iron mb-8">CREDENTIALS ON THE WALL</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {site.certifications.map((cert) => (
              <div key={cert} className="bg-card border border-border p-5 text-center">
                <p className="text-sm font-medium text-iron">{cert}</p>
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
              Ready to get your car fixed?
            </p>
            <p className="text-sm text-smoke/50 mt-1">
              Free estimates. Lifetime warranty. Direct insurance billing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/estimate"
              className="bg-brass text-iron px-7 py-3.5 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all text-center"
            >
              Get a free estimate
            </Link>
            <a
              href={site.business.phoneHref}
              className="border border-smoke/20 text-smoke/70 px-7 py-3.5 text-sm font-medium text-center hover:border-smoke/40 transition-colors"
            >
              {site.business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
