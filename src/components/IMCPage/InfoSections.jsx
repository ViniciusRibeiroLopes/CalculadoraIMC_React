export default function InfoSection() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12 space-y-16">
      {/* O que é o IMC */}
      <section className="border-t border-gray-700 pt-12">
        <div className="mb-8">
          <div className="text-sm font-medium tracking-wider mb-4 text-gray-400">
            CONCEITO
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            O que é o <span className="font-bold">IMC</span>
          </h2>
        </div>

        <div className="text-gray-400 space-y-6 text-lg leading-relaxed border-l-2 border-gray-600 pl-8">
          <p>
            O{" "}
            <strong className="text-white">
              Índice de Massa Corporal (IMC)
            </strong>{" "}
            é uma medida internacional usada para calcular se uma pessoa está no
            peso ideal. É calculado dividindo o peso (em quilos) pela altura (em
            metros) elevada ao quadrado.
          </p>

          <div className="bg-gray-800 border border-gray-700 p-6 my-6">
            <p className="text-gray-300 mb-2 text-sm font-medium tracking-wider">
              FÓRMULA
            </p>
            <p className="text-white text-2xl font-light">
              IMC = Peso (kg) ÷ Altura² (m)
            </p>
          </div>
        </div>
      </section>

      {/* Interpretação dos Resultados */}
      <section className="border-t border-gray-700 pt-12">
        <div className="mb-8">
          <div className="text-sm font-medium tracking-wider mb-4 text-gray-400">
            CLASSIFICAÇÃO
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Interpretação dos <span className="font-bold">resultados</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="border-b-2 border-gray-700">
              <tr>
                <th className="text-left p-4 font-medium text-gray-300 text-sm tracking-wider">
                  CLASSIFICAÇÃO
                </th>
                <th className="text-left p-4 font-medium text-gray-300 text-sm tracking-wider">
                  IMC (kg/m²)
                </th>
                <th className="text-left p-4 font-medium text-gray-300 text-sm tracking-wider">
                  RECOMENDAÇÃO
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 mr-3"></div>
                    <span className="font-medium text-white">
                      Abaixo do peso
                    </span>
                  </div>
                </td>
                <td className="p-4 text-blue-400 font-light">{"< 18,5"}</td>
                <td className="p-4 text-gray-400">Consulte um nutricionista</td>
              </tr>

              <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 mr-3"></div>
                    <span className="font-medium text-white">Peso normal</span>
                  </div>
                </td>
                <td className="p-4 text-green-400 font-light">18,5 - 24,9</td>
                <td className="p-4 text-gray-400">
                  Mantenha hábitos saudáveis
                </td>
              </tr>

              <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 mr-3"></div>
                    <span className="font-medium text-white">Sobrepeso</span>
                  </div>
                </td>
                <td className="p-4 text-yellow-400 font-light">25,0 - 29,9</td>
                <td className="p-4 text-gray-400">Adote dieta balanceada</td>
              </tr>

              <tr className="hover:bg-gray-800/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 mr-3"></div>
                    <span className="font-medium text-white">Obesidade</span>
                  </div>
                </td>
                <td className="p-4 text-red-400 font-light">≥ 30,0</td>
                <td className="p-4 text-gray-400">Procure orientação médica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Limitações do IMC */}
      <section className="border-t border-gray-700 pt-12">
        <div className="mb-8">
          <div className="text-sm font-medium tracking-wider mb-4 text-gray-400">
            IMPORTANTE
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Limitações do <span className="font-bold">IMC</span>
          </h2>
        </div>

        <div className="bg-gray-800 border-l-4 border-orange-400 p-8 mb-8">
          <p className="text-orange-400 font-medium mb-3 text-sm tracking-wider">
            AVISO
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            O IMC é uma ferramenta de triagem, não um diagnóstico definitivo da
            saúde ou gordura corporal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white border-b border-gray-700 pb-3">
              O IMC não considera
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="text-gray-600 mr-3 mt-1">—</span>
                <span>
                  <strong className="text-white">Composição corporal:</strong>{" "}
                  Músculos vs gordura
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3 mt-1">—</span>
                <span>
                  <strong className="text-white">Distribuição:</strong>{" "}
                  Localização da gordura
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3 mt-1">—</span>
                <span>
                  <strong className="text-white">Idade e sexo:</strong>{" "}
                  Diferenças metabólicas
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white border-b border-gray-700 pb-3">
              Casos especiais
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="text-gray-600 mr-3 mt-1">—</span>
                <span>
                  <strong className="text-white">Atletas:</strong> IMC alto por
                  massa muscular
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3 mt-1">—</span>
                <span>
                  <strong className="text-white">Idosos:</strong> Avaliação
                  diferenciada
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3 mt-1">—</span>
                <span>
                  <strong className="text-white">Gestantes:</strong>{" "}
                  Acompanhamento especializado
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dicas para Manter um Peso Saudável */}
      <section className="border-t border-gray-700 pt-12">
        <div className="mb-8">
          <div className="text-sm font-medium tracking-wider mb-4 text-gray-400">
            RECOMENDAÇÕES
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Mantenha um peso <span className="font-bold">saudável</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-1 border border-gray-700">
          <div className="p-8 border-r border-b border-gray-700 hover:bg-gray-800 transition-colors">
            <div className="w-12 h-12 border-2 border-gray-600 mb-6 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Alimentação</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Dieta balanceada e variada</li>
              <li>Controle das porções</li>
              <li>Reduza açúcares</li>
              <li>Beba bastante água</li>
            </ul>
          </div>

          <div className="p-8 border-r border-b border-gray-700 hover:bg-gray-800 transition-colors">
            <div className="w-12 h-12 border-2 border-gray-600 mb-6 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Exercícios</h3>
            <ul className="space-y-3 text-gray-400">
              <li>150min semanais</li>
              <li>Cardio + musculação</li>
              <li>Atividades prazerosas</li>
              <li>Seja consistente</li>
            </ul>
          </div>

          <div className="p-8 border-b border-gray-700 hover:bg-gray-800 transition-colors">
            <div className="w-12 h-12 border-2 border-gray-600 mb-6 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Estilo de Vida
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Durma 7-9 horas</li>
              <li>Gerencie o estresse</li>
              <li>Evite dietas extremas</li>
              <li>Apoio profissional</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Aviso Importante */}
      <div className="border-t border-gray-700 pt-12 pb-8">
        <div className="bg-gray-800 border-l-4 border-red-400 p-8 text-center">
          <p className="text-red-400 font-medium mb-3 text-sm tracking-wider">
            AVISO MÉDICO
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Esta calculadora é apenas uma ferramenta informativa. Para uma
            avaliação completa da sua saúde,{" "}
            <strong className="text-white">
              sempre consulte um médico ou nutricionista qualificado
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
