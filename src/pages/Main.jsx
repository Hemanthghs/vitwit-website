import React from "react";
import Validator from "./Validator";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/validator" element={<Validator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
