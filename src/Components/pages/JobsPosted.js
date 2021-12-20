import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { getjobsApi } from "../Apis/RecruiterApi";
//import Button from '@mui/material/Button';
import "../css/style.css";
function JobsPosted(props) {
  const [jobs, setJobs] = useState([]);
  const [count, setCount] = useState(0);
  function getApplicants(e) {
    alert("No Applicants found for this job.");
  }
  function getPageData(pn) {
    console.log(pn);
    let page_n = pn.toString();
    getjobsApi(page_n, props.token.access_token, (result) => {
      if (result.data.data.length > 0) {
        setJobs(result.data.data);
        setCount(result.data.metadata.count);
      } else setJobs([]);
    });
  }
  function Pagination(props) {
    let pages = parseInt(count / 20) + 1;
    const arr_pages = [...Array(pages).keys()];

    const p_list = arr_pages.map((data, index) => (
      <a
        className="page_number"
        key={index}
        href="javasript:void(0)"
        onClick={(e) => getPageData(data + 1)}
      >
        {data + 1}
      </a>
    ));
    return p_list;
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
      if (result.data.data.length > 0) {
        setJobs(result.data.data);
        setCount(result.data.metadata.count);
      } else setJobs([]);
    });
  }, []);

  return (
    <div className="outer_cardbg">
      <div className="cardbg">
        <p className="myJobs">
          My<span style={{ color: "#43AFFF" }}>Jobs</span>
        </p>
      </div>
      <div className="Jobs_posted">
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
        {jobs.length > 0 ? (
          <div className="pagination">
            {" "}
            <Pagination count={count} />
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default JobsPosted;
