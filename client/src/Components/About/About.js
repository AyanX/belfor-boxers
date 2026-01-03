import React from 'react'
import AboutIntro from './AboutIntro/AboutIntro'
import AboutValues from './AboutValues/AboutValues'


const About = () => {
  console.log("ABOUT PAGE RENDERED")
  return (
    <div>
      <AboutIntro/>
      {/* <TrainingHours/> */}
      <AboutValues/>
    </div>
  )
}

export default About
