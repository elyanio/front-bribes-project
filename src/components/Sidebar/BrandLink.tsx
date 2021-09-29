import React from "react";

interface Props {
  href?: string;
  name?: string;
  alt: string;
}

const BrandLink = ({ href = "#", name = "", alt }: Props) => (
  <a href={href} className="brand-link">
    <span className="brand-text font-weight-light">{name}</span>
  </a>
);

export default BrandLink;
