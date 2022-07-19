import "./App.css";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Omniface from "./pages/Omniface";
import Styletto from "./pages/Styletto";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/omniface" element={<Omniface />} />
      <Route exact path="/styletto" element={<Styletto />} />
    </Routes>
  );
}

export default App;
