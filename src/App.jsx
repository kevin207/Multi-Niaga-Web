import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";

import Rajabasa from "./pages/property/location/rajabasa/Rajabasa";
import Korpri from "./pages/property/location/korpri/Korpri";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Multi-Niaga-Web" element={<Home />} />

        <Route path="/property/rajabasa" element={<Rajabasa />} />
        <Route path="/property/korpri" element={<Korpri />} />
      </Routes>
    </Router>
  );
};

export default App;
