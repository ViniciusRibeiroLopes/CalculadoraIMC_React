import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../utils/auth";

export default function HomePage() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleCalculateIMC = () => {
    if (user) {
      navigate("/imc");
    } else {
      // Redireciona para login e depois volta para IMC
      navigate("/login", { state: { from: { pathname: "/imc" } } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 border border-gray-600 text-xs font-medium tracking-wider text-gray-300">
            TECNOLOGIA × SAÚDE
          </div>
          <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-8 leading-none text-white">
            Saúde é
            <br />
            <span className="font-bold italic">simplicidade</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed">
            Ferramentas precisas, design minimalista. Sem complicações, apenas
            resultados.
          </p>
          <button
            onClick={handleCalculateIMC}
            className="group relative px-8 py-4 bg-gray-700 text-white font-medium overflow-hidden hover:bg-gray-600 transition-colors"
          >
            <span className="relative z-10">
              {user ? "Iniciar Avaliação" : "Fazer Login e Calcular"}
            </span>
            <div className="absolute inset-0 bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          {!user && (
            <p className="mt-4 text-sm text-gray-500">
              É necessário fazer login para calcular o IMC
            </p>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-b border-gray-700 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-white">98%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Precisão
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-white">&lt;1s</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Resultado
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-white">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Disponível
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-white">OMS</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Padrão
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-1 border border-gray-700">
          {/* Feature 1 */}
          <div className="p-12 border-r border-b border-gray-700 hover:bg-gray-800 transition-colors group">
            <div className="w-12 h-12 border-2 border-gray-400 mb-6 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <div className="w-2 h-2 bg-gray-400"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Cálculo Científico
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Baseado nos padrões internacionais da Organização Mundial da
              Saúde. Metodologia validada e reconhecida globalmente.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-12 border-b border-gray-700 hover:bg-gray-800 transition-colors group">
            <div className="w-12 h-12 border-2 border-gray-400 mb-6 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <div className="w-2 h-2 bg-gray-400"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Interface Intuitiva
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Design pensado para remover fricções. Menos cliques, mais
              resultados. Experiência fluida em qualquer dispositivo.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-12 border-r border-gray-700 hover:bg-gray-800 transition-colors group">
            <div className="w-12 h-12 border-2 border-gray-400 mb-6 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <div className="w-2 h-2 bg-gray-400"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Análise Detalhada
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Interpretação completa do seu resultado com recomendações
              personalizadas e insights acionáveis.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-12 hover:bg-gray-800 transition-colors group">
            <div className="w-12 h-12 border-2 border-gray-400 mb-6 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <div className="w-2 h-2 bg-gray-400"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              100% Gratuito
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Acesso ilimitado e completamente gratuito. Saúde não deve ter
              barreiras financeiras.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            Como <span className="font-bold">funciona</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold mb-4 text-gray-600">01</div>
              <h3 className="text-xl font-bold mb-3">Faça login</h3>
              <p className="text-gray-400 leading-relaxed">
                Crie sua conta ou entre para acessar a calculadora de IMC.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-4 text-gray-600">02</div>
              <h3 className="text-xl font-bold mb-3">Insira seus dados</h3>
              <p className="text-gray-400 leading-relaxed">
                Altura e peso. Simples assim. Interface intuitiva e rápida.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-4 text-gray-600">03</div>
              <h3 className="text-xl font-bold mb-3">Receba insights</h3>
              <p className="text-gray-400 leading-relaxed">
                Interpretação clara com recomendações práticas para sua saúde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="text-sm font-medium tracking-wider mb-4 text-gray-400">
              MANIFESTO
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-white">
              Tecnologia não precisa ser{" "}
              <span className="font-bold">complexa</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed border-l-2 border-gray-600 pl-8">
            <p>
              Vivemos em um mundo onde a complexidade é confundida com
              sofisticação. Acreditamos no oposto: a verdadeira inovação está em
              tornar o complexo simples.
            </p>
            <p>
              Nossa missão é democratizar ferramentas de saúde através de design
              minimalista e tecnologia acessível. Cada pixel tem um propósito.
              Cada interação é intencional.
            </p>
            <p>
              A calculadora de IMC é apenas o começo. Estamos construindo um
              ecossistema completo de ferramentas de saúde que respeitam seu
              tempo e inteligência.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-white">
            Comece <span className="font-bold">agora</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {user
              ? "Você está pronto para calcular seu IMC."
              : "Crie sua conta gratuita e comece a monitorar sua saúde hoje."}
          </p>
          <button
            onClick={handleCalculateIMC}
            className="group relative px-12 py-5 bg-gray-700 text-white font-medium text-lg overflow-hidden hover:bg-gray-600 transition-colors"
          >
            <span className="relative z-10 flex items-center gap-3 justify-center">
              {user ? "Calcular IMC" : "Criar Conta e Calcular"}
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gray-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 text-white">
            O que <span className="font-bold">dizem</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 p-8 border border-gray-700">
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Design impecável. Finalmente uma ferramenta de saúde que não
                parece saída dos anos 2000."
              </p>
              <div className="text-sm font-medium text-gray-400">
                — Ana Silva
              </div>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-700">
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Rápido, preciso e sem enrolação. Exatamente o que eu
                precisava."
              </p>
              <div className="text-sm font-medium text-gray-400">
                — Carlos Mendes
              </div>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-700">
              <p className="text-gray-300 mb-6 leading-relaxed">
                "A simplicidade é o diferencial. Interface limpa e resultados
                claros."
              </p>
              <div className="text-sm font-medium text-gray-400">
                — Marina Costa
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-gray-700 pt-8 pb-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-light tracking-wide text-gray-500">
            © 2025 Calculadora de IMC | Desenvolvido por Vinícius Ribeiro Lopes
          </p>
        </div>
      </footer>
    </div>
  );
}
