import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Contact = () => {
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    contact: "",
    profession: "",
    message: "",
  });

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/contact", {
        name: inputs.name,
        email: inputs.email,
        contact: inputs.contact,
        profession: inputs.profession,
        message: inputs.message,
      })
      .then((res) => {
        console.log(res.data);
        // setinputs(null);
        setinputs({
          name: "",
          email: "",
          contact: "",
          profession: "",
          message: "",
        });
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => console.log("data send successfuly"));
  };

  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <section id="header" className=" container" style={{ height: "80vh" }}>
        <div className="container d-flex align-items-center my-5  ">
          <form class="row g-3  " onSubmit={handleSubmit}>
            <div class="col-md-6">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>

            <div class="col-md-6">
              <label class="form-label">Your Contact Number</label>
              <input
                type="number"
                class="form-control"
                name="contact"
                value={inputs.contact}
                onChange={handleChange}
              />
            </div>

            <div class="col-md-6">
              <label class="form-label">Your Profession</label>
              <input
                type="text"
                class="form-control"
                name="profession"
                value={inputs.profession}
                onChange={handleChange}
              />
            </div>
            <div class="col-12">
              <label class="form-label">Your Message</label>
              <input
                type="text"
                class="form-control"
                name="message"
                value={inputs.message}
                onChange={handleChange}
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary mb-3">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
