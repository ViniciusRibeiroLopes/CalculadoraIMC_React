import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser, onAuthChange } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const currentPath = window.location.pathname;

  useEffect(() => {
    const unsub = onAuthChange(() => setUser(getCurrentUser()));
    return unsub;
  }, []);

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

          <div className="hidden md:flex items-center space-x-6">
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

            <button
              onClick={() => navigate("/users")}
              className={`text-sm font-medium pb-1 transition-colors ${
                currentPath === "/users"
                  ? "border-b-2 border-gray-400 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Usuários logados
            </button>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-300">{user.name}</div>
                <button
                  onClick={() => {
                    logoutUser();
                    navigate("/");
                  }}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Entrar
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Cadastro
                </button>
              </div>
            )}
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

            <button
              onClick={() => {
                navigate("/users");
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 font-medium transition-colors ${
                currentPath === "/users"
                  ? "text-white bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              Usuários logados
            </button>

            {user ? (
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="text-white">{user.name}</div>
                <button
                  onClick={() => {
                    logoutUser();
                    navigate("/");
                    setIsOpen(false);
                  }}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="px-4 py-3 flex items-center gap-4">
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                  }}
                  className="text-gray-300 hover:text-white"
                >
                  Entrar
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                    setIsOpen(false);
                  }}
                  className="text-gray-300 hover:text-white"
                >
                  Cadastro
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
