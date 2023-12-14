import React from "react";
import "./search.css";

export default function SearchBox(props) {
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", position: "relative", top: "10px" }}
      >
        <input
          className="form-control me-2 coustom-width"
          placeholder="Search"
          onInput={props.input}
        />
        <button
          className="btn btn-outline-success"
          onClick={props.fetching}
          value={props.inputvalue}
        >
          search
        </button>
      </div>
    </>
  );
}
