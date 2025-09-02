import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";
import { Layout } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";

export default function BlogIndex() {
  return (
    <Layout bodyClass="blog">
      <Helmet>
        <title>Kitchen Cabinet Tips & Guides | {SITE.BRAND_NAME} Blog</title>
        <meta name="description" content="Practical cabinet advice for Minnesota homes: styles, budgets, installation, and care." />
        <link rel="canonical" href={`${SITE.SITE_URL}/blog`} />
      </Helmet>

      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          <h1>Kitchen Cabinet Tips & Guides</h1>
          <p className="muted">Learn about styles, budgets, and installs across Minnesota.</p>
        </div>

        <section aria-labelledby="posts">
          <div className="container">
            <h2 id="posts" className="muted" style={{ marginBottom: 8 }}>Latest posts</h2>
            <article className="card">
              <h3><a href="/blog/burnsville-white-shaker">5 Reasons Burnsville Homeowners Love White Shaker Cabinets</a></h3>
              <p className="muted">3 min read • {SITE.CITY}</p>
              <p>Timeless style, great value, and easy to pair with Minnesota homes...</p>
            </article>
            <article className="card">
              <h3><a href="/blog/mn-remodel-costs-2025">Kitchen Remodeling Costs in Minnesota – 2025 Guide</a></h3>
              <p className="muted">6 min read • Twin Cities</p>
              <p>Compare stock vs. custom, installation, and finishing costs...</p>
            </article>
            <article className="card">
              <h3><a href="/blog/in-stock-vs-custom">In‑Stock vs. Custom Cabinets – Which Is Right for You?</a></h3>
              <p className="muted">4 min read • {SITE.CITY}</p>
              <p>Understand timelines, budgets, and options for your project...</p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

