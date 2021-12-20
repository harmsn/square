import React, { useState, useEffect, useCallback } from "react";
import {getjobsApi} from "../Apis/RecruiterApi"
//import Button from '@mui/material/Button';
import '../css/style.css'
function JobsPosted(props) {
  const [jobs, setJobs] = useState([]);
  function getApplicants(e) {
    alert(e.target.value);
  }
  function ListofJobs() {
    const m_list = jobs.map((data, index) => (

        <div className="jobCard"><div>
        <p className="jobTitle">{data.title}</p>
        <p className="jobDescription">{data.description}</p>
        <i className='fas fa-map-marker-alt'></i><span className="jobDescription"> {data.location}</span>
        <span><button className="viewApp" value={data.id} onClick={getApplicants}>
          View Applications
        </button></span>
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

    getjobsApi('1',props.token.access_token,(result)=>{
        if(result.data.data.length>0)
        setJobs(result.data.data);  
        else
        setJobs([])
    })
    
  }, []);
  return (
    <div>
      <button onClick={postJob}>Create Job</button>
      <button onClick={logoutMyjobs}>Log out</button>
      <div className="cardgrid">{jobs.length > 0 ? <ListofJobs /> : <span></span>}</div>
      
    </div>
  );
}

export default JobsPosted;
