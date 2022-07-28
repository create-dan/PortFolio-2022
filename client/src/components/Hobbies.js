import React from "react";
import AboutGrid from "../Common/AboutGrid";

import HobbieItem from "../Common/HobbieItem";




const Hobbies = () => {
  return (
    <>
      <section id="header" className=" container" style={{ height: "80vh" }}>
        <AboutGrid />
        <div className="container">
          <div className="row">
            <div className="col">
             <HobbieItem/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
