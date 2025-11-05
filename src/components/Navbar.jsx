import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getCurrentUser, logoutUser, onAuthChange } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const currentPath = location.pathname;

  useEffect(() => {
    const unsub = onAuthChange(() => setUser(getCurrentUser()));
    return unsub;
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const closeUserMenu = (e) => {
      if (userMenuOpen && !e.target.closest(".user-menu-container")) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("click", closeUserMenu);
    return () => document.removeEventListener("click", closeUserMenu);
  }, [userMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const NavLink = ({ to, children }) => (
    <button
      onClick={() => navigate(to)}
      className={`text-sm font-medium transition-all hover:text-white relative group ${
        currentPath === to ? "text-white" : "text-gray-400"
      }`}
    >
      {children}
      <div
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-400 transform origin-left transition-transform duration-300 ${
          currentPath === to
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
        }`}
      ></div>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="text-xl md:text-2xl font-light tracking-tight text-white">
              Índice<span className="font-bold">Saúde</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/imc">Calculadora IMC</NavLink>
            <NavLink to="/users">Usuários logados</NavLink>

            {user ? (
              <div className="relative user-menu-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setUserMenuOpen(!userMenuOpen);
                  }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
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
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 border border-gray-700 shadow-lg overflow-hidden z-[55]">
                    <div className="py-2 px-4 text-sm text-gray-400 border-b border-gray-700">
                      {user.email}
                    </div>
                    <button
                      onClick={handleLogout}
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
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2 z-[60]"
            aria-label="Menu"
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-down Menu Panel */}
          <div className="absolute top-16 left-0 right-0 bg-gray-900 min-h-[calc(100vh-4rem)] overflow-y-auto transition-all duration-300 shadow-lg">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {/* Navigation Links */}
                <button
                  onClick={() => navigate("/")}
                  className={`text-left text-lg font-medium transition-colors py-2 ${
                    currentPath === "/"
                      ? "text-white border-l-2 border-white pl-4"
                      : "text-gray-400 hover:text-white pl-4"
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => navigate("/imc")}
                  className={`text-left text-lg font-medium transition-colors py-2 ${
                    currentPath === "/imc"
                      ? "text-white border-l-2 border-white pl-4"
                      : "text-gray-400 hover:text-white pl-4"
                  }`}
                >
                  Calculadora IMC
                </button>

                <button
                  onClick={() => navigate("/users")}
                  className={`text-left text-lg font-medium transition-colors py-2 ${
                    currentPath === "/users"
                      ? "text-white border-l-2 border-white pl-4"
                      : "text-gray-400 hover:text-white pl-4"
                  }`}
                >
                  Usuários logados
                </button>

                {/* User Section */}
                <div className="pt-6 border-t border-gray-800">
                  {user ? (
                    <div className="space-y-4">
                      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="text-white font-medium mb-1">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors border border-gray-700"
                      >
                        Sair da conta
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <button
                        onClick={() => navigate("/login")}
                        className="w-full text-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors border border-gray-700"
                      >
                        Entrar
                      </button>
                      <button
                        onClick={() => navigate("/register")}
                        className="w-full text-center px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                      >
                        Criar conta
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
