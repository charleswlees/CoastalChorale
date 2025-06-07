import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Recordings from "./pages/Recordings.tsx";
import Photos from "./pages/Photos.tsx";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/hero.scss";
import "./style/style.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
