import React from "react";

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <span className="sub-title">{props.subTitle}</span>
      <h2>{props.title}</h2>
    </div>
  );
};

export default SectionHeader;
