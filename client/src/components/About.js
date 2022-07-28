import React from "react";
import { NavLink } from "react-router-dom";
import AboutGrid from "../Common/AboutGrid";

const About = () => {
  return (
    <>
      <section id="header" className=" container" style={{ height: "80vh" }}>
       <AboutGrid/>

        <div className="row">
          <div className="card text-center">
            <div className="card-header">About Me</div>
            <div className="card-body">
             
              <p className="text-start text-lg-center lh-lg">
              I am second year INFORMATION TECHNOLOGY undergraduate at WCE , Sangli. I am exploring myself in various technical skills like C , C++ and web development. Starting competitive programming has taught me to think logically and how to be solution oriented. Working on Data structures and Algorithms to improve my problem solving skills. My hobbies are reading and playing cricket and I always enjoy working with others.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
