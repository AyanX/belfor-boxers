import "./Hero.scss"
import { useState } from 'react';
import { ArrowRight} from 'lucide-react';
const Hero = () => {
  console.log("HERO SECTION RENDERED")

  return (
    <div className="boxing-app">
     

      <header>
        <div className="tagline">
          <span>DESERT HUSTLE</span>
        </div>
        
        <h1>
          UNLEASH<br />
          <span className="outline">THE BEAST</span><br />
          WITHIN
        </h1>

        <p>
          The premier combat sports facility in Uganda. Precision, power, and 
          unrelenting discipline. Start your legacy today.
        </p>

        <div className="cta">
          <button>
            START TRAINING <ArrowRight size={18} />
          </button>
          <button className="outline-btn">
            VIEW PROGRAMS
          </button>
        </div>
      </header>

      <div className="decor">
        <span>FIGHT</span>
        <span>GRIND</span>
        <span>GLORY</span>
      </div>
    </div>
  );
}

export default Hero
