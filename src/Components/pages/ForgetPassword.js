import React, { useState, useEffect, useCallback } from "react";
import {forgetpasswordApi} from "../Apis/RecruiterApi"
import '../css/style.css'
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
   
    forgetpasswordApi(email,(result)=>{
      if(result.success){
      props.onChange(result.data.token);
        window.location.href = "/resetpassword";
      }
      else
      alert(result.message)
    })
    e.preventDefault();
  }
  return (
    <div className="cardBox">
      <form>
        <h3>Forgot your password?</h3>
        <p >
          Enter the email associated with your account and we'll send you
          instructions to reset your password.
        </p>
        <label className="label-input">Email Address</label>
        <input className="input-text"
          value={email}
          onChange={(e) => handleChange(e, "email")}
          placeholder="Enter your email"
        ></input>

        <button onClick={submitLogin}>Submit</button>
      </form>
    </div>
  );
}

export default ForgetPassword;
