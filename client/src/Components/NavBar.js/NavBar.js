import React from "react";
import "./NavBar.scss";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
    y: -20,
    transformOrigin: "top right"
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    y: 0,
    transformOrigin: "top right",
    transition: {
      duration: 0.35,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
    y: -20,
    transformOrigin: "top left",
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};






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

        {/* Desktop links (visible on wider screens) */}
        <ul className="links desktop" onClick={() => setIsOpen(false)}>
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

        {/* Mobile links (animated) */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="links mobile"
              onClick={() => setIsOpen(false)}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
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
            </motion.ul>
          )}
        </AnimatePresence>

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
