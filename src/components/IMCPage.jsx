import { useState } from "react";
import Header from "./IMCPage/Header";
import InfoSection from "./IMCPage/InfoSections";
import InputForm from "./IMCPage/InputForm";
import Result from "./IMCPage/Result";
import Footer from "./IMCPage/Footer";

export default function App() {
  const [imc, setImc] = useState(null);

  const calcularIMC = (peso, altura) => {
    const resultado = peso / (altura * altura);
    setImc(resultado);
  };

  return (
    <div className="min-h-screen bg-gray-900">
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

          <div className="flex-1 w-full">
            <InfoSection />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
