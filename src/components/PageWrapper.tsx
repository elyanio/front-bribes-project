/* eslint-disable @typescript-eslint/no-explicit-any */
import { faPlus, faHome } from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren } from "react";
import RoutesName from "../utils/routes";
import { String } from "../utils/string";
import ContentWrapper from "./ContentWrapper";
import ErrorBoundary from "./error/ErrorBoundary";
import NavBar from "./NavBar";
import Sidebar, { NavItems } from "./Sidebar/Sidebar";

const PageWrapper = ({ children }: PropsWithChildren<{}>) => {
  const items: NavItems[] = [
    {
      href: RoutesName["/new-list"],
      icon: faPlus,
      label: String.NEW_LIST,
    },
    {
      href: RoutesName["/"],
      icon: faHome,
      label: String.MAIN_PAGE,
    },
  ];
  return (
    <ErrorBoundary>
      <ContentWrapper>
        <NavBar />
        <Sidebar items={items} />
        {children}
      </ContentWrapper>
      <div id="sidebar-overlay" data-widget="pushmenu" />
    </ErrorBoundary>
  );
};
export default PageWrapper;
