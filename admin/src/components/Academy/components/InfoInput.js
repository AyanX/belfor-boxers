import { memo } from 'react';
import { motion } from 'framer-motion';
import './InfoInput.scss';

const InfoInput = memo(({ label, name, value, onChange, type = 'text' }) => {
  return (
    <div className="info-input-container">
      <label className="info-input-label">{label}</label>
      <motion.input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="info-input-field"
        whileHover={{ scale: 1.01, borderColor: 'rgba(255, 215, 0, 0.5)' }}
        whileFocus={{ scale: 1.01, borderColor: 'rgba(255, 215, 0, 0.7)' }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
});

InfoInput.displayName = 'InfoInput';

export default InfoInput;
