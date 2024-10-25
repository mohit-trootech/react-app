import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./apps/Counter";
import NoPage from "./components/NoPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Home";
import CreateTodo from "./apps/CreateTodo";
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
          <Route path="/todo-create" element={<CreateTodo />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
