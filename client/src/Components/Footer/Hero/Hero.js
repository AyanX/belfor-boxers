import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="uppercase italic font-bold tracking-tighter">
            Forge Your <br />
            <span style={{ color: "var(--primary)" }}>Legacy</span>
          </h1>
          <p className="uppercase tracking-wider">
            Professional Training • Elite Results • The Sweet Science
          </p>
          <button className="btn btn-primary uppercase font-bold tracking-wider">
            Start Training
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
