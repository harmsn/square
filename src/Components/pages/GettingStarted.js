import React, { useState, useEffect, useCallback } from "react";
import '../css/style.css'
function GettingStarted() {
  return (
    <button onClick={(e) => (window.location.href = "/login")}>
      Login/Signup
    </button>
  );
}

export default GettingStarted;
