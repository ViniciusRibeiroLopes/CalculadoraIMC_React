import { useState } from "react";
import "./App.css";

export default function App() {
  const [imc, setImc] = useState(null);

  const calcularIMC = (peso, altura) => {
    const resultado = peso / (altura * altura);
    setImc(resultado);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-6 bg-gray-50 p-6">
      <Header />
      <InputForm onCalculate={calcularIMC} />
      <Result imc={imc} />
    </div>
  );
}
