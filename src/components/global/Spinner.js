import React from "react";
import './spinner.css';

const Spinner = () => (
  <div className="lds-container">
    <div className="lds-roller">
    {Array(8).fill().map(_ => <div/>)}
    </div>
  </div>
);

export default Spinner;
