import React from "react";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/Pricing";
import Reset from "../Reset/Reset";
import AppHeader from "../Utils/AppHeader";

const ContentLayOut = ({ data: fetchedData, resetData }) => {
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <AppHeader title="ACADEMY SETTINGS" />

        <>
          <div className="app-grid">
            <Pricing data={fetchedData} />
            <Contact data={fetchedData} />
            <Reset data={resetData} />
          </div>
        </>
      </div>
    </div>
  );
};

export default ContentLayOut;
