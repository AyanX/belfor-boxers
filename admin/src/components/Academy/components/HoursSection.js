import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import './HoursSection.scss';

const HoursSection = memo(({ trainingHours, onHoursChange }) => {
  const handleInputChange = useCallback((dayType, session, value) => {
    onHoursChange(dayType, session, value);
  }, [onHoursChange]);

  const renderSessionInputs = (dayType, dayLabel) => {
    const sessions = ['morning', 'afternoon', 'evening'];
    const sessionLabels = {
      morning: 'Morning Sessions',
      afternoon: 'Afternoon Sessions',
      evening: 'Evening Sessions'
    };

    return (
      <div className="hours-day-section">
        <h3 className="hours-day-title">{dayLabel}</h3>
        <div className="hours-sessions">
          {sessions.map((session) => (
            <div key={session} className="hours-session-input">
              <label className="hours-session-label">
                {sessionLabels[session]}
              </label>
              <motion.input
                type="text"
                value={trainingHours?.[dayType]?.[session] ?? ""}
                onChange={(e) => handleInputChange(dayType, session, e.target.value)}
                className="hours-input-field"
                placeholder="e.g., 9:00 AM - 5:00 PM"
                whileHover={{ scale: 1.01, borderColor: 'rgba(255, 215, 0, 0.5)' }}
                whileFocus={{ scale: 1.01, borderColor: 'rgba(255, 215, 0, 0.7)' }}
                transition={{ duration: 0.2 }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="hours-section">
      <div className="hours-header">
        <Clock className="hours-icon" size={24} />
        <h2 className="hours-title">Training Hours</h2>
      </div>
      <div className="hours-grid">
        {renderSessionInputs('weekdays', 'WEEKDAYS (MON - FRI)')}
        {renderSessionInputs('weekends', 'WEEKENDS (SAT - SUN)')}
      </div>
    </div>
  );
});

HoursSection.displayName = 'HoursSection';

export default HoursSection;
