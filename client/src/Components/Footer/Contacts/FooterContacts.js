
import React from "react";
import logo from "../../Assets/logo.svg";
import { Mail, Phone } from "lucide-react";
const FooterContacts = () => {
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
            <h3 className="uppercase">Explore</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="uppercase font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="uppercase font-bold">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="uppercase font-bold">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="uppercase font-bold">
                  Coaches
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col contacts-col">
            <h3 className="uppercase">Contact</h3>
            <ul className="footer-links">
              <li className="contact-item">
                <Phone size={16} />
                <span className="contact-text font-bold tracking-wider">
                  +256 700 123 456
                </span>
              </li>
              <li className="contact-item">
                <Mail size={16} />
                <span className="contact-text font-bold tracking-wider uppercase">
                  train@uncletboxing.com
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