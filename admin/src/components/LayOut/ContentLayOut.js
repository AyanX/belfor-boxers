import React from "react";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/Pricing";
import Reset from "../Reset/Reset";
import AppHeader from "../Utils/AppHeader";
const ContentLayOut = () => {
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <AppHeader title="ACADEMY SETTINGS" />
        <div className="app-grid">
          <Pricing />
          <Contact />
          <Reset />
        </div>
      </div>
    </div>
  );
};

export default ContentLayOut;
