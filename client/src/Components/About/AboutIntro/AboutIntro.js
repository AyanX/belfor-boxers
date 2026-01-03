import React from "react";
import AboutIntroStats from "./AboutIntroStats";
import { useOutletContext } from "react-router-dom";
import "./AboutIntro.scss";
const AboutIntro = () => {

  const {academyData: data} = useOutletContext();


  return (
    <>
      <section className="about-hero">
        <div className="badge">Est. {data?.yearFounded || "N/A"} — {data?.location || "N/A"}</div>

        <div>
          <h1 className="title">MORE THAN A GYM.</h1>
          <h1 className="title primary">A LEGACY.</h1>
        </div>

        <p className="subtext">
          We don't just teach you how to fight. We teach you how to stand tall
          when the world tries to knock you down.
        </p>
      </section>
      <AboutIntroStats />
    </>
  );
};

export default AboutIntro;
