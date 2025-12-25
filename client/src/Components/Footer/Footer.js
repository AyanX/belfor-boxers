import React from 'react'
import Hero from './Hero/Hero'
import FooterContacts from './Contacts/FooterContacts'
import "./Footer.scss"

const Footer = ( {data} ) => {
  return (
    <div>
      <Hero />
      <FooterContacts data={data} />
    </div>
  )
}

export default Footer
