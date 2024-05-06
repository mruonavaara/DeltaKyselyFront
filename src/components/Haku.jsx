import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Vastaukset from "./Vastaukset";

function Haku() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/vastaukset" component={Vastaukset} />
      </Routes>
    </Router>
  );
}

export default Haku;
