import React, { useState, useEffect, useCallback } from "react";
import { getjobsApi } from "../Apis/RecruiterApi";
//import Button from '@mui/material/Button';
import "../css/style.css";
function JobsPosted(props) {
  const [jobs, setJobs] = useState([]);
  function getApplicants(e) {
    alert("No Applicants found for this job.");
  }
  function ListofJobs() {
    const m_list = jobs.map((data, index) => (
      <div key={index} className="jobCard">
        <div>
          <p className="jobTitle">{data.title}</p>
          <p className="jobDescription">{data.description}</p>
          <i className="fas fa-map-marker-alt"></i>
          <span className="jobDescription"> {data.location}</span>
          <span className="btn_view">
            <button className="viewApp" value={data.id} onClick={getApplicants}>
              View Applications
            </button>
          </span>
        </div>
      </div>
    ));

    return m_list;
  }
  function postJob() {
    window.location.href = "/createjob";
  }
  function logoutMyjobs() {
    window.location.href = "/";
  }
  useEffect(() => {
    getjobsApi("1", props.token.access_token, (result) => {
      if (result.data.data.length > 0) setJobs(result.data.data);
      else setJobs([]);
    });
  }, []);
  return (
    <div>
      {" "}
      <div className="nav-button">
        <button onClick={postJob}>Post a Job</button>
        <span>&nbsp;</span>
        <button onClick={logoutMyjobs}>Log out</button>
      </div>
      {jobs.length > 0 ? (
        <h3 style={{ textAlign: "center" }}>Jobs posted by you:</h3>
      ) : (
        <span></span>
      )}
      <div className="cardgrid">
        {jobs.length > 0 ? <ListofJobs /> : <span></span>}
      </div>
    </div>
  );
}

export default JobsPosted;
