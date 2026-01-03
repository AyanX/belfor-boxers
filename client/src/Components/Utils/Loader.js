import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PuffLoader color="var(--primary)" size={80} />
    </div>
  );
};

export default Loader;
