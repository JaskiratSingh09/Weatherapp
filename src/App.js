import React, { useState } from "react";
import Humidity from "./components/Humidity";
import SearchBox from "./components/SearchBox";
import Wind from "./components/Wind";
import Image from "./components/Image";
import logo from "./components/Images/desti.png";
import "./App.css";

function App() {
  document.body.style.backgroundColor = "#274472";

  //To Store the result Coming through API
  const [first, setFirst] = useState({
    arr: [],
  });

  //To Check Weather the User Put Correct Input
  const [ans, setAns] = useState(true);

  //To Store the country Name
  const [countrybefore, setCountryBefore] = useState("");

  //To change the input
  function handleInput(event) {
    setCountryBefore(event.target.value);
  }

  //Fetching Details
  async function fetchData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${countrybefore}&appid=39361d2473ba331373c3ef5cbc7093e8&units=metric`
    );

    if (response.status !== 200) {
      setAns(false);
    } else {
      const data = await response.json();
      setFirst({ arr: data });
      setAns(true);
    }
  }

  return (
    <>
      {!ans && (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ textAlign: "center" }}
        >
          <h4> Incorrect Input</h4>
        </div>
      )}
      <div className="container mainbox">
        <div className="searchBox">
          <div style={{ display: "flex", margin: "15px" }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "40px",
                width: "40px",
              }}
            />
            <h3>{countrybefore}</h3>
          </div>

          <div className="App">
            <SearchBox
              fetching={fetchData}
              input={handleInput}
              inputvalue={countrybefore}
            />
          </div>
        </div>

        <div>
          <Image
            temp={ans && first.arr.length !== 0 && first.arr.main.temp}
            inputvalue={countrybefore}
            weather={
              ans && first.arr.length !== 0
                ? first.arr.weather[0].main
                : "Search"
            }
          />
        </div>

        <div className="logos">
          <div style={{ position: "relative", right: "18px" }}>
            <Humidity
              hot={ans && first.arr.length !== 0 && first.arr.main.humidity}
            />
          </div>
          <div style={{ position: "relative", left: "10px" }}>
            <Wind
              speed={ans && first.arr.length !== 0 && first.arr.wind.speed}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
