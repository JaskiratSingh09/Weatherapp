import React from "react";
import logo from "./Images/humidity.png";

export default function Humidity(props) {
  return (
    <>
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
          <h4>{props.hot}</h4>
          <h4 style={{ fontFamily: "Kanit, sans-serif" }}>Humidity%</h4>
        </div>
      </div>
    </>
  );
}
