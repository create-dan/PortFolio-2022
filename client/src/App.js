import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// import Projects from "../components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hobbies from "./components/Hobbies";
import Social from "./components/Social";
import Projects from "./components/Projects/Projects";
import ChakraUi from "./components/ChakraUi/ChakraUi";
import { ChakraProvider } from "@chakra-ui/react";
import Bootstrap from "./components/Bootstrap/Bootstrap";
import Signup from "./components/Form/Signup";
import HomeFormPage from "./components/Form/HomeFormPage";

const App = () => {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact" element={<HomeFormPage />} exact />
          <Route path="/projects" element={<Projects />} exact />
          {/* <Route path="/" element={<Bootstrap />} exact /> */}
          {/* <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/projects" element={<Projects />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/hobbies" element={<Hobbies />} exact />
        <Route path="/social" element={<Social />} exact />
        <Route path="/" element={<ChakraUi />} exact />  */}
        </Routes>
      </ChakraProvider>
    </div>
  );
};

export default App;
