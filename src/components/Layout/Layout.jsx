import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Layout.css";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="layout">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="main-content">{children}</main>
      </div>
    </>
  );
}
