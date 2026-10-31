import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import site from '../content/site.json'

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | Campbell's Collision Repair Shop, Indianapolis IN"
        description="See collision repair, auto paint, and bodywork completed at Campbell's Collision Repair Shop in Indianapolis. Real shop work, real results."
        path="/gallery"
      />

      {/* Header */}
      <section className="py-20 md:py-28" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-brass mb-3">Our work</p>
          <h1 className="h-display text-4xl md:text-5xl text-smoke max-w-2xl">
            SHOP FLOOR TO FINISHED
          </h1>
          <p className="mt-4 text-smoke/55 max-w-lg leading-relaxed">
            Spray booth to polish bay. Every photo is from our shop.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.gallery.map((item) => (
              <figure key={item.id} className="gallery-card group">
                <div className="aspect-[4/3] overflow-hidden bg-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3">
                  <p className="text-sm font-medium text-iron">{item.title}</p>
                  <p className="text-xs text-muted mt-1">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="h-display text-xl md:text-2xl text-smoke">
              Your car could look like this. Start with a free estimate.
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
