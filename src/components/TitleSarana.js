import React from "react";
import { Link } from "react-router-dom";

const TitleSarana = (props) => {
  const hrStyle = {
    width: "80px",
    border: "1px solid",
  };
  return (
    <div
      class="header"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          color: "#4770F5",
        }}
      >
        <hr style={hrStyle}></hr>
        <h6 style={{ color: "#4770F5" }}>Integrated Computer Laboratories</h6>
        <hr style={hrStyle}></hr>
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default TitleSarana;
