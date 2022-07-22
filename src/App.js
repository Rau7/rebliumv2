import "./App.css";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Omniface from "./pages/Omniface";
import Styletto from "./pages/Styletto";
import Spawn from "./pages/Spawn";
import AvatarSystem from "./pages/AvatarSystem";
import Reblika from "./pages/Reblika";
import Tutorials from "./pages/Tutorials";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/omniface" element={<Omniface />} />
      <Route exact path="/styletto" element={<Styletto />} />
      <Route exact path="/spawnsdk" element={<Spawn />} />
      <Route exact path="/avatar_system" element={<AvatarSystem />} />
      <Route exact path="/reblika" element={<Reblika />} />
      <Route exact path="/tutorials" element={<Tutorials />} />
      <Route exact path="/about_us" element={<AboutUs />} />
      <Route exact path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
