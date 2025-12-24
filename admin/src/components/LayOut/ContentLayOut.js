import React from "react";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/Pricing";
import Reset from "../Reset/Reset";
import AppHeader from "../Utils/AppHeader";
import useFetchData from "../Utils/useData";
import Loader from "../Utils/Loader";

const ContentLayOut = () => {
  const { data, loading,resetData } = useFetchData();
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <AppHeader title="ACADEMY SETTINGS" />
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="app-grid">
              <Pricing data={data} />
              <Contact data={data} />
              <Reset data={resetData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentLayOut;
