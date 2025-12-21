
import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!type) return null;

  const Icon = type === 'success' ? CheckCircle : AlertCircle;

  return (
    <div className={`notification ${type}`}>
      <Icon size={20} />
      <span style={{ fontWeight: 600 }}>{message}</span>
      <button onClick={onClose} aria-label="Close notification">
        <X size={18} />
      </button>
    </div>
  );
};

export default Notification;
