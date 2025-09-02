import React from "react";
import { Link } from "react-router-dom";

type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumbs" style={{ fontSize: 14, margin: "8px 0" }}>
      {items.map((item, idx) => (
        <span key={idx}>
          {idx > 0 && " \u203A "}
          {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
        </span>
      ))}
    </nav>
  );
}

