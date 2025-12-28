import './Header.scss';
import React from 'react';
import { Mail } from 'lucide-react';
import {  UI_STRINGS } from './stats.js';
import { StatCard } from './Card.js';
import AppHeader from '../Utils/AppHeader.js';

const Header = ({messageCount}) => {

  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
        
        <div className="header-section">
          <AppHeader title={UI_STRINGS.TITLE} margin={0}/>
          <p>{UI_STRINGS.SUBTITLE}</p>
        </div>

        <div className="stats-section">
          <StatCard 
            label={UI_STRINGS.MESSAGES_LABEL}
            value={messageCount.count || 0}
            icon={<Mail size={24}  strokeWidth={2}/>}
            iconBgColor="rgba(0, 239, 215, 0.15)"
            iconColor="var(--brand-blue)"
          />
        </div>

      </div>
      
    </div>
  );
};

export default Header;
