import React from 'react'
import Hero from './Hero/Hero'
import FooterContacts from './Contacts/FooterContacts'
import "./Footer.scss"

const Footer = ({data,academyData}) => {
  return (
    <div>
      <Hero />
      <FooterContacts data={data} academyData={academyData} />
    </div>
  )
}

export default Footer
