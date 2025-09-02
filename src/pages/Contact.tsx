import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";
import { Layout } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";

export default function Contact() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: SITE.BRAND_NAME,
    url: `${SITE.SITE_URL}/contact`,
    telephone: SITE.PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.ADDRESS_STREET,
      addressLocality: SITE.CITY,
      addressRegion: SITE.REGION,
      postalCode: SITE.POSTAL_CODE,
      addressCountry: SITE.COUNTRY,
    },
  };

  return (
    <Layout bodyClass="contact">
      <Helmet>
        <title>Contact {SITE.BRAND_NAME} – Burnsville Hours, Address & Map</title>
        <meta name="description" content="Call, email, or visit our Burnsville showroom. See hours and map." />
        <link rel="canonical" href={`${SITE.SITE_URL}/contact`} />
      </Helmet>
      <JsonLd data={ld} />

      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <h1>Contact {SITE.BRAND_NAME}</h1>
          <p className="muted">Questions, quotes, or showroom visits — we’re here to help.</p>
        </div>

        <section aria-labelledby="contact">
          <div className="container grid cols-2">
            <div className="card">
              <h2 id="contact">Get in touch</h2>
              <p><strong>Phone:</strong> <a href={`tel:${SITE.PHONE}`}>{SITE.PHONE}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${SITE.EMAIL}`}>{SITE.EMAIL}</a></p>
              <p><strong>Address:</strong> <a href={`https://maps.google.com/?q=${encodeURIComponent(`${SITE.ADDRESS_STREET}, ${SITE.CITY}, ${SITE.REGION} ${SITE.POSTAL_CODE}`)}`}>{SITE.ADDRESS_STREET}, {SITE.CITY}, {SITE.REGION} {SITE.POSTAL_CODE}</a></p>
              <p><strong>Hours:</strong> {SITE.HOURS_WEEKDAYS} • {SITE.HOURS_SATURDAY}</p>
              <p><a className="btn" href={SITE.CALENDLY_URL}>Book an appointment</a></p>
            </div>
            <div className="card">
              <h2>Send a message</h2>
              <form method="post" action="/api/contact">
                <div className="row">
                  <div><label htmlFor="c-name">Name</label><input id="c-name" name="name" required /></div>
                  <div><label htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" required /></div>
                </div>
                <div className="row">
                  <div><label htmlFor="c-phone">Phone</label><input id="c-phone" name="phone" type="tel" /></div>
                  <div>
                    <label htmlFor="c-type">Inquiry Type</label>
                    <select id="c-type" name="type"><option>General</option><option>Design consult</option><option>Installation</option><option>Custom order</option></select>
                  </div>
                </div>
                <div><label htmlFor="c-msg">Message</label><textarea id="c-msg" name="message" rows={5}></textarea></div>
                <p><button className="btn" type="submit">Send</button></p>
              </form>
            </div>
          </div>
        </section>

        <section aria-labelledby="map">
          <div className="container">
            <h2 id="map">Find us</h2>
            <iframe className="map-embed" loading="lazy" title="Showroom map" allowFullScreen src={SITE.GOOGLE_MAPS_EMBED_SRC}></iframe>
          </div>
        </section>
      </main>
    </Layout>
  );
}

