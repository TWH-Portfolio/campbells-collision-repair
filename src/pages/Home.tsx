import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Shield, Clock, ChevronDown } from 'lucide-react'
import Seo from '../components/Seo'
import site from '../content/site.json'

const HERO_IMG = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=80'

/* ---------- Process timeline (vertical, differs from Discount's horizontal) ---------- */
function ProcessTimeline() {
  return (
    <section className="section-py section-divider" id="process">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">How it works</p>
        <h2 className="h-display text-3xl md:text-4xl text-iron mb-12">
          FOUR STEPS. ONE CALL TO START.
        </h2>

        <div className="grid gap-0 md:grid-cols-1 max-w-2xl">
          {site.process.map((p, i) => (
            <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Vertical line */}
              {i < site.process.length - 1 && (
                <div
                  className="absolute left-5 top-12 bottom-0 w-px"
                  style={{ background: 'hsl(var(--border))' }}
                />
              )}
              <div className="shrink-0">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 text-sm font-semibold"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--iron))' }}
                >
                  {p.step}
                </span>
              </div>
              <div className="pt-1">
                <h3 className="h-display text-lg text-iron mb-2">{p.title.toUpperCase()}</h3>
                <p className="text-sm text-iron/70 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Reviews ---------- */
function ReviewsStrip() {
  return (
    <section className="section-py" style={{ background: 'hsl(var(--card))' }} id="reviews">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">What customers say</p>
            <h2 className="h-display text-3xl md:text-4xl text-iron">
              {site.business.rating} STARS ACROSS {site.business.reviewCount} REVIEWS
            </h2>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brass text-brass" />
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <div
              key={i}
              className="service-card bg-white border border-border p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-brass text-brass" />
                ))}
              </div>
              <p className="text-sm text-iron/80 leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-3">
                <p className="text-sm font-medium text-iron">{t.author}</p>
                <p className="text-xs text-muted mt-0.5">{t.detail}</p>
                <p className="text-xs text-muted mt-0.5">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Services snapshot ---------- */
function ServicesSnapshot() {
  return (
    <section className="section-py section-divider" id="services-snapshot">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">Services</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="h-display text-3xl md:text-4xl text-iron">WHAT WE FIX</h2>
          <Link
            to="/services"
            className="text-sm text-brass hover:underline transition-colors shrink-0"
          >
            View all services
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, i) => (
            <Link
              key={i}
              to="/services"
              className="service-card bg-white border border-border p-6 block"
            >
              <h3 className="h-display text-lg text-iron mb-2">{s.title.toUpperCase()}</h3>
              <p className="text-sm text-iron/70 leading-relaxed mb-3">{s.body}</p>
              <p className="text-xs text-brass">{s.ideal}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Insurance strip ---------- */
function InsuranceStrip() {
  return (
    <section className="py-12 border-y" style={{ background: 'hsl(var(--iron))' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">Insurance</p>
        <h2 className="h-display text-2xl md:text-3xl text-smoke mb-2">
          WE HANDLE THE PAPERWORK
        </h2>
        <p className="text-sm text-smoke/55 mb-8 max-w-lg mx-auto">
          Direct billing with every major Indiana carrier. You drop off the car. We deal with the adjuster.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {site.insurance.map((name) => (
            <span
              key={name}
              className="text-sm text-smoke/60 border border-smoke/15 px-4 py-2"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Warranty block ---------- */
function WarrantyBlock() {
  return (
    <section className="py-16" style={{ background: 'hsl(var(--accent))' }}>
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        <Shield className="w-10 h-10 mx-auto mb-4" style={{ color: 'hsl(var(--iron))' }} />
        <h2 className="h-display text-3xl md:text-4xl mb-3" style={{ color: 'hsl(var(--iron))' }}>
          LIFETIME WORKMANSHIP WARRANTY
        </h2>
        <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: 'hsl(var(--iron) / 0.75)' }}>
          Every repair we complete is backed by a written lifetime warranty for as long as you own the vehicle.
          If anything we touched fails, we fix it at no charge. In writing, before you drive off the lot.
        </p>
      </div>
    </section>
  )
}

/* ---------- FAQ Accordion ---------- */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-py section-divider" id="faq">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-32">
            <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">Common questions</p>
            <h2 className="h-display text-3xl md:text-4xl text-iron">
              ANSWERS BEFORE YOU ASK
            </h2>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
              If your question is not here, call us at{' '}
              <a href={site.business.phoneHref} className="text-brass hover:underline">
                {site.business.phone}
              </a>{' '}
              and we will answer it directly.
            </p>
          </div>

          <div className="space-y-0">
            {site.faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-iron pr-4 group-hover:text-brass transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5">
                      <p className="text-sm text-iron/70 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Map + CTA ---------- */
function MapCta() {
  return (
    <section className="section-py" style={{ background: 'hsl(var(--card))' }} id="visit">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">Visit us</p>
            <h2 className="h-display text-3xl md:text-4xl text-iron mb-4">
              1055 W 25TH ST
            </h2>
            <address className="not-italic text-sm text-iron/70 space-y-1 mb-6">
              <p>{site.business.address.full}</p>
              <p>{site.business.hours.weekday}</p>
              <p>{site.business.hours.saturday}</p>
            </address>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/estimate"
                className="bg-brass text-iron px-6 py-3.5 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all text-center"
              >
                Request a free estimate
              </Link>
              <a
                href={site.business.phoneHref}
                className="border border-border px-6 py-3.5 text-sm font-medium text-iron/70 hover:text-iron hover:border-iron/30 transition-colors text-center"
              >
                Call {site.business.phone}
              </a>
            </div>
          </div>

          <div className="aspect-[4/3] w-full">
            <iframe
              title="Campbell's Collision Repair Shop location"
              src={`https://maps.google.com/maps?q=${site.business.mapQuery}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Certifications strip ---------- */
function CertsStrip() {
  return (
    <div className="border-y border-border py-6">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
        {site.certifications.map((c) => (
          <span key={c} className="text-xs uppercase tracking-[0.18em] text-muted">
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- Home page ---------- */
export default function Home() {
  return (
    <>
      <Seo
        title="Campbell's Collision Repair Shop | Auto Body Shop in Indianapolis, IN"
        description="Collision repair, auto paint, and bodywork at 1055 W 25th St, Indianapolis, IN. Free estimates. Direct insurance billing. Lifetime workmanship warranty. 5.0 stars, 36 reviews."
        path="/"
      />

      {/* Hero: full-bleed photo with gradient overlay */}
      <section className="relative min-h-[90vh] flex items-end" id="hero">
        <img
          src={HERO_IMG}
          alt="Technician applying clearcoat in the paint booth at Campbell's Collision Repair Shop"
          className="absolute inset-0 w-full h-full object-cover hero-kenburns"
          style={{ animation: 'kenburns 12s ease-out forwards' }}
          width={1600}
          height={1067}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-iron via-iron/60 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 w-full">
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-brass text-brass" />
            ))}
            <span className="text-sm text-smoke/70 ml-2">
              {site.business.rating} from {site.business.reviewCount} reviews
            </span>
          </div>

          <h1 className="h-display text-4xl sm:text-5xl md:text-7xl text-smoke max-w-3xl">
            INDIANAPOLIS COLLISION REPAIR.{'\n'}DONE RIGHT.
          </h1>

          <p className="mt-5 text-smoke/65 text-base md:text-lg max-w-xl leading-relaxed">
            Free written estimates. Direct insurance billing. Lifetime workmanship warranty.
            On W 25th St, near the Speedway.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/estimate"
              className="bg-brass text-iron px-7 py-4 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all text-center"
            >
              Get a free estimate
            </Link>
            <a
              href={site.business.phoneHref}
              className="border border-smoke/25 text-smoke/80 px-7 py-4 text-sm font-medium hover:border-smoke/50 hover:text-white transition-colors text-center"
            >
              Call {site.business.phone}
            </a>
          </div>
        </div>
      </section>

      <CertsStrip />
      <ProcessTimeline />
      <ReviewsStrip />
      <ServicesSnapshot />
      <InsuranceStrip />
      <WarrantyBlock />
      <FaqAccordion />
      <MapCta />
    </>
  )
}
