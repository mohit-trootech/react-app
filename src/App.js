import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./apps/Counter";
import NoPage from "./NoPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Home";
import Todos from "./apps/Todos";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
