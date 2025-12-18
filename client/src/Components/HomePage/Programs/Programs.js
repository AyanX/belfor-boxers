import React from 'react';
import ProgramCard from './ProgramsCard.js';
import { User, Users, Dumbbell } from 'lucide-react';
import './Programs.scss';
import SectionHeader from '../utils/SectionHeader.js';

const programsData = [
  {
    title: '1-ON-1 TRAINING',
    price: '100 USD',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop',
    icon: User,
    description: 'Personalized coaching tailored to your specific goals, focusing on technique, speed, and power.'
  },
  {
    title: 'SMALL GROUP',
    price: '100 USD',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2574&auto=format&fit=crop',
    icon: Users,
    description: 'Train with a partner or small squad. Competitive yet supportive environment to push your limits.'
  },
  {
    title: 'GROUP CLASSES',
    price: '100 USD',
    image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000&auto=format&fit=crop',
    icon: Dumbbell,
    description: 'High-energy sessions designed to build endurance, strength, and basic boxing skills.'
  }
];

export default function Programs() {
    console.log("HOME Programs component rendered");
  return (
    <section className="programs-section" id="train">
      <SectionHeader subTitle="TRAINING PROGRAMS" title="WHAT WE OFFER" />

      <div className="programs-grid">
        {programsData.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </section>
  );
}