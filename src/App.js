import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./apps/Counter";
import NoPage from "./components/NoPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Home";
import CreateTodo from "./apps/CreateTodo";
import Todos from "./apps/Todos";
import ThemeProvider from "./providers/ThemeProvider";
import Calculator from "./apps/Calculator";
import CalculatorProvider from "./providers/CalculatorProvider";
function App() {
  return (
    <ThemeProvider>
      <CalculatorProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/create-todo" element={<CreateTodo />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CalculatorProvider>
    </ThemeProvider>
  );
}

export default App;
