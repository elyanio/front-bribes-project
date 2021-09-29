import React, { PropsWithChildren } from "react";

export default function ContentWrapper({ children }: PropsWithChildren<{}>) {
  return <main className="dark-mode content-wrapper">{children}</main>;
}
