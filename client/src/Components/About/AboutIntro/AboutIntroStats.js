import React from "react";
import { CalendarDays, Users, Trophy } from "lucide-react";

function StatItem({ icon: Icon, value, label }) {
  return (
    <div className="stat">
      <div className="icon">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  );
}

const AboutIntroStats = () => {
  return (
    <div className="stats">
      <div>
        <StatItem icon={CalendarDays} value="2015" label="Year Founded" />
        <StatItem icon={Users} value="500+" label="Active Members" />
        <StatItem icon={Trophy} value="12" label="Pro Fighters" />
      </div>
    </div>
  );
};

export default AboutIntroStats;


