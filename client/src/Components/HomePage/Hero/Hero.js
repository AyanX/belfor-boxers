import { HashLink } from "react-router-hash-link";
import "./Hero.scss";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
const Hero = () => {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);
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
            <HashLink smooth to="/contact/#contact">
              START TRAINING
            </HashLink>{" "}
            <ArrowRight size={18} />
          </button>
          <button className="outline-btn">
            <HashLink smooth to="/#train">
              VIEW PROGRAMS
            </HashLink>
          </button>
        </div>
      </header>

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://ik.imagekit.io/nal7vhb1y/Boxers/IMG_0701_26.jpg"
        className={`video-bg ${ready ? "ready" : ""}`}
        onCanPlay={() => setReady(true)}
      >
        <source
          src="https://ik.imagekit.io/59p9lo9mv/boxers.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Hero;
