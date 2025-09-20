export default function InfoSection() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12 space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg
              className="w-8 h-8 text-blue-600"
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            O que é o IMC?
          </h2>
        </div>

        <div className="prose max-w-none text-gray-700 space-y-4">
          <p className="text-lg leading-relaxed">
            O <strong>Índice de Massa Corporal (IMC)</strong> é uma medida
            internacional usada para calcular se uma pessoa está no peso ideal.
            Criado pelo matemático belga Lambert Quételet no século XIX, o IMC é
            calculado dividindo o peso (em quilos) pela altura (em metros)
            elevada ao quadrado.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <div className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-blue-600 mr-2"
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
              <strong className="text-blue-800">Fórmula do IMC:</strong>
            </div>
            <p className="text-blue-700 text-lg font-mono bg-white p-3 rounded border">
              IMC = Peso (kg) ÷ Altura² (m)
            </p>
          </div>

          <p>
            Por exemplo, uma pessoa que pesa 70kg e tem 1,75m de altura terá IMC
            de: 70 ÷ (1,75)² = 22,86 kg/m²
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <svg
              className="w-8 h-8 text-green-600"
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Por que o IMC é importante?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                1
              </span>
              Avaliação de Riscos à Saúde
            </h3>
            <p className="text-gray-700">
              O IMC ajuda a identificar se você está em uma faixa de peso que
              pode aumentar o risco de desenvolver problemas de saúde como
              diabetes, doenças cardíacas, pressão alta e alguns tipos de
              câncer.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                2
              </span>
              Monitoramento de Saúde
            </h3>
            <p className="text-gray-700">
              É uma ferramenta simples e gratuita para acompanhar mudanças no
              peso ao longo do tempo, ajudando você e seu médico a monitorar sua
              saúde geral.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                3
              </span>
              Orientação Profissional
            </h3>
            <p className="text-gray-700">
              Profissionais de saúde usam o IMC como ponto de partida para
              avaliar se você pode se beneficiar de mudanças no estilo de vida
              ou intervenções médicas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                4
              </span>
              Padrão Internacional
            </h3>
            <p className="text-gray-700">
              Reconhecido mundialmente pela Organização Mundial da Saúde (OMS),
              permitindo comparações consistentes entre diferentes populações e
              estudos científicos.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <svg
              className="w-8 h-8 text-purple-600"
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Interpretação dos Resultados
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-50 rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-800">
                  Classificação
                </th>
                <th className="text-left p-4 font-semibold text-gray-800">
                  IMC (kg/m²)
                </th>
                <th className="text-left p-4 font-semibold text-gray-800">
                  Riscos à Saúde
                </th>
                <th className="text-left p-4 font-semibold text-gray-800">
                  Recomendações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 hover:bg-blue-50">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
                    <span className="font-medium text-blue-700">
                      Abaixo do peso
                    </span>
                  </div>
                </td>
                <td className="p-4 font-mono text-blue-700">{"< 18,5"}</td>
                <td className="p-4 text-gray-700">
                  <ul className="text-sm space-y-1">
                    <li>• Deficiência nutricional</li>
                    <li>• Sistema imune enfraquecido</li>
                    <li>• Osteoporose</li>
                  </ul>
                </td>
                <td className="p-4 text-gray-700 text-sm">
                  Consulte um nutricionista para ganho saudável de peso
                </td>
              </tr>

              <tr className="border-t border-gray-200 hover:bg-green-50">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-medium text-green-700">
                      Peso normal
                    </span>
                  </div>
                </td>
                <td className="p-4 font-mono text-green-700">18,5 - 24,9</td>
                <td className="p-4 text-gray-700">
                  <ul className="text-sm space-y-1">
                    <li>• Baixo risco</li>
                    <li>• Peso ideal para saúde</li>
                    <li>• Menor risco de doenças</li>
                  </ul>
                </td>
                <td className="p-4 text-gray-700 text-sm">
                  Mantenha hábitos saudáveis e exercícios regulares
                </td>
              </tr>

              <tr className="border-t border-gray-200 hover:bg-yellow-50">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="font-medium text-yellow-700">
                      Sobrepeso
                    </span>
                  </div>
                </td>
                <td className="p-4 font-mono text-yellow-700">25,0 - 29,9</td>
                <td className="p-4 text-gray-700">
                  <ul className="text-sm space-y-1">
                    <li>• Risco moderado</li>
                    <li>• Diabetes tipo 2</li>
                    <li>• Hipertensão</li>
                  </ul>
                </td>
                <td className="p-4 text-gray-700 text-sm">
                  Adote dieta balanceada e aumente atividade física
                </td>
              </tr>

              <tr className="border-t border-gray-200 hover:bg-red-50">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    <span className="font-medium text-red-700">Obesidade</span>
                  </div>
                </td>
                <td className="p-4 font-mono text-red-700">≥ 30,0</td>
                <td className="p-4 text-gray-700">
                  <ul className="text-sm space-y-1">
                    <li>• Alto risco</li>
                    <li>• Doenças cardiovasculares</li>
                    <li>• Diabetes, câncer</li>
                  </ul>
                </td>
                <td className="p-4 text-gray-700 text-sm">
                  Procure orientação médica e nutricional urgente
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-orange-100 p-3 rounded-full mr-4">
            <svg
              className="w-8 h-8 text-orange-600"
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Limitações do IMC
          </h2>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
          <p className="text-orange-800 font-medium mb-2">
            ⚠️ Importante lembrar:
          </p>
          <p className="text-orange-700">
            O IMC é uma ferramenta de triagem, não um diagnóstico definitivo da
            saúde ou gordura corporal de uma pessoa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              O IMC não considera:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>Composição corporal:</strong> Não diferencia músculo
                  de gordura
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>Distribuição de gordura:</strong> Localização da
                  gordura corporal
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>Idade e sexo:</strong> Diferenças metabólicas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>Etnia:</strong> Variações genéticas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>Histórico médico:</strong> Condições de saúde
                  individuais
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Casos especiais:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Atletas:</strong> Podem ter IMC alto devido à massa
                  muscular
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Idosos:</strong> Podem precisar de avaliação
                  diferenciada
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Crianças:</strong> Requerem gráficos específicos por
                  idade
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Gestantes:</strong> Necessitam acompanhamento
                  especializado
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <svg
              className="w-8 h-8 text-teal-600"
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Dicas para Manter um Peso Saudável
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-2 rounded-full mr-3">
                <svg
                  className="w-5 h-5 text-white"
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
              <h3 className="text-lg font-semibold text-blue-800">
                Alimentação
              </h3>
            </div>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Dieta balanceada e variada</li>
              <li>• Controle das porções</li>
              <li>• Reduza açúcares e gorduras</li>
              <li>• Aumente frutas e vegetais</li>
              <li>• Beba bastante água</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-2 rounded-full mr-3">
                <svg
                  className="w-5 h-5 text-white"
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
              <h3 className="text-lg font-semibold text-green-800">
                Exercícios
              </h3>
            </div>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• 150min de atividade semanal</li>
              <li>• Combine cardio e musculação</li>
              <li>• Atividades que você gosta</li>
              <li>• Comece gradualmente</li>
              <li>• Seja consistente</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 p-2 rounded-full mr-3">
                <svg
                  className="w-5 h-5 text-white"
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
              <h3 className="text-lg font-semibold text-purple-800">
                Estilo de Vida
              </h3>
            </div>
            <ul className="space-y-2 text-purple-700 text-sm">
              <li>• Durma 7-9 horas por noite</li>
              <li>• Gerencie o estresse</li>
              <li>• Evite dietas extremas</li>
              <li>• Monitore seu progresso</li>
              <li>• Procure apoio profissional</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-red-800 mb-3">⚕️ Importante</h3>
        <p className="text-red-700 text-lg leading-relaxed">
          Esta calculadora é apenas uma ferramenta informativa. Para uma
          avaliação completa da sua saúde,
          <strong>
            {" "}
            sempre consulte um médico ou nutricionista qualificado
          </strong>
          . Eles podem considerar seu histórico médico, composição corporal e
          outros fatores importantes para sua saúde.
        </p>
      </div>
    </div>
  );
}
