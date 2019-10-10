import React from "react";
import './spinner.css';

const Spinner = () => (
  <div className="lds-container">
    <div className="lds-roller">
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </div>
);

export default Spinner;
