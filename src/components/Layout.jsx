import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="br-layout">
      <Header />
      <div className="br-main">
        <Sidebar />
        <main className="br-content">{children}</main>
      </div>
    </div>
  );
}
