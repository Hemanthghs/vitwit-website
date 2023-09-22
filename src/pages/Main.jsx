import React from "react";
import Validator from "./Validator";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/validator" element={<Validator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Main;
