import React, { useState, useEffect, useCallback } from "react";
import { loginJobApi } from "../Apis/RecruiterApi";
import '../css/style.css'
function Login(props) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e, type) {
    switch (type) {
      case "email":
        setemail(e.target.value);
        break;
      case "pass":
        setPassword(e.target.value);
        break;
    }
  }

  function submitLogin(e) {
    var data = {
      email: email,
      password: password,
    };
    loginJobApi(data, (result) => {
      if (result.success) {
        props.onChange(result.data.token);
        window.location.href = "/postedjobs";
      } else alert(result.message);
    });

    e.preventDefault();
  }

  return (
    <div className="cardBox">
      <form>
        <h3>Login</h3>

        <label className="label-input">Email Address</label>
        <input className="input-text"
          value={email} type="email"
          onChange={(e) => handleChange(e, "email")}
          placeholder="Enter your email"
        ></input>

        <label className="label-input">Password</label>
        <span className="forget"><a href="/forgetpassword">Forgot your Password?</a></span>
        <input className="input-text"
          value={password} type="password"
          onChange={(e) => handleChange(e, "pass")}
          placeholder="Enter your password"
        ></input>
        <div className="btn_login"><button onClick={submitLogin}>Login</button></div>
        
        <p className="below_text">
          New to MyJobs? <a href="/register">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
