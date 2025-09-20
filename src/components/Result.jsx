export default function Result({ imc }) {
  if (!imc) {
    return (
      <div className="w-full max-w-md bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-300 text-center">
        <svg
          className="w-16 h-16 mx-auto text-gray-400 mb-4"
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
        <p className="text-gray-500">
          Insira seu peso e altura para calcular o IMC
        </p>
      </div>
    );
  }

  let categoria = "";
  let color = "";
  let bgColor = "";
  let icon = "";
  let description = "";

  if (imc < 18.5) {
    categoria = "Abaixo do peso";
    color = "text-blue-600";
    bgColor = "bg-blue-50 border-blue-200";
    icon = "⚠️";
    description =
      "Você está abaixo do peso ideal. Considere consultar um nutricionista.";
  } else if (imc < 25) {
    categoria = "Peso normal";
    color = "text-green-600";
    bgColor = "bg-green-50 border-green-200";
    icon = "✅";
    description =
      "Parabéns! Você está com o peso ideal. Continue mantendo hábitos saudáveis.";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
    color = "text-yellow-600";
    bgColor = "bg-yellow-50 border-yellow-200";
    icon = "⚠️";
    description =
      "Você está com sobrepeso. Considere ajustar sua dieta e exercícios.";
  } else {
    categoria = "Obesidade";
    color = "text-red-600";
    bgColor = "bg-red-50 border-red-200";
    icon = "⚠️";
    description =
      "Você está com obesidade. É importante buscar orientação médica.";
  }

  const getProgressWidth = () => {

    const minIMC = 15;
    const maxIMC = 40;

    const clampedIMC = Math.max(minIMC, Math.min(maxIMC, imc));

    let position;
    if (clampedIMC < 18.5) {
      position = ((clampedIMC - 15) / 3.5) * 25;
    } else if (clampedIMC < 25) {
      position = 25 + ((clampedIMC - 18.5) / 6.5) * 25;
    } else if (clampedIMC < 30) {
      position = 50 + ((clampedIMC - 25) / 5) * 25;
    } else {
      position = 75 + ((clampedIMC - 30) / 10) * 25;
    }

    return `${Math.min(95, Math.max(5, position))}%`;
  };

  return (
    <div className="w-full max-w-2xl">
      <div className={`rounded-2xl p-8 border-2 ${bgColor} shadow-2xl`}>
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">{icon}</div>
          <h2 className={`text-4xl font-bold ${color} mb-2`}>
            {imc.toFixed(1)}
          </h2>
          <p className={`text-xl font-semibold ${color}`}>{categoria}</p>
        </div>

        <div className="mb-6">
          <div className="relative bg-gray-200 rounded-full h-4 mb-2 overflow-hidden">
            <div className="absolute inset-0 flex">
              <div className="w-1/4 bg-blue-300"></div>
              <div className="w-1/4 bg-green-400"></div>
              <div className="w-1/4 bg-yellow-400"></div>
              <div className="w-1/4 bg-red-400"></div>
            </div>
            <div
              className="absolute top-0 h-full w-1 bg-gray-800 transition-all duration-500"
              style={{ left: getProgressWidth() }}
            >
              <div className="absolute -top-1 -left-2 w-5 h-6 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-600 font-medium">
            <span>Baixo</span>
            <span>Normal</span>
            <span>Sobrepeso</span>
            <span>Obesidade</span>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>&lt;18.5</span>
            <span>18.5-24.9</span>
            <span>25-29.9</span>
            <span>≥30</span>
          </div>
        </div>

        <p className="text-gray-700 text-center mb-6">{description}</p>

        <div className="bg-white/50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-700 mb-3 text-sm">
            Tabela de Referência IMC
          </h3>
          <div className="space-y-2 text-sm">
            <div
              className={`flex justify-between py-1 px-2 rounded transition-colors ${
                imc < 18.5 ? "bg-blue-100 font-semibold" : "hover:bg-white/70"
              }`}
            >
              <span className="text-gray-600">Abaixo do peso</span>
              <span className="font-medium text-blue-600">&lt; 18.5</span>
            </div>
            <div
              className={`flex justify-between py-1 px-2 rounded transition-colors ${
                imc >= 18.5 && imc < 25
                  ? "bg-green-100 font-semibold"
                  : "hover:bg-white/70"
              }`}
            >
              <span className="text-gray-600">Peso normal</span>
              <span className="font-medium text-green-600">18.5 - 24.9</span>
            </div>
            <div
              className={`flex justify-between py-1 px-2 rounded transition-colors ${
                imc >= 25 && imc < 30
                  ? "bg-yellow-100 font-semibold"
                  : "hover:bg-white/70"
              }`}
            >
              <span className="text-gray-600">Sobrepeso</span>
              <span className="font-medium text-yellow-600">25.0 - 29.9</span>
            </div>
            <div
              className={`flex justify-between py-1 px-2 rounded transition-colors ${
                imc >= 30 ? "bg-red-100 font-semibold" : "hover:bg-white/70"
              }`}
            >
              <span className="text-gray-600">Obesidade</span>
              <span className="font-medium text-red-600">≥ 30.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
