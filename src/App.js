import React, { useState } from "react";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  window.addEventListener("load", (event) => {
    setLoaded(true);
  });
  return (
    <>
      <BrowserRouter>{loaded ? <Main /> : <Loader />}</BrowserRouter>
    </>
  );
}
