import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Toast, useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router";

const Signup = () => {

  const Toast=useToast();
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    contact: "",
    profession: "",
    message: "",
  });
  //   const toast = useToast();
  //   const history = useNavigate();

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

    Toast({
      title: "Successful !",
      description: "Thaks for Contacting me...!",
      status: "success",
      duration: 3000,
      isClosable: true,
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
    <div className="back">
      <form onSubmit={handleSubmit}>
        <VStack spacing="5px">
          <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              value={inputs.name}
              onChange={handleChange}
              type="text"
              name="name"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              value={inputs.email}
              onChange={handleChange}
              name="email"
            />
          </FormControl>

          <FormControl id="contact" isRequired>
            <FormLabel>Contact Number</FormLabel>
            <Input
              type="number"
              value={inputs.contact}
              onChange={handleChange}
              name="contact"
            />
          </FormControl>

          <FormControl id="profession" isRequired>
            <FormLabel>Your Profession</FormLabel>
            <Input
              type="text"
              value={inputs.profession}
              onChange={handleChange}
              name="profession"
            />
          </FormControl>

          <FormControl id="message" isRequired>
            <FormLabel>Your Message</FormLabel>
            <Input
              type="text"
              value={inputs.message}
              onChange={handleChange}
              name="message"
            />
          </FormControl>

          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            type="submit"
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </div>
  );
};

export default Signup;
