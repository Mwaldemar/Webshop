import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";

function App() {
  return (
    <Router>
      <div>Header</div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>Footer</div>
    </Router>
  );
}

export default App;
