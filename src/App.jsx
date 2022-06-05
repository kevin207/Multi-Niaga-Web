import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Property from "./pages/property/Property";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Multi-Niaga-Web" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </Routes>
    </Router>
  );
};

export default App;
