import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/pages/Signup";
import Login from "./Components/pages/Login";
import GettingStarted from "./Components/pages/GettingStarted";
import JobsPosted from "./Components/pages/JobsPosted";
import PostJob from "./Components/pages/PostJob";
import ResetPassword from "./Components/pages/ResetPassword";
import ForgetPassword from "./Components/pages/ForgetPassword";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [cookies, setCookie] = useCookies(["access_token"]);

  function handleTokenChange(newValue) {
    setCookie("access_token", newValue);
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={<Signup token={cookies} onChange={handleTokenChange} />}
        ></Route>
        <Route
          path="/login"
          element={<Login token={cookies} onChange={handleTokenChange} />}
        ></Route>
        <Route
          path="/postedJobs"
          element={<JobsPosted token={cookies} onChange={handleTokenChange} />}
        ></Route>
        <Route
          path="/createjob"
          element={<PostJob token={cookies} onChange={handleTokenChange} />}
        ></Route>
        <Route
          path="/resetpassword"
          element={
            <ResetPassword token={cookies} onChange={handleTokenChange} />
          }
        ></Route>
        <Route
          path="/forgetpassword"
          element={
            <ForgetPassword token={cookies} onChange={handleTokenChange} />
          }
        ></Route>
        <Route path="/" element={<GettingStarted />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
