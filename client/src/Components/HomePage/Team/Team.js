import React from 'react'
import TeamMember from './TeamMembers'
import SectionHeader from '../utils/SectionHeader';
import './Team.scss';

const teamMembers = [
  {
    id: '2',
    imageUrl: 'https://ik.imagekit.io/nal7vhb1y/Boxers/IMG_0701_26.jpg',

  },
  {
    id: '3',
    imageUrl: 'https://ik.imagekit.io/nal7vhb1y/Boxers/WhatsApp.jpeg',
  },
  {
    id: '4',
    imageUrl: 'https://ik.imagekit.io/nal7vhb1y/Boxers/IMG_0661_24.jpg?updatedAt=1766234041340',
  },
  {
    id: '5',
    imageUrl: 'https://ik.imagekit.io/nal7vhb1y/Boxers/IMG_0662_23.jpg?updatedAt=1766234041263',
  },
  {
    id: '6',
    imageUrl: 'https://ik.imagekit.io/nal7vhb1y/Boxers/IMG_0671_26.jpg?updatedAt=1766234039908',
  }

];


const Team = () => {
  return (
    <div className='team-container'>
      <SectionHeader subTitle="MEET THE TEAM" title="Our Professional Team Members" />

      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

export default Team
