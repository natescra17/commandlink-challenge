import React from "react";
import "./Layout.css";
import Header from "./Header";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
