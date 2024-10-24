import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStateDemo from "./states/UseStateDemo";
import NoPage from "./NoPage";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="min-h-screen">
        <Routes>
          <Route path="" element={<UseStateDemo />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
