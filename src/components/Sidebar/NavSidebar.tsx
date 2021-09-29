import React, { PropsWithChildren } from "react";

const NavSidebar = ({ children }: PropsWithChildren<{}>) => (
  <nav className="mt-2">
    <ul
      className="nav nav-pills nav-sidebar flex-column"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >
      {children}
    </ul>
  </nav>
);

export default NavSidebar;
