import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavItem from "./Sidebar/NavItem";

const NavBar = () => {
  return (
    <nav className="navbar-dark main-header navbar navbar-expand">
      <ul className="navbar-nav ml-auto">
        <NavItem
          icon={faBars}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          liProps={{ "data-widget": "pushmenu" } as any}
        />
      </ul>
    </nav>
  );
};

export default NavBar;
