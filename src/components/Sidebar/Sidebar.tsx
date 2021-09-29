import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import MainSidebar from "./MainSidebar";
import NavItem from "./NavItem";
import NavSidebar from "./NavSidebar";

export interface NavItems {
  href: string;
  icon: IconProp;
  label: string;
}

interface Props {
  items: NavItems[];
}

export default function Sidebar({ items }: Props) {
  return (
    <MainSidebar brandName="Bribes">
      <NavSidebar>
        {items.map((i: NavItems) => (
          <NavItem
            key={Math.random()}
            href={i.href}
            icon={i.icon}
            label={i.label}
            liProps={{ key: Math.random() }}
          />
        ))}
      </NavSidebar>
    </MainSidebar>
  );
}
