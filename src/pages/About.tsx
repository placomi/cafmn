import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";
import { Layout } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";

export default function About() {
  return (
    <Layout bodyClass="about">
      <Helmet>
        <title>About {SITE.BRAND_NAME} – Burnsville Kitchen Cabinet Company</title>
        <meta name="description" content="Learn our story, meet the team, and visit our Burnsville showroom." />
        <link rel="canonical" href={`${SITE.SITE_URL}/about`} />
      </Helmet>

      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <h1>About {SITE.BRAND_NAME}</h1>
          <p className="muted">Built in {SITE.CITY}. Focused on quality, speed, and service.</p>
        </div>

        <section aria-labelledby="story">
          <div className="container">
            <h2 id="story">Our story</h2>
            <p>{SITE.BRAND_NAME} started with a simple idea: make beautiful, durable cabinets accessible to Minnesota homeowners.</p>
          </div>
        </section>

        <section aria-labelledby="team">
          <div className="container">
            <h2 id="team">Meet the team</h2>
            <div className="grid cols-3">
              <div className="card"><div className="photo-slot ratio-1x1" role="img" aria-label="Team photo placeholder"><span>Team photo</span></div><p><strong>Alex</strong> – Designer</p></div>
              <div className="card"><div className="photo-slot ratio-1x1" role="img" aria-label="Team photo placeholder"><span>Team photo</span></div><p><strong>Sam</strong> – Install Lead</p></div>
              <div className="card"><div className="photo-slot ratio-1x1" role="img" aria-label="Team photo placeholder"><span>Team photo</span></div><p><strong>Jamie</strong> – Operations</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="cred">
          <div className="container">
            <h2 id="cred">Certifications & memberships</h2>
            <div className="grid cols-3">
              <div className="card"><p>BBB Accredited</p></div>
              <div className="card"><p>NKBA Member</p></div>
              <div className="card"><p>Licensed MN Contractor</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="visit">
          <div className="container">
            <h2 id="visit">Visit us</h2>
            <p><strong>Showroom:</strong> {SITE.ADDRESS_STREET}, {SITE.CITY}, {SITE.REGION} {SITE.POSTAL_CODE} • Hours: {SITE.HOURS_WEEKDAYS}, {SITE.HOURS_SATURDAY}</p>
            <iframe className="map-embed" loading="lazy" width="600" height="600" style={{border:0}} allowFullScreen title="Showroom map" src={SITE.GOOGLE_MAPS_EMBED_SRC}></iframe>
          </div>
        </section>
      </main>
    </Layout>
  );
}
