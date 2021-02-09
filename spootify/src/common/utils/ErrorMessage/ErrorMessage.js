import React from "react";
import './_error-message.scss';

export default function ErrorMessage({ msg }) {
  return (
    <div className="error-message">
      { msg }
    </div>
  )
};
