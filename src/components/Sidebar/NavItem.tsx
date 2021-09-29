/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link, LinkProps } from "react-router-dom";

interface Props {
  href?: string;
  src?: string;
  icon?: IconProp;
  title?: string;
  label?: string;
  liProps?: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >;
  linkProps?: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement & LinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  imgProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}
const NavItem = ({
  href,
  src,
  icon,
  title,
  label,
  liProps,
  linkProps,
  imgProps,
}: Props) => (
  <li {...liProps} className="nav-item">
    <Link to={href || "#"} {...(linkProps as any)} className="nav-link">
      {icon && (
        <FontAwesomeIcon className="nav-icon fas" icon={icon} title={title} />
      )}
      {src && <img {...imgProps} alt={imgProps?.alt || ""} src={src} />}
      {label && <p>{label}</p>}
    </Link>
  </li>
);

export default NavItem;
