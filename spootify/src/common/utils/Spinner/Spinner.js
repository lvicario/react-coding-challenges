import React from "react";
import './_spinner.scss';

export default function Spinner() {
  return (
    <div className="lds-roller-container" data-testid="spinner-container">
      <div className="lds-roller">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  )
};
