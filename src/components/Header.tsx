import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site";

export function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="kicker">Serving {SITE.CITY}, Minneapolis & Saint Paul</div>
        <div><a href={`tel:${SITE.PHONE}`}>Call {SITE.PHONE}</a> • <a href={SITE.GMB_URL} rel="noopener noreferrer" target="_blank">Showroom & Hours</a></div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky">
      <div className="container">
        <nav aria-label="Main">
          <Link to="/" className="logo" aria-label={`${SITE.BRAND_NAME} home`}>
            <img src={SITE.LOGO_URL} alt={`${SITE.BRAND_NAME} logo`} style={{ height: 36 }} />
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/custom-cabinets">Custom Cabinets</Link>
            <Link to="/flooring">Flooring</Link>
            <Link to="/installation">Installation</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <a className="btn" href={SITE.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book Free Consult
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="cols">
          <div>
            <h2 style={{ color: "#fff", marginBottom: 8 }}>{SITE.BRAND_NAME}</h2>
            <p className="muted">{SITE.TAGLINE}</p>
            <p>
              <strong>Address:</strong> {SITE.ADDRESS_STREET}, {SITE.CITY}, {SITE.REGION} {SITE.POSTAL_CODE}
            </p>
            <p>
              <strong>Phone:</strong> <a href={`tel:${SITE.PHONE}`}>{SITE.PHONE}</a> • <strong>Email:</strong>{" "}
              <a href={`mailto:${SITE.EMAIL}`}>{SITE.EMAIL}</a>
            </p>
            <p>
              <strong>Hours:</strong> {SITE.HOURS_WEEKDAYS} • {SITE.HOURS_SATURDAY}
            </p>
            <p>
              <a href={SITE.FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a> •{" "}
              <a href={SITE.GMB_URL} target="_blank" rel="noopener noreferrer">Google</a>
            </p>
          </div>
          <div>
            <h3 style={{ color: "#fff" }}>Quick Links</h3>
            <p><Link to="/custom-cabinets">Custom Orders</Link></p>
            <p><Link to="/flooring">Flooring</Link></p>
            <p><Link to="/installation">Installation Services</Link></p>
            <p><Link to="/about">About Us</Link></p>
            <p><Link to="/contact">Contact</Link></p>
            <p><Link to="/blog">Blog</Link></p>
          </div>
        </div>
        <p className="muted" style={{ padding: "8px 0", borderTop: "1px solid #222" }}>
          © {new Date().getFullYear()} {SITE.BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function Layout({ children, bodyClass }: { children: React.ReactNode; bodyClass?: string }) {
  return (
    <div className={bodyClass ?? ""}>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
