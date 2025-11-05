import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import IMC from "./components/IMCPage";
import NotFoundPage from "./components/404Page";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import UsersList from "./components/Auth/UsersList";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/imc"
          element={
            <ProtectedRoute>
              <IMC />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
