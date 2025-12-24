import React from "react";

const AppHeader = ({title, spans=true, margin}) => {
  return (
    <div className="app-header" style={{marginBottom:margin}}>
      <h1 >
        {spans && <span></span>}
        {title}
      </h1>
    </div>
  );
};

export default AppHeader;
