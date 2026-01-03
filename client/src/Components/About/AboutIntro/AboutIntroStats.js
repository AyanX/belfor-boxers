import React from "react";
import { CalendarDays, Users, Trophy } from "lucide-react";
import { useOutletContext } from "react-router-dom";


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
  const { academyData: data } = useOutletContext();
  return (
    <div className="stats">
      <div>
        <StatItem icon={CalendarDays} value={data?.yearFounded || "N/A"} label="Year Founded" />
        <StatItem icon={Users} value="500+" label="Active Members" />
        <StatItem icon={Trophy} value={data?.proMembers ? `${data.proMembers}+` : "N/A"} label="Pro Fighters" />
      </div>
    </div>
  );
};

export default AboutIntroStats;


