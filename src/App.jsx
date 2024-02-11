import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./views/layout/Navigation";
import HomePage from "./views/HomePage.jsx";
import AboutPage from "./views/AboutPage.jsx";
import Contact from "./views/Contact.jsx";
import Profile from "./views/Profile.jsx";

function App() {
  return (
    <Router>
      <div className="mt-3 w-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
