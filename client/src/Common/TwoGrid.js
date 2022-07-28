import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../images/img1.png";

const TwoGrid = () => {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center bg-primary"
        style={{ height: "90vh" }}
      >
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column  ">
                  <h1>
                    Hello Everyone , I'm{" "}
                    <strong >Dnyaneshwar</strong>
                  </h1>
                  <h2 className="my-3 text-dark">
                    We are team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/">
                      <button type="button" class="btn btn-primary">
                        Download CV
                      </button>
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header_img ">
                  <img src={img1} className="img-fluid animated" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TwoGrid;
