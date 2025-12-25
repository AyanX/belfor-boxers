import React from "react";
import logo from "../../Assets/logo.png";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
const FooterContacts = ({ data }) => {

  const {phone, email} = data || {};

  return (
    <div>
      <footer>
        <div className="container footer-grid">
          <div className="footer-col full-width">
            <div className="brand-row">
              <div>
                <div className="logo">
                  <img src={logo} alt="Logo" />
                  <div>
                    <h3>
                      UNCLE-T <span>ACADEMY</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="address">
              <p>Kampala, Uganda</p>
              <p>Plot 42, Desert Road</p>
            </div>
          </div>

          <div className="footer-col">
            <h3>EXPLORE</h3>
            <ul className="footer-links">
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
          </div>

          <div className="footer-col contacts-col">
            <h3>CONTACTS</h3>
            <ul className="footer-links">
              <li className="contact-item">
                <Phone size={16} />
                <span className="contact-text font-bold tracking-wider">
                  {phone || "+256 700 123 456"}
                </span>
              </li>
              <li className="contact-item">
                <Mail size={16} />
                <span className="contact-text font-bold tracking-wider uppercase">
                  {email || "train@uncletboxing.com"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterContacts;
