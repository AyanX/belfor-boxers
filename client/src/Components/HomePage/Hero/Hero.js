import { HashLink } from "react-router-hash-link";
import "./Hero.scss";
import { ArrowRight } from "lucide-react";
const Hero = () => {

  return (
    <div className="boxing-app">
      <header>
        <div className="tagline">
          <span>DESERT HUSTLE</span>
        </div>

        <h1>
          UNLEASH
          <br />
          <span>THE BEAST</span>
          <br />
          WITHIN
        </h1>

        <p>
          The premier combat sports facility in Uganda. Precision, power, and
          unrelenting discipline. Start your legacy today.
        </p>

        <div className="cta">
          <button>
            <HashLink smooth to="/contact/#contact">START TRAINING</HashLink> <ArrowRight size={18} />
          </button>
          <button className="outline-btn">
            <HashLink smooth to="/#train">VIEW PROGRAMS</HashLink>
          </button>
        </div>
      </header>

      <video autoPlay muted loop playsInline className="video-bg">
        <source
          src="https://ik.imagekit.io/nal7vhb1y/Boxers/boxersMuted.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Hero;
