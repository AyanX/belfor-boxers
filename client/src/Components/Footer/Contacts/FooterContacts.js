
import React from "react";
import logo from "../../Assets/logo.svg";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
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
                <Link to="/" className="uppercase font-bold">Home</Link>
              </li>
              <li>
                <Link to="/about" className="uppercase font-bold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="uppercase font-bold">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="uppercase font-bold">
                  Coaches
                </Link>
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
