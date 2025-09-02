import React from "react";
import { Helmet } from "react-helmet-async";

type JsonLdProps = { data: unknown };

export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data);
  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  );
}

