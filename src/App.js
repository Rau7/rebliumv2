import "./App.css";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Omniface from "./pages/Omniface";
import Styletto from "./pages/Styletto";
import Spawn from "./pages/Spawn";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/omniface" element={<Omniface />} />
      <Route exact path="/styletto" element={<Styletto />} />
      <Route exact path="/spawnsdk" element={<Spawn />} />
    </Routes>
  );
}

export default App;
