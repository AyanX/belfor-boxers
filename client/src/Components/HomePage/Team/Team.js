import React from 'react'
import TeamMember from './TeamMembers'
import SectionHeader from '../utils/SectionHeader';
import './Team.scss';

const teamMembers = [
  {
    id: '2',
    imageUrl: 'https://ik.imagekit.io/59p9lo9mv/IMG_0661.HEIC?updatedAt=1765977889830',

  },
  {
    id: '3',
    imageUrl: 'https://ik.imagekit.io/59p9lo9mv/IMG_0701.JPG',
  },
  {
    id: '4',
    imageUrl: 'https://ik.imagekit.io/59p9lo9mv/IMG_0662.HEIC',
  },
  {
    id: '5',
    imageUrl: 'https://ik.imagekit.io/59p9lo9mv/IMG_0671.HEIC',
  },
  {
    id: '6',
    imageUrl: 'https://ik.imagekit.io/59p9lo9mv/WhatsApp.jpeg',
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
