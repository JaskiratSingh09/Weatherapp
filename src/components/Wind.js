import React from "react";
import logo from "./Images/Wind.png";

export default function (props) {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={logo}
        alt="Logo"
        style={{
          height: "80px",
          width: "80px",
        }}
      />
      <div style={{ margin: "0px 14px" }}>
        <h4 style={{ fontFamily: "Kanit, sans-serif" }}>{props.speed}km/h</h4>
        <h4 style={{ fontFamily: "Kanit, sans-serif" }}>Wind:</h4>
      </div>
    </div>
  );
}
