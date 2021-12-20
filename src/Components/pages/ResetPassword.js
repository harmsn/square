import React, { useState, useEffect, useCallback } from "react";
import {resetPasswordApi} from "../Apis/RecruiterApi"
import '../css/style.css';
function ResetPassword(props) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleChange(e, type) {
    switch (type) {
      case "pass":
        setPassword(e.target.value);
        break;
      case "conf":
        setConfirm(e.target.value);
        break;
    }
  }
  function submitSignup(e) {
    var data = {
      password: password,
      confirmPassword: confirm,
      token: props.token.access_token,
    };
    resetPasswordApi(data,(result)=>{
        if (result.success) {
            window.location.href = "/login";
          } else alert(result.message);  
    })
    
    e.preventDefault();
  }
  return (
    <div className="cardBox">
      <form>
        <h3>Reset Your Password</h3>

        <label className="label-input">New password</label>
        <input
        className="input-text"
          value={password}
          onChange={(e) => handleChange(e, "pass")}
          placeholder="Enter your password"
        ></input>

        <label className="label-input">Confirm new password</label>
        <input
        className="input-text"
          value={confirm} 
          onChange={(e) => handleChange(e, "conf")}
          placeholder="Enter your password"
        ></input>

        <button onClick={submitSignup}>Reset</button>
      </form>
    </div>
  );
}

export default ResetPassword;
