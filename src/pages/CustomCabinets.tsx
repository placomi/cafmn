import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";
import { Layout } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";

export default function CustomCabinets() {
  return (
    <Layout bodyClass="custom">
      <Helmet>
        <title>Custom Kitchen Cabinets in {SITE.CITY}, MN | Free Design | {SITE.BRAND_NAME}</title>
        <meta name="description" content={`Custom sizes, colors, and designs. Free design consults in ${SITE.CITY}. Serving all of Minnesota.`} />
        <link rel="canonical" href={`${SITE.SITE_URL}/custom-cabinets`} />
      </Helmet>

      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Custom Cabinets" }]} />
          <h1>Custom Kitchen Cabinets in {SITE.CITY} – Serving All of Minnesota</h1>
          <p className="muted">Special sizes, colors, and designs. Built for your space.</p>
        </div>

        <section aria-labelledby="gallery">
          <div className="container">
            <h2 id="gallery">Custom work gallery</h2>
            <div className="grid cols-3">
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Custom project photo placeholder"><span>Add photo</span></div><p className="muted">Navy shaker island • Burnsville</p></div>
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Custom project photo placeholder"><span>Add photo</span></div><p className="muted">Pantry cabinets • Minneapolis</p></div>
              <div className="card"><div className="photo-slot ratio-4x3" role="img" aria-label="Custom project photo placeholder"><span>Add photo</span></div><p className="muted">Walnut slab • Saint Paul</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="steps">
          <div className="container">
            <h2 id="steps">Our simple process</h2>
            <div className="grid cols-4">
              <div className="card"><h3>1. Consult</h3><p>Free design consult in‑showroom or virtual.</p></div>
              <div className="card"><h3>2. Plan</h3><p>Specs, finishes, and timeline set.</p></div>
              <div className="card"><h3>3. Build</h3><p>Crafted to your exact measurements.</p></div>
              <div className="card"><h3>4. Install</h3><p>Licensed installers, clean and fast.</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="form">
          <div className="container card">
            <h2 id="form">Request a custom quote</h2>
            <form method="post" action="/api/custom-quote" encType="multipart/form-data">
              <div className="row">
                <div><label htmlFor="name">Name</label><input id="name" name="name" required /></div>
                <div><label htmlFor="email">Email</label><input id="email" type="email" name="email" required /></div>
                <div><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required /></div>
                <div><label htmlFor="zip">ZIP</label><input id="zip" name="zip" inputMode="numeric" pattern="[0-9]*" /></div>
              </div>
              <div className="row">
                <div>
                  <label htmlFor="projectType">Project Type</label>
                  <select id="projectType" name="projectType">
                    <option>Kitchen</option><option>Bath</option><option>Laundry</option><option>Basement bar</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget">
                    <option>$5k–10k</option><option>$10k–20k</option><option>$20k–35k</option><option>$35k+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline">Timeline</label>
                  <select id="timeline" name="timeline">
                    <option>ASAP</option><option>1–2 months</option><option>3–4 months</option><option>Flexible</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="details">Project Details</label>
                <textarea id="details" name="details" rows={5} placeholder="Tell us about your space, styles, colors..."></textarea>
              </div>
              <div>
                <label htmlFor="layout">Upload Kitchen Layout (optional)</label>
                <input id="layout" name="layout" type="file" accept=".pdf,.jpg,.png" />
              </div>
              <p><label><input type="checkbox" name="consent" required /> I agree to be contacted about my project.</label></p>
              <p><button className="btn" type="submit">Request Quote</button> <a className="btn secondary" href={SITE.CALENDLY_URL}>Book a consult</a></p>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
