
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactCard = ({ info }) => {
  const renderIcon = () => {
    const iconProps = { size: 24 };
    switch (info.type) {
      case 'LOCATION':
        return <MapPin {...iconProps} />;
      case 'PHONE':
        return <Phone {...iconProps} />;
      case 'EMAIL':
        return <Mail {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="contact-card">
      <div className="icon-wrapper">
        {renderIcon()}
      </div>

      <h3 className="card-title">
        {info.title}
      </h3>

      <div className="card-details">
        {info.details.map((line, index) => (
          <p key={index} className="detail-text">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
