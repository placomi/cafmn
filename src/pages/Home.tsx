import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";
import { Layout } from "../components/Header";
import { JsonLd } from "../components/JsonLd";

export default function Home() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: SITE.BRAND_NAME,
    url: `${SITE.SITE_URL}/`,
    telephone: SITE.PHONE,
    image: SITE.OG_IMAGE_URL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.ADDRESS_STREET,
      addressLocality: SITE.CITY,
      addressRegion: SITE.REGION,
      postalCode: SITE.POSTAL_CODE,
      addressCountry: SITE.COUNTRY,
    },
    areaServed: [
      { "@type": "City", name: SITE.CITY },
      { "@type": "City", name: "Minneapolis" },
      { "@type": "City", name: "Saint Paul" },
      { "@type": "AdministrativeArea", name: "Twin Cities" },
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "16:00" },
    ],
    sameAs: [SITE.FACEBOOK_URL, SITE.INSTAGRAM_URL, SITE.GMB_URL],
  };
  return (
    <Layout bodyClass="home">
      <Helmet>
        <title>Cabinets & Flooring in Burnsville, MN | Design, Install | {SITE.BRAND_NAME}</title>
        <meta
          name="description"
          content="Shop in‑stock and custom kitchen cabinets in Burnsville. Free design consults, fast local pickup, expert installation. Serving Minneapolis–Saint Paul."
        />
        <link rel="canonical" href={`${SITE.SITE_URL}/`} />
        <meta property="og:title" content={`Cabinets & Flooring in Burnsville, MN | ${SITE.BRAND_NAME}`} />
        <meta property="og:description" content="Cabinets and flooring with free design help, local showroom, and trusted installation across the Twin Cities." />
        <meta property="og:url" content={`${SITE.SITE_URL}/`} />
        <meta property="og:image" content={SITE.OG_IMAGE_URL} />
      </Helmet>
      <JsonLd data={ld} />

      <main id="main-content">
        <section className="hero">
          <div className="container">
            <div className="grid cols-2">
              <div>
                <div className="breadcrumbs" aria-label="Breadcrumbs">Home</div>
                <h1>Cabinets and flooring for Minnesota homes.</h1>
                <p className="muted">Beautiful, durable cabinets and floors — designed, delivered, and installed across the Twin Cities.</p>
                <p>
                  <a className="btn" href={SITE.CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a free design consult</a>
                  <a className="btn secondary" href="/custom-cabinets" style={{ marginLeft: 8 }}>Get an estimate</a>
                </p>
                <p className="muted">Free in‑home measuring • 5‑year warranty • Twin Cities delivery</p>
              </div>
              <div>
                <div className="photo-slot ratio-4x3" role="img" aria-label="Hero kitchen photo placeholder">
                  <span>Hero kitchen photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="why">
          <div className="container">
            <h2 id="why">Why choose {SITE.BRAND_NAME}</h2>
            <div className="grid cols-3">
              <div className="card"><h3>Free design help</h3><p>Friendly guidance to choose styles, colors, and layout.</p></div>
              <div className="card"><h3>Trusted installers</h3><p>Licensed crews who respect your home and schedule.</p></div>
              <div className="card"><h3>Quality materials</h3><p>Durable finishes and hardware designed for daily life.</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="explore">
          <div className="container">
            <h2 id="explore">Explore cabinets & flooring</h2>
            <div className="grid cols-2">
              <div className="card">
                <div className="photo-slot ratio-16x9" role="img" aria-label="Cabinets category photo placeholder"><span>Cabinets photo</span></div>
                <h3>Cabinets</h3>
                <p className="muted">Shaker, modern, and custom options to fit your home.</p>
                <p><a className="btn" href="/custom-cabinets">See cabinet options</a></p>
              </div>
              <div className="card">
                <div className="photo-slot ratio-16x9" role="img" aria-label="Flooring category photo placeholder"><span>Flooring photo</span></div>
                <h3>Flooring</h3>
                <p className="muted">Luxury vinyl plank, hardwood, laminate, and tile.</p>
                <p><a className="btn secondary" href="/flooring">Explore flooring</a></p>
              </div>
            </div>
          </div>
        </section>

        <section className="tight" aria-label="Service area">
          <div className="container">
            <p className="muted">Proudly serving {SITE.CITY}, Minneapolis, Saint Paul & the Twin Cities</p>
          </div>
        </section>

        <section aria-labelledby="process">
          <div className="container">
            <h2 id="process">How it works</h2>
            <div className="grid cols-4">
              <div className="card"><h3>1. Measure</h3><p>Simple measuring checklist or free in‑home measure.</p></div>
              <div className="card"><h3>2. Design</h3><p>Pick styles, finishes, and layout with our team.</p></div>
              <div className="card"><h3>3. Build</h3><p>Stock, semi‑custom, or custom to fit your space.</p></div>
              <div className="card"><h3>4. Install</h3><p>Pro installation with cleanup and warranty.</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="portfolio">
          <div className="container">
            <h2 id="portfolio">Recent projects</h2>
            <div className="grid cols-3">
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Project photo placeholder"><span>Project photo</span></div><p className="muted">Apple Valley • $12–15k</p></div>
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Project photo placeholder"><span>Project photo</span></div><p className="muted">Minneapolis • $18–25k</p></div>
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Project photo placeholder"><span>Project photo</span></div><p className="muted">Saint Paul • $9–12k</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="pricing">
          <div className="container">
            <h2 id="pricing">Pricing snapshots</h2>
            <div className="grid cols-3">
              <div className="card"><h3>Starter</h3><p className="muted">From $6,999</p><p>Great value, fast lead times.</p></div>
              <div className="card"><h3>Mid</h3><p className="muted">From $11,999</p><p>Most popular — flexible styles and sizes.</p></div>
              <div className="card"><h3>Premium</h3><p className="muted">From $19,999</p><p>Custom finishes, built‑ins, and details.</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="reviews">
          <div className="container">
            <h2 id="reviews">What customers say</h2>
            <div className="grid cols-3">
              <div className="card"><p>“Beautiful cabinets and on time install.”</p><p className="muted">— Burnsville homeowner</p></div>
              <div className="card"><p>“Design help was a game changer.”</p><p className="muted">— Minneapolis</p></div>
              <div className="card"><p>“Picked up same‑day from the warehouse.”</p><p className="muted">— Saint Paul</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="lead">
          <div className="container card">
            <h2 id="lead">Get our Kitchen Planning Checklist (free)</h2>
            <form method="post" action="/api/lead-magnet" aria-label="Lead capture form">
              <div className="row">
                <div><label htmlFor="lm-email">Email</label><input id="lm-email" name="email" type="email" required placeholder="you@example.com" /></div>
                <div><label htmlFor="lm-zip">ZIP</label><input id="lm-zip" name="zip" type="text" inputMode="numeric" pattern="[0-9]*" placeholder="55337" /></div>
              </div>
              <p><button className="btn" type="submit">Send me the checklist</button></p>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
