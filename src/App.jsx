import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Result from "./components/Result";

export default function App() {
  const [imc, setImc] = useState(null);

  const calcularIMC = (peso, altura) => {
    const resultado = peso / (altura * altura);
    setImc(resultado);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <Header />

          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full max-w-6xl">
            <div className="flex-1 w-full">
              <InputForm onCalculate={calcularIMC} />
            </div>

            <div className="flex-1 w-full">
              <Result imc={imc} />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center text-gray-600 text-sm animate-fade-in">
            <p className="mb-2">
              💡 <span className="font-medium">Dica:</span> O IMC é apenas um
              indicador. Consulte sempre um profissional de saúde.
            </p>
            <p className="text-xs text-gray-500">
              © 2025 Calculadora de IMC | Desenvolvido por Vinícius Ribeiro Lopes
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
