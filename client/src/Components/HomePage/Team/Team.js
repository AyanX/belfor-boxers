import React from 'react'
import TeamMember from './TeamMembers'
import SectionHeader from '../utils/SectionHeader';
import './Team.scss';

const teamMembers = [
  {
    id: '2',
    imageUrl: 'IMG_0701_26.jpg',
    thumb:"IMG_0701_26_thumb.jpg"
  },
  {
    id: '3',
    imageUrl: 'WhatsApp.jpeg',
    thumb:"WhatsApp_thumb.jpg"
  },
  {
    id: '4',
    imageUrl: 'IMG_0661_24.jpg',
    thumb:"IMG_0661_24_thumb.jpg"
  },
  {
    id: '5',
    imageUrl: 'IMG_0662_23.jpg',
    thumb:"IMG_0662_23_thumb.jpg"
  },
  {
    id: '6',
    imageUrl: 'IMG_0671_26.jpg',
    thumb:"IMG_0671_26_thumb.jpg"
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
