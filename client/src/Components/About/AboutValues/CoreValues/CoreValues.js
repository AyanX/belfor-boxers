
import React from 'react';
import {
  ShieldCheck,
  Trophy,
  Handshake,
  Heart,
  Users,
  Lightbulb,
} from 'lucide-react';
import ValueCard from '../ValueCard/ValueCard';
import './CoreValues.scss';
import SubHeader from '../../../Utils/SubHeader';

const VALUES_DATA = [
  {
    id: 'discipline',
    title: 'Discipline',
    description: 'We instill discipline in every aspect of training, teaching our athletes the importance of commitment, consistency, and self-control.',
    Icon: ShieldCheck,
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from our training methods to our facilities, always pushing our athletes to reach their full potential.',
    Icon: Trophy,
  },
  {
    id: 'respect',
    title: 'Respect',
    description: 'We foster a culture of mutual respect among coaches, athletes, and staff, creating a supportive environment where everyone can thrive.',
    Icon: Handshake,
  },
  {
    id: 'passion',
    title: 'Passion',
    description: 'Our love for boxing drives everything we do. We are passionate about the sport and dedicated to sharing that passion with our athletes.',
    Icon: Heart,
  },
  {
    id: 'community',
    title: 'Community',
    description: 'We believe in giving back to our community and using boxing as a tool for positive social change and youth development.',
    Icon: Users,
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We continuously evolve our training methods, incorporating the latest techniques and technologies to give our athletes a competitive edge.',
    Icon: Lightbulb,
  },
];

const CoreValues = () => {
  return (
    <div className="core-values">
      <section>
        
        <SubHeader title="Our Core Values"content="The principles that guide everything we do inside and outside the
            ring. Built on grit, sweat, and absolute dedication to the sport." />
        <div className="values-grid">
          {VALUES_DATA.map((value) => (
            <ValueCard
              key={value.id}
              title={value.title}
              description={value.description}
              Icon={value.Icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoreValues;
