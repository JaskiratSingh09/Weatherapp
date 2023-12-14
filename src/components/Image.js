import React from "react";
import clear from "./Images/clear.jpeg";
import clouds from "./Images/clouds.jpeg";
import drizzle from "./Images/drizzle.jpeg";
import humidity from "./Images/humidity1.jpeg";
import mist from "./Images/mist.jpeg";
import rain from "./Images/rain.jpeg";
import search from "./Images/search.jpeg";
import snow from "./Images/snow.jpeg";
import wind from "./Images/wind.jpeg";

export default function Image(props) {
  let imageSrc;
  // let str1 = String(props.weather);
  // console.log(str1);
  if (props.weather === "Clear") {
    imageSrc = rain;
  } else if (props.weather === "Clouds") {
    imageSrc = clouds;
  } else if (props.weather === "Drizzle") {
    imageSrc = drizzle;
  } else if (props.weather === "Humidity") {
    imageSrc = humidity;
  } else if (props.weather === "Mist") {
    imageSrc = mist;
  } else if (props.weather === "Rain") {
    imageSrc = rain;
  } else if (props.weather === "Search") {
    imageSrc = search;
  } else if (props.weather === "Snow") {
    imageSrc = snow;
  } else if (props.weather === "Wind") {
    imageSrc = wind;
  }
  return (
    <>
      <img
        src={imageSrc}
        className="rounded mx-auto d-block"
        style={{
          marginTop: "15px",
        }}
        alt="..."
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ padding: "5px 3px" }}>
          {props.temp}
          <span>&#176;C</span>
        </h1>
      </div>
    </>
  );
}
