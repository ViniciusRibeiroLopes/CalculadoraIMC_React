export function Result({ imc }) {
  if (!imc) {
    return (
      <div className="w-full max-w-md bg-gray-900 border-2 border-dashed border-gray-700 p-12 text-center">
        <div className="w-12 h-12 border-2 border-gray-700 mx-auto mb-6 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-700"></div>
        </div>
        <p className="text-gray-400 font-light">
          Insira seu peso e altura para calcular o IMC
        </p>
      </div>
    );
  }

  let categoria = "";
  let color = "";
  let borderColor = "";
  let description = "";

  if (imc < 18.5) {
    categoria = "Abaixo do peso";
    color = "text-blue-400";
    borderColor = "border-blue-400";
    description = "Você está abaixo do peso ideal. Considere consultar um nutricionista.";
  } else if (imc < 25) {
    categoria = "Peso normal";
    color = "text-green-400";
    borderColor = "border-green-400";
    description = "Parabéns! Você está com o peso ideal. Continue mantendo hábitos saudáveis.";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
    color = "text-yellow-400";
    borderColor = "border-yellow-400";
    description = "Você está com sobrepeso. Considere ajustar sua dieta e exercícios.";
  } else if (imc < 35) {
    categoria = "Obesidade Grau I";
    color = "text-red-400";
    borderColor = "border-red-400";
    description = "Você está com obesidade. É importante buscar orientação médica.";
  } else if (imc < 40) {
    categoria = "Obesidade Grau II";
    color = "text-red-400";
    borderColor = "border-red-400";
    description = "Você está com obesidade. É importante buscar orientação médica.";
  } else {
    categoria = "Obesidade Grau III";
    color = "text-red-400";
    borderColor = "border-red-400";
    description = "Você está com obesidade. É importante buscar orientação médica.";
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
      <div className={`bg-gray-900 p-8 border-2 ${borderColor}`}>
        <div className="text-center mb-8 pb-8 border-b border-gray-700">
          <div className="text-sm font-medium tracking-wider mb-4 text-gray-400">
            SEU RESULTADO
          </div>
          <h2 className={`text-6xl font-light ${color} mb-4`}>
            {imc.toFixed(1)}
          </h2>
          <p className={`text-xl font-medium ${color} tracking-wide`}>{categoria}</p>
        </div>

        <div className="mb-8">
          <div className="relative bg-gray-800 h-2 mb-4 overflow-hidden">
            <div className="absolute inset-0 flex">
              <div className="w-1/4 bg-blue-400"></div>
              <div className="w-1/4 bg-green-400"></div>
              <div className="w-1/4 bg-yellow-400"></div>
              <div className="w-1/4 bg-red-400"></div>
            </div>
            <div
              className="absolute top-0 h-full w-0.5 bg-white transition-all duration-500"
              style={{ left: getProgressWidth() }}
            >
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-white"></div>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-500 font-medium tracking-wider">
            <span>&lt;18.5</span>
            <span>18.5-24.9</span>
            <span>25-29.9</span>
            <span>≥30</span>
          </div>
        </div>

        <p className="text-gray-400 text-center mb-8 leading-relaxed border-l-2 border-gray-700 pl-6 text-left">
          {description}
        </p>

        <div className="bg-gray-800 border border-gray-700 p-6">
          <h3 className="font-medium text-gray-300 mb-4 text-sm tracking-wider uppercase">
            Referência IMC
          </h3>
          <div className="space-y-3 text-sm">
            <div className={`flex justify-between py-2 border-b border-gray-700 ${imc < 18.5 ? "font-bold" : ""}`}>
              <span className="text-gray-400">Abaixo do peso</span>
              <span className={imc < 18.5 ? color : "text-gray-500"}>&lt; 18.5</span>
            </div>
            <div className={`flex justify-between py-2 border-b border-gray-700 ${imc >= 18.5 && imc < 25 ? "font-bold" : ""}`}>
              <span className="text-gray-400">Peso normal</span>
              <span className={imc >= 18.5 && imc < 25 ? color : "text-gray-500"}>18.5 - 24.9</span>
            </div>
            <div className={`flex justify-between py-2 border-b border-gray-700 ${imc >= 25 && imc < 30 ? "font-bold" : ""}`}>
              <span className="text-gray-400">Sobrepeso</span>
              <span className={imc >= 25 && imc < 30 ? color : "text-gray-500"}>25.0 - 29.9</span>
            </div>
            <div className={`flex justify-between py-2 ${imc >= 30 ? "font-bold" : ""}`}>
              <span className="text-gray-400">Obesidade</span>
              <span className={imc >= 30 ? color : "text-gray-500"}>≥ 30.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;