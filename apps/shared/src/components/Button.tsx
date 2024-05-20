import React from "react";

const Button: React.FC = () => (
  <button
    style={{
      borderRadius: "25px 25px",
      padding: "16px 32px",
      border: "none",
      textDecoration: "none",
      color: "white",
      backgroundColor: "#2165E3",
    }}
  >
    {"Button component from shared package"}
  </button>
);

export default Button;
