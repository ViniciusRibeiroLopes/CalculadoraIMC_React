export default function InfoSection() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12 space-y-8">
      <div className="flex items-center mb-6">
        <div className="bg-gray-700 p-3 rounded-full mr-4 border border-gray-600">
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
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
          O que é o IMC?
        </h2>
      </div>

      <div className="text-gray-300 space-y-4">
        <p className="text-lg leading-relaxed">
          O{" "}
          <strong className="text-gray-100">
            Índice de Massa Corporal (IMC)
          </strong>{" "}
          é uma medida internacional usada para calcular se uma pessoa está no
          peso ideal. É calculado dividindo o peso (em quilos) pela altura (em
          metros) elevada ao quadrado.
        </p>

        <div className="flex items-center mb-2">
          <svg
            className="w-5 h-5 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
          <strong className="text-gray-200">Fórmula:</strong>
        </div>
        <p className="text-gray-300 text-lg font-mono bg-gray-900 p-3 rounded border border-gray-600">
          IMC = Peso (kg) ÷ Altura² (m)
        </p>
      </div>

      <div className="flex items-center mb-6">
        <div className="bg-gray-700 p-3 rounded-full mr-4 border border-gray-600">
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
          Interpretação dos Resultados
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-600">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-200">
                Classificação
              </th>
              <th className="text-left p-4 font-semibold text-gray-200">
                IMC (kg/m²)
              </th>
              <th className="text-left p-4 font-semibold text-gray-200">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-600 hover:bg-gray-650">
              <td className="p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
                  <span className="font-medium text-blue-400">
                    Abaixo do peso
                  </span>
                </div>
              </td>
              <td className="p-4 font-mono text-blue-400">{"< 18,5"}</td>
              <td className="p-4 text-gray-300 text-sm">
                Consulte um nutricionista
              </td>
            </tr>

            <tr className="border-t border-gray-600 hover:bg-gray-650">
              <td className="p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
                  <span className="font-medium text-green-400">
                    Peso normal
                  </span>
                </div>
              </td>
              <td className="p-4 font-mono text-green-400">18,5 - 24,9</td>
              <td className="p-4 text-gray-300 text-sm">
                Mantenha hábitos saudáveis
              </td>
            </tr>

            <tr className="border-t border-gray-600 hover:bg-gray-650">
              <td className="p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="font-medium text-yellow-400">Sobrepeso</span>
                </div>
              </td>
              <td className="p-4 font-mono text-yellow-400">25,0 - 29,9</td>
              <td className="p-4 text-gray-300 text-sm">
                Adote dieta balanceada
              </td>
            </tr>

            <tr className="border-t border-gray-600 hover:bg-gray-650">
              <td className="p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                  <span className="font-medium text-red-400">Obesidade</span>
                </div>
              </td>
              <td className="p-4 font-mono text-red-400">≥ 30,0</td>
              <td className="p-4 text-gray-300 text-sm">
                Procure orientação médica
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center mb-6">
        <div className="bg-orange-800/50 p-3 rounded-full mr-4 border border-orange-600/50">
          <svg
            className="w-8 h-8 text-orange-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
          Limitações do IMC
        </h2>
      </div>

      <div className="bg-orange-800/20 border-l-4 border-orange-400/50 p-6 mb-6 rounded-r-lg">
        <p className="text-orange-300 font-medium mb-2">
          ⚠️ Importante lembrar:
        </p>
        <p className="text-orange-200">
          O IMC é uma ferramenta de triagem, não um diagnóstico definitivo da
          saúde ou gordura corporal.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-200">
            O IMC não considera:
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <span>
                <strong className="text-gray-200">Composição corporal:</strong>{" "}
                Músculos vs gordura
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <span>
                <strong className="text-gray-200">Distribuição:</strong>{" "}
                Localização da gordura
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <span>
                <strong className="text-gray-200">Idade e sexo:</strong>{" "}
                Diferenças metabólicas
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-200">
            Casos especiais:
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong className="text-gray-200">Atletas:</strong> IMC alto por
                massa muscular
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong className="text-gray-200">Idosos:</strong> Avaliação
                diferenciada
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong className="text-gray-200">Gestantes:</strong>{" "}
                Acompanhamento especializado
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="bg-gray-700 p-3 rounded-full mr-4 border border-gray-600">
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
          Dicas para Manter um Peso Saudável
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600/20 p-2 rounded-full mr-3 border border-blue-600/30">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0v6a2 2 0 11-4 0v-6m6 0v6a2 2 0 11-4 0v-6"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-400">Alimentação</h3>
          </div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Dieta balanceada e variada</li>
            <li>• Controle das porções</li>
            <li>• Reduza açúcares</li>
            <li>• Beba bastante água</li>
          </ul>
        </div>

        <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
          <div className="flex items-center mb-4">
            <div className="bg-green-600/20 p-2 rounded-full mr-3 border border-green-600/30">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-400">Exercícios</h3>
          </div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• 150min semanais</li>
            <li>• Cardio + musculação</li>
            <li>• Atividades prazerosas</li>
            <li>• Seja consistente</li>
          </ul>
        </div>

        <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
          <div className="flex items-center mb-4">
            <div className="bg-purple-600/20 p-2 rounded-full mr-3 border border-purple-600/30">
              <svg
                className="w-5 h-5 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-purple-400">
              Estilo de Vida
            </h3>
          </div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Durma 7-9 horas</li>
            <li>• Gerencie o estresse</li>
            <li>• Evite dietas extremas</li>
            <li>• Apoio profissional</li>
          </ul>
        </div>
      </div>

      {/* Aviso Importante */}
      <div className="bg-gradient-to-r from-red-800/30 to-red-700/30 border-2 border-red-600/50 rounded-2xl p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-red-800/50 p-3 rounded-full border border-red-600/50">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z"
              ></path>
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-red-300 mb-3">⚕️ Importante</h3>
        <p className="text-red-200 text-lg leading-relaxed">
          Esta calculadora é apenas uma ferramenta informativa. Para uma
          avaliação completa da sua saúde,{" "}
          <strong className="text-red-100">
            sempre consulte um médico ou nutricionista qualificado
          </strong>
          .
        </p>
      </div>
    </div>
  );
}
