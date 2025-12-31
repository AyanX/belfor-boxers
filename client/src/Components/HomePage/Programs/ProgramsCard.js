import React from "react";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function ProgramCard({
  title,
  price,
  image,
  icon: Icon,
  description,
}) {
  return (
    <div className="program-card">
      <div className="card-bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="card-overlay" />

      <div className="card-content">
        <div className="card-icon">
          <Icon size={32} />
        </div>

        <h3>{title}</h3>

        <div className="price">
          <span className="period">FROM </span>
          <span className="amount">{price}</span>
          <span className="period">/ mo</span>
        </div>

        <p className="description">{description}</p>

        <button className="learn-more">
          <HashLink smooth to="/contact/#contact">
            LEARN MORE <ArrowRight size={16} />
          </HashLink>
        </button>
      </div>
    </div>
  );
}
