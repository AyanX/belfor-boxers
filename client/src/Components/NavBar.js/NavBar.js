import React from "react";
import "./NavBar.scss";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../Assets/logo.svg";
const NavBar = () => {
  console.log("NAVBAR RENDERED");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ height: "80px" }}>
      <nav className={isOpen ? "active" : ""}>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div>
            <h3>UNCLE-T <span>ACADEMY</span></h3>
            
          </div>
        </div>

        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#train">Training</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="actions">
          <button className="join">JOIN NOW</button>
          <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
