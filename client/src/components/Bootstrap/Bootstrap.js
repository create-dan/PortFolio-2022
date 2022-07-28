import React from "react";
import BootstrapCard from "./BootstrapCard";
import data from "./BootStrapData";

const Bootstrap = () => {
  return (
    <>
      <h1 className="text-center my-5 fw-bold ">Hello</h1>

    
        <div className="my-3 container ">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12">
              {data.map((element) => (
                <BootstrapCard element={element} />
              ))}
            </div>
            <div className="col-lg-6 col-md-10 col-12">
              {data.map((element) => (
                <BootstrapCard element={element} />
              ))}
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Bootstrap;
