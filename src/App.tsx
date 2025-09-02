import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CustomCabinets from "./pages/CustomCabinets";
import Installation from "./pages/Installation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Flooring from "./pages/Flooring";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/custom-cabinets" element={<CustomCabinets />} />
      <Route path="/installation" element={<Installation />} />
      <Route path="/flooring" element={<Flooring />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
