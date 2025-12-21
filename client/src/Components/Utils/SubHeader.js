import React from "react";

const SubHeader = ({title,content}) => {
  return (
    <div className="sub-header">
      <div>
        <h2>{title}</h2>
      </div>
      <p>
        {content}
      </p>
    </div>
  );
};

export default SubHeader;
