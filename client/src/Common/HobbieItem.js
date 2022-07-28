import React from "react";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";

const HobbieItem = () => {
  return (
    <>
      {" "}
      <div className="card" s>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-10 bg-black">
            <SportsCricketIcon />
            <h1>This</h1>
          </div>
          <div className="col-lg-5 col-md-5 col-10 bg-danger">
            <SportsCricketIcon />
            <h1>This</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HobbieItem;
