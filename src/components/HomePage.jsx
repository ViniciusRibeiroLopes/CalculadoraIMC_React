import Navbar from "../components/Navbar";
import Footer from "./IMCPage/Footer";

export default function HomePage({ navigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <Navbar navigate={navigate} />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            HealthTech Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Tecnologia a serviço da sua saúde e bem-estar
          </p>
          <button
            onClick={() => navigate("/imc")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
          >
            Calcular Seu IMC Agora
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
            <div className="bg-blue-500/20 p-3 rounded-full w-fit mb-4">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Cálculo Preciso
            </h3>
            <p className="text-gray-400">
              Algoritmo baseado nos padrões da Organização Mundial da Saúde
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
            <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
              <svg
                className="w-8 h-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Interface Moderna
            </h3>
            <p className="text-gray-400">
              Design responsivo e intuitivo para todos os dispositivos
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all">
            <div className="bg-green-500/20 p-3 rounded-full w-fit mb-4">
              <svg
                className="w-8 h-8 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Resultados Detalhados
            </h3>
            <p className="text-gray-400">
              Interpretação completa com recomendações personalizadas
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-gray-700 p-3 rounded-full mr-4">
              <svg
                className="w-8 h-8 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">
              Sobre a HealthTech Solutions
            </h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Somos uma empresa dedicada a desenvolver soluções tecnológicas
            inovadoras para a área da saúde. Nossa missão é democratizar o
            acesso a ferramentas de monitoramento e avaliação de saúde,
            permitindo que todos possam cuidar melhor de seu bem-estar.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            A Calculadora de IMC é apenas o primeiro passo de uma jornada que
            visa integrar tecnologia e saúde de forma simples, acessível e
            eficiente.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Calcule seu IMC agora e dê o primeiro passo para uma vida mais
            saudável
          </p>
          <button
            onClick={() => navigate("/imc")}
            className="bg-white text-purple-600 font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-xl"
          >
            Acessar Calculadora
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
