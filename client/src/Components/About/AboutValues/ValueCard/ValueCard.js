import React from 'react';

const ValueCard = ({ title, description, Icon }) => {
  return (
    <div className="value">
      <div className="icon">
        <Icon size={140} strokeWidth={1} />
      </div>

      <div className="icon">
        <Icon size={24} />
      </div>

      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
