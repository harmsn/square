import React, { useState, useEffect, useCallback } from "react";
import { forgetpasswordApi } from "../Apis/RecruiterApi";
import "../css/style.css";
function ForgetPassword(props) {
  const [email, setemail] = useState("");
  function handleChange(e, type) {
    switch (type) {
      case "email":
        setemail(e.target.value);
        break;
    }
  }
  function submitLogin(e) {
    forgetpasswordApi(email, (result) => {
      if (result.success) {
        props.onChange(result.data.token);
        window.location.href = "/resetpassword";
      } else alert(result.message);
    });
    e.preventDefault();
  }
  return (
    <div className="outer_cardbg">
      <div className="cardbg">
        <p className="myJobs">
          My<span style={{ color: "#43AFFF" }}>Jobs</span>
        </p>
      </div>
      <div className="cardBox">
        <form>
          <h3>Forgot your password?</h3>
          <p className="jobDescription">
            Enter the email associated with your account and we'll send you
            instructions to reset your password.
          </p>
          <label className="label-input">Email Address</label>
          <input
            className="input-text"
            value={email}
            onChange={(e) => handleChange(e, "email")}
            placeholder="Enter your email"
          ></input>
          <div className="btn_login">
            <button onClick={submitLogin}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
