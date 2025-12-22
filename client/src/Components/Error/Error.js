import React from "react";
import { AlertTriangle, Home } from "lucide-react";
import "./Error.scss";
import { useNavigate } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="error">
      <div>
        <div className="badge">
          <AlertTriangle color="var(--primary)" size={24} strokeWidth={3} />
          <span>404: Not Found</span>
        </div>

        <h1 className="title">
          Down for <br />
          the <span>Count</span>
        </h1>

        <p style={{ fontFamily: "var(--font-body)" }}>
          The heavyweight page you're searching for hit the canvas and didn't
          beat the count. It's out of the ring for good.
        </p>

        <button className="cta" onClick={handleHomeClick}>
          <span>Back to Corner</span>
          <Home size={22} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default Error;
