import React from "react";
import { NavLink } from "react-router-dom";

const AboutGrid = () => {
  return (
    <>
      {" "}
      <div className="row ">
        <div className="container my-3  ">
          <div className="row ">
            <div className="col-4">
              <NavLink to="/about" className="text-decoration-none">
                <div className="card">
                  <div className="card-body text-center">About</div>
                </div>
              </NavLink>
            </div>

            <div className="col-4">
              <NavLink to="/hobbies" className="text-decoration-none">

                <div className="card">
                  <div className="card-body text-center">Hobbies</div>
                </div>
              </NavLink>
            </div>

            <div className="col-4">
              <NavLink to="/contact" className="text-decoration-none">
                <div className="card">
                  <div className="card-body text-center">Social</div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGrid;
