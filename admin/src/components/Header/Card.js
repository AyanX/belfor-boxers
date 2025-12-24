import React from "react";
export const StatCard = ({ 
  label, 
  value, 
  icon, 
  iconBgColor,
  iconColor
}) => {
  return (
    <div className="stat-card">
      <div 
        className="icon-wrapper"
        style={{ backgroundColor: iconBgColor, color: iconColor }}
      >
        {icon}
      </div>
      <div className="stat-content">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  );
};
