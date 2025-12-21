import React from 'react'
import SubHeader from '../../Utils/SubHeader'
import { GYM_FEATURES, FeatureCard } from './FacilityDetails'
import './Facility.scss'
const Facility = () => {
  return (
    <div>
    <SubHeader title="Our Facility" content="Explore the top-notch features and amenities that make our gym the ultimate training destination." />
      <main className="grid-layout">
        {GYM_FEATURES.map((f) => (
          <FeatureCard key={f.id} feature={f} />
        ))}
      </main>
    </div>
  )
}

export default Facility
