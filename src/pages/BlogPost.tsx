import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { SITE } from "../config/site";
import { Layout } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BLOG } from "../config/site";
import { JsonLd } from "../components/JsonLd";

export default function BlogPost() {
  const { slug } = useParams();
  const title = (slug ?? "Blog Post").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const desc = `Read ${title} from ${SITE.BRAND_NAME}.`;
  const url = `${SITE.SITE_URL}/blog/${slug ?? "post"}`;
  const image = SITE.OG_IMAGE_URL;
  const isoDate = new Date().toISOString();

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: { "@type": "Person", name: BLOG.AUTHOR },
    datePublished: isoDate,
    image,
    mainEntityOfPage: url,
    publisher: { "@type": "Organization", name: SITE.BRAND_NAME, logo: { "@type": "ImageObject", url: SITE.LOGO_URL } },
  };

  return (
    <Layout bodyClass="blog-post">
      <Helmet>
        <title>{title} | {SITE.BRAND_NAME} Blog</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
      </Helmet>
      <JsonLd data={ld} />

      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: title }]} />
          <article>
            <h1>{title}</h1>
            <p className="muted"><time dateTime={isoDate}>{new Date(isoDate).toLocaleDateString()}</time> • by {BLOG.AUTHOR}</p>
            <img src={image} alt={`${title} hero`} style={{ width: "100%", borderRadius: 8 }} />
            <div>
              <h2>Introduction</h2>
              <p>...</p>
              <h2>Main points</h2>
              <p>...</p>
              <h2>Next steps</h2>
              <p>Considering new cabinets in {SITE.CITY}? <a href="/custom-cabinets">Request a custom quote</a> or <a href="/installation">learn about installation</a>.</p>
            </div>
          </article>
        </div>

        <section aria-labelledby="related">
          <div className="container">
            <h2 id="related">Related reading</h2>
            <ul>
              <li><a href="/blog/mn-remodel-costs-2025">Kitchen Remodeling Costs in Minnesota – 2025 Guide</a></li>
              <li><a href="/blog/in-stock-vs-custom">In‑Stock vs. Custom Cabinets – Which Is Right for You?</a></li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

