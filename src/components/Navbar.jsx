import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="text-2xl font-light tracking-tight text-white">
              Índice<span className="font-bold">Saúde</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/")}
              className={`text-sm font-medium pb-1 transition-colors ${
                currentPath === "/"
                  ? "border-b-2 border-gray-400 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate("/imc")}
              className={`text-sm font-medium pb-1 transition-colors ${
                currentPath === "/imc"
                  ? "border-b-2 border-gray-400 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Calculadora IMC
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            <button
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 font-medium transition-colors ${
                currentPath === "/"
                  ? "text-white bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/imc");
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 font-medium transition-colors ${
                currentPath === "/imc"
                  ? "text-white bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              Calculadora IMC
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
