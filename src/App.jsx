import { Router, Routes, Route } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import IMCPage from "./components/IMCPage";
import NotFoundPage from "./components/404Page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(props) => <HomePage {...props} />} />
        <Route path="/imc" element={(props) => <IMCPage {...props} />} />
        <Route path="*" element={(props) => <NotFoundPage {...props} />} />
      </Routes>
    </Router>
  );
}
