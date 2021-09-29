import React, { PropsWithChildren } from "react";
import BrandLink from "./BrandLink";

interface Props {
  brandName: string;
}

const MainSidebar = ({ brandName, children }: PropsWithChildren<Props>) => (
  <aside className="main-sidebar sidebar-dark-primary elevation-4 sidebar-mini layout-fixed">
    <BrandLink name={brandName} alt="" />
    <section className="sidebar">{children}</section>
  </aside>
);

export default MainSidebar;
