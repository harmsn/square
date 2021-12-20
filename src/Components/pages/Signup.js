import React, { useState, useEffect, useCallback } from "react";
import { signupJobApi } from "../Apis/RecruiterApi";
import "../css/style.css";
function Signup(props) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [skills, setSkills] = useState("");

  function handleChange(e, type) {
    switch (type) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setemail(e.target.value);
        break;
      case "pass":
        setPassword(e.target.value);
        break;
      case "conf":
        setConfirm(e.target.value);
        break;
      case "skills":
        setSkills(e.target.value);
        break;
    }
  }
  function submitSignup(e) {
    var data = {
      email: email,
      userRole: 0,
      password: password,
      confirmPassword: confirm,
      name: name,
      skills: skills,
    };

    signupJobApi(data, (result) => {
      if (result.success) {
        props.onChange(result.data.token);
        window.location.href = "/postedjobs";
      } else alert(result.errors[0][Object.keys(result.errors[0])]);
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
          <h3>Signup</h3>
          <label className="label-input">Full Name</label>
          <br></br>
          <input
            className="input-text"
            value={name}
            onChange={(e) => handleChange(e, "name")}
            placeholder="Enter your full name"
          />
          <br></br>
          <label className="label-input">Email Address</label>
          <br></br>
          <input
            className="input-text"
            value={email}
            type="email"
            onChange={(e) => handleChange(e, "email")}
            placeholder="Enter your email"
          ></input>
          <br></br>
          <label className="label-input">Create password</label>
          <span className="forget">
            <label className="label-input">Re enter password</label>
          </span>
          <br></br>
          <input
            className="input-text mid"
            value={password}
            type="password"
            onChange={(e) => handleChange(e, "pass")}
            placeholder="Enter your password"
          ></input>

          <input
            id="reenter"
            className="input-text mid"
            value={confirm}
            type="password"
            onChange={(e) => handleChange(e, "conf")}
            placeholder="Enter your password"
          ></input>
          <br></br>
          <label className="label-input">Skills</label>
          <br></br>
          <input
            className="input-text"
            value={skills}
            onChange={(e) => handleChange(e, "skills")}
            placeholder="Enter comma seperated"
          ></input>
          <br></br>
          <div className="btn_login">
            {" "}
            <button onClick={submitSignup}>Signup</button>
          </div>

          <p className="below_text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
