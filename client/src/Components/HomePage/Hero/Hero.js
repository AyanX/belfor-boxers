import { HashLink } from "react-router-hash-link";
import "./Hero.scss";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
const Hero = () => {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);
  return (
    <div className="boxing-app">
      <div className="hero-media">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`video-bg ${ready ? "ready" : ""}`}
          onLoadedData={() => setReady(true)} b
        >
          <source
            src="https://ik.imagekit.io/nal7vhb1y/Boxers/boxers-bg-muted.mp4"
            type="video/mp4"
          />
        </video>
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
      </div>
    </div>
  );
};

export default Hero;
