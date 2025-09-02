import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";
import { Layout } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";

export default function Flooring() {
  return (
    <Layout bodyClass="flooring">
      <Helmet>
        <title>Flooring in {SITE.CITY} – LVP, Hardwood, Laminate & Tile | {SITE.BRAND_NAME}</title>
        <meta name="description" content={`Beautiful, durable flooring for Minnesota homes. Shop LVP, hardwood, laminate, and tile with trusted installation in ${SITE.CITY}.`} />
        <link rel="canonical" href={`${SITE.SITE_URL}/flooring`} />
      </Helmet>

      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Flooring" }]} />
          <h1>Flooring for real life</h1>
          <p className="lede">Luxury vinyl plank, hardwood, laminate, and tile — selected for Minnesota homes and seasons.</p>
        </div>

        <section aria-labelledby="types">
          <div className="container">
            <h2 id="types">Popular options</h2>
            <div className="grid cols-4">
              <div className="card">
                <div className="photo-slot ratio-4x3" role="img" aria-label="LVP photo placeholder"><span>LVP photo</span></div>
                <h3>Luxury Vinyl Plank</h3>
                <p className="muted">Water‑resistant and family‑friendly, in wood and stone looks.</p>
              </div>
              <div className="card">
                <div className="photo-slot ratio-4x3" role="img" aria-label="Hardwood photo placeholder"><span>Hardwood photo</span></div>
                <h3>Hardwood</h3>
                <p className="muted">Timeless character in oak, maple, and walnut.</p>
              </div>
              <div className="card">
                <div className="photo-slot ratio-4x3" role="img" aria-label="Laminate photo placeholder"><span>Laminate photo</span></div>
                <h3>Laminate</h3>
                <p className="muted">Great looks with easy care and value.</p>
              </div>
              <div className="card">
                <div className="photo-slot ratio-4x3" role="img" aria-label="Tile photo placeholder"><span>Tile photo</span></div>
                <h3>Tile</h3>
                <p className="muted">Durable for kitchens and baths with many styles.</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="gallery">
          <div className="container">
            <h2 id="gallery">Recent installations</h2>
            <div className="grid cols-3">
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Flooring project placeholder"><span>Project photo</span></div><p className="muted">Eagan • LVP in kitchen</p></div>
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Flooring project placeholder"><span>Project photo</span></div><p className="muted">Apple Valley • Hardwood refinish</p></div>
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Flooring project placeholder"><span>Project photo</span></div><p className="muted">Lakeville • Tile in bath</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="quote">
          <div className="container card">
            <h2 id="quote">Request a flooring quote</h2>
            <form method="post" action="/api/flooring-quote">
              <div className="row">
                <div><label htmlFor="f-name">Name</label><input id="f-name" name="name" required /></div>
                <div><label htmlFor="f-email">Email</label><input id="f-email" type="email" name="email" required /></div>
                <div><label htmlFor="f-phone">Phone</label><input id="f-phone" type="tel" name="phone" required /></div>
              </div>
              <div className="row">
                <div>
                  <label htmlFor="f-type">Flooring Type</label>
                  <select id="f-type" name="type"><option>LVP</option><option>Hardwood</option><option>Laminate</option><option>Tile</option><option>Unsure</option></select>
                </div>
                <div><label htmlFor="f-area">Approx. Square Feet</label><input id="f-area" name="area" inputMode="numeric" placeholder="e.g., 450" /></div>
                <div><label htmlFor="f-zip">ZIP</label><input id="f-zip" name="zip" inputMode="numeric" pattern="[0-9]*" /></div>
              </div>
              <div>
                <label htmlFor="f-notes">Notes</label>
                <textarea id="f-notes" name="notes" rows={4} placeholder="Rooms, subfloor, timeline..."></textarea>
              </div>
              <p><button className="btn" type="submit">Get Flooring Quote</button> <a className="btn secondary" href={SITE.CALENDLY_URL}>Book a showroom visit</a></p>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}

