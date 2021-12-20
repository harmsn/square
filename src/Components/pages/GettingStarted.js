import React, { useState, useEffect, useCallback } from "react";
import "../css/style.css";
function GettingStarted() {
  return (
    <div className="outer_cardbg">
      <div className="cardbg">
        <p className="myJobs">
          My<span style={{ color: "#43AFFF" }}>Jobs</span>
        </p>
        <div className="nav-button">
          <button onClick={(e) => (window.location.href = "/login")}>
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
