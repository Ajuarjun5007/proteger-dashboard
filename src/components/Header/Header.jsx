import { useState } from "react";
import "./Header.css";
import logo_icon from "../../assets/header_asset/c_dashboard.png";

export default function Header({ toggleSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (toggleSidebar) {
      toggleSidebar();
    }
  };

  return (
    <>
    <header className="header">
      <div className="header-left">
        <img src={logo_icon} alt="Proteger AI Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <button
          className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    <div className="header-title-bar">
        <p>Monthly Report</p>
    </div>
    </>
  );
}
