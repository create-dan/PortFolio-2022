import React from "react";

const BootstrapCard = (props) => {
  console.log(props);
  const { id, title, description, techStack } = props.element;
  //   console.log(element);
  return (
    <div >
      {/* <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{techStack}</h1> */}

      <div
        className="card text-white bg-primary mb-3"
      
      >
        <div className="card-header">{title}</div>
        <div className="card-body">
          <h5 className="card-title">{techStack}</h5>
          <h5 className="card-title">{description}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootstrapCard;
