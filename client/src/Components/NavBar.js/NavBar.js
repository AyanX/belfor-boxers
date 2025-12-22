import React from "react";
import "./NavBar.scss";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const NavBar = () => {
  console.log("NAVBAR RENDERED");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ height: "80px" }}>
      <nav className={isOpen ? "active" : ""}>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div>
            <h3>
              UNCLE-T <span>ACADEMY</span>
            </h3>
          </div>
        </div>

        <ul className="links" onClick={() => setIsOpen(false)}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <HashLink smooth to="/#train">
              Training
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/contact/#contact">
              Schedule
            </HashLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="actions">
          <button className="join">
          
          <HashLink smooth to="/contact/#contact">
              JOIN NOW
            </HashLink>
          
          </button>
          <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
