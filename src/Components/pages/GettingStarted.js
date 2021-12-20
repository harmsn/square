import React, { useState, useEffect, useCallback } from "react";
import "../css/style.css";
function GettingStarted() {
  return (
    <div className="nav-button">
      <button onClick={(e) => (window.location.href = "/login")}>
        Login/Signup
      </button>
    </div>
  );
}

export default GettingStarted;
