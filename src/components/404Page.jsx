import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-700 mb-4">404</h1>
            <div className="flex justify-center mb-6">
              <svg
                className="w-32 h-32 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            Página não encontrada
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              Voltar para Home
            </button>
            <button
              onClick={() => navigate("/imc")}
              className="bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-600 transition-all border border-gray-600"
            >
              Calcular IMC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
