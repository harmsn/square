import React, { useState } from "react";
import { postJobApi } from "../Apis/RecruiterApi";
import "../css/style.css";
function PostJob(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  function handleChange(e, type) {
    switch (type) {
      case "title":
        setTitle(e.target.value);
        break;
      case "desc":
        setDescription(e.target.value);
        break;
      case "loc":
        setLocation(e.target.value);
        break;
    }
  }
  async function submitJob(e) {
    var data = {
      title: title,
      description: description,
      location: location,
    };

    postJobApi(data, props.token.access_token, (result) => {
      if (result.success) {
        window.location.href = "/postedjobs";
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
          <h3>Post a Job</h3>

          <label className="label-input">Job title</label>
          <br></br>
          <input
            className="input-text"
            value={title}
            onChange={(e) => handleChange(e, "title")}
            placeholder="Enter job title"
          ></input>
          <br></br>
          <label className="label-input">Description</label>
          <br></br>
          <textarea
            className="input-text textarea"
            value={description}
            rows="4"
            cols="50"
            onChange={(e) => handleChange(e, "desc")}
            placeholder="Enter job description"
          ></textarea>
          <br></br>
          <label className="label-input">Location</label>
          <br></br>
          <input
            className="input-text"
            value={location}
            onChange={(e) => handleChange(e, "loc")}
            placeholder="Enter location"
          ></input>
          <div className="btn_login">
            {" "}
            <button onClick={submitJob}>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
