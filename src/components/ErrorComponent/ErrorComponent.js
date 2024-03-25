import React from "react";
import "./ErrorComponent.css"; // Assume you have some basic styling

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className="error-container">
      <p>Error: {errorMessage}</p>
    </div>
  );
};

export default ErrorComponent;
