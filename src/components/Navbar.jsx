import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser, onAuthChange } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const unsub = onAuthChange(() => setUser(getCurrentUser()));
    return unsub;
  }, []);

  // Fecha menus quando clica fora
  useEffect(() => {
    const closeMenus = () => {
      setIsOpen(false);
      setUserMenuOpen(false);
    };
    window.addEventListener("click", closeMenus);
    return () => window.removeEventListener("click", closeMenus);
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Previne que o click chegue no listener global
    setIsOpen(!isOpen);
  };

  const handleUserMenuClick = (e) => {
    e.stopPropagation(); // Previne que o click chegue no listener global
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
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
              className={`text-sm font-medium transition-all hover:text-white relative group ${
                currentPath === "/" ? "text-white" : "text-gray-400"
              }`}
            >
              Home
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-400 transform origin-left transition-transform duration-300 ${
                  currentPath === "/"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></div>
            </button>

            <button
              onClick={() => navigate("/imc")}
              className={`text-sm font-medium transition-all hover:text-white relative group ${
                currentPath === "/imc" ? "text-white" : "text-gray-400"
              }`}
            >
              Calculadora IMC
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-400 transform origin-left transition-transform duration-300 ${
                  currentPath === "/imc"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></div>
            </button>

            <button
              onClick={() => navigate("/users")}
              className={`text-sm font-medium transition-all hover:text-white relative group ${
                currentPath === "/users" ? "text-white" : "text-gray-400"
              }`}
            >
              Usuários logados
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-400 transform origin-left transition-transform duration-300 ${
                  currentPath === "/users"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></div>
            </button>

            {user ? (
              <div className="relative" onClick={handleUserMenuClick}>
                <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <span className="text-sm font-medium">{user.name}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 border border-gray-700 shadow-lg overflow-hidden">
                    <div className="py-2 px-4 text-sm text-gray-400 border-b border-gray-700">
                      {user.email}
                    </div>
                    <button
                      onClick={() => {
                        logoutUser();
                        navigate("/");
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      Sair da conta
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate("/login")}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Entrar
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="text-sm font-medium px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Criar conta
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuClick}
            className="md:hidden text-gray-300 hover:text-white transition-colors z-50"
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
          <div className="fixed inset-0 bg-gray-900/95 md:hidden z-40">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8 py-8">
              <button
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                }}
                className={`text-2xl font-medium transition-colors ${
                  currentPath === "/"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/imc");
                  setIsOpen(false);
                }}
                className={`text-2xl font-medium transition-colors ${
                  currentPath === "/imc"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Calculadora IMC
              </button>

              <button
                onClick={() => {
                  navigate("/users");
                  setIsOpen(false);
                }}
                className={`text-2xl font-medium transition-colors ${
                  currentPath === "/users"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Usuários logados
              </button>

              {user ? (
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-xl text-white">{user.name}</div>
                  <div className="text-sm text-gray-400">{user.email}</div>
                  <button
                    onClick={() => {
                      logoutUser();
                      navigate("/");
                      setIsOpen(false);
                    }}
                    className="text-lg text-gray-300 hover:text-white"
                  >
                    Sair da conta
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-4">
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsOpen(false);
                    }}
                    className="text-xl text-gray-300 hover:text-white"
                  >
                    Entrar
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setIsOpen(false);
                    }}
                    className="text-xl px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Criar conta
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
