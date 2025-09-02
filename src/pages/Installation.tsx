import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";
import { Layout } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";

export default function Installation() {
  return (
    <Layout bodyClass="installation">
      <Helmet>
        <title>Kitchen Cabinet Installation – Licensed Twin Cities Installers | {SITE.BRAND_NAME}</title>
        <meta name="description" content="Professional cabinet installation across the Twin Cities. Clean, insured crews and on‑time schedules." />
        <link rel="canonical" href={`${SITE.SITE_URL}/installation`} />
      </Helmet>

      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Installation" }]} />
          <h1>Professional Kitchen Cabinet Installation – Twin Cities</h1>
          <p className="muted">Licensed, insured installers with clean, on‑time work throughout {SITE.CITY} and beyond.</p>
        </div>

        <section aria-labelledby="overview">
          <div className="container">
            <h2 id="overview">What we install</h2>
            <div className="grid cols-3">
              <div className="card"><h3>Bases & uppers</h3><p>Leveling, shimming, and anchoring for perfect fit.</p></div>
              <div className="card"><h3>Islands & peninsulas</h3><p>Custom panels, seating, and power options.</p></div>
              <div className="card"><h3>Finishing</h3><p>Crown, toe‑kick, fillers, and hardware.</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="before-after">
          <div className="container">
            <h2 id="before-after">Before & after</h2>
            <div className="grid cols-2">
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Before photo placeholder"><span>Before photo</span></div></div>
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="After photo placeholder"><span>After photo</span></div></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="cta">
          <div className="container card">
            <h2 id="cta">Request installation quote</h2>
            <form method="post" action="/api/install-quote">
              <div className="row">
                <div><label htmlFor="i-name">Name</label><input id="i-name" name="name" required /></div>
                <div><label htmlFor="i-email">Email</label><input id="i-email" type="email" name="email" required /></div>
                <div><label htmlFor="i-phone">Phone</label><input id="i-phone" type="tel" name="phone" required /></div>
              </div>
              <div className="row">
                <div><label htmlFor="i-address">Install Address</label><input id="i-address" name="address" required /></div>
                <div><label htmlFor="i-date">Desired Date</label><input id="i-date" type="date" name="date" /></div>
              </div>
              <div>
                <label htmlFor="i-notes">Access notes</label>
                <textarea id="i-notes" name="notes" rows={4} placeholder="Parking, elevator, pets, etc."></textarea>
              </div>
              <p><button className="btn" type="submit">Get Install Quote</button> <a className="btn secondary" href={SITE.CALENDLY_URL}>Book a site visit</a></p>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
