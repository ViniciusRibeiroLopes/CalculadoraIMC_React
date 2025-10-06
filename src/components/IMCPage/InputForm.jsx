import { useState } from "react";

export default function InputForm({ onCalculate }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!peso || peso <= 0) {
      newErrors.peso = "Por favor, insira um peso válido";
    } else if (peso > 500) {
      newErrors.peso = "Peso deve ser menor que 500kg";
    }

    if (!altura || altura <= 0) {
      newErrors.altura = "Por favor, insira uma altura válida";
    } else if (altura > 300) {
      newErrors.altura = "Altura deve ser menor que 300cm";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const alturaMetros = parseFloat(altura) / 100;
      onCalculate(parseFloat(peso), alturaMetros);
    }
  };

  const handlePesoChange = (e) => {
    setPeso(e.target.value);
    if (errors.peso) {
      setErrors({ ...errors, peso: "" });
    }
  };

  const handleAlturaChange = (e) => {
    setAltura(e.target.value);
    if (errors.altura) {
      setErrors({ ...errors, altura: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-gray-900 border border-gray-700 p-8 animate-slide-up"
    >
      <div className="space-y-8">
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.0002 6L11.0064 9M16.5 6C17.8978 6 18.5967 6 19.1481 6.22836C19.8831 6.53284 20.4672 7.11687 20.7716 7.85195C21 8.40326 21 9.10218 21 10.5V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V10.5C3 9.10218 3 8.40326 3.22836 7.85195C3.53284 7.11687 4.11687 6.53284 4.85195 6.22836C5.40326 6 6.10218 6 7.5 6M10 17H14M10.5415 3H13.4588C14.5397 3 15.0802 3 15.4802 3.18541C16.0136 3.43262 16.4112 3.90199 16.5674 4.46878C16.6845 4.89387 16.5957 5.42698 16.418 6.4932C16.2862 7.28376 16.2203 7.67904 16.0449 7.98778C15.8111 8.39944 15.4388 8.71481 14.9943 8.87778C14.661 9 14.2602 9 13.4588 9H10.5415C9.74006 9 9.33933 9 9.00596 8.87778C8.56146 8.71481 8.18918 8.39944 7.95536 7.98778C7.77999 7.67904 7.71411 7.28376 7.58235 6.4932C7.40465 5.42698 7.3158 4.89387 7.43291 4.46878C7.58906 3.90199 7.98669 3.43262 8.52009 3.18541C8.92014 3 9.46061 3 10.5415 3Z"
              />
            </svg>
            <label className="text-gray-300 text-sm font-medium tracking-wider uppercase">
              Peso
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              value={peso}
              onChange={handlePesoChange}
              className={`w-full px-4 py-4 pr-12 bg-gray-800 border-2 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors ${
                errors.peso
                  ? "border-red-500"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="text-gray-500 font-medium text-sm">kg</span>
            </div>
          </div>
          {errors.peso && (
            <p className="text-red-400 text-xs mt-2 animate-slide-up">
              {errors.peso}
            </p>
          )}
        </div>

        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M315.429,146.286h-4.937c8.722-9.719,14.08-22.51,14.08-36.571c0-30.254-24.603-54.857-54.857-54.857s-54.857,24.603-54.857,54.857c0,14.062,5.358,26.853,14.08,36.571H224c-25.207,0-45.714,20.507-45.714,45.714v128c0,5.047,4.087,9.143,9.143,9.143h27.429v173.714c0,5.047,4.087,9.143,9.143,9.143h45.714h9.143c25.207,0,45.714-20.507,45.714-45.714V329.143H352c5.056,0,9.143-4.096,9.143-9.143V192C361.143,166.793,340.635,146.286,315.429,146.286z M269.714,73.143c20.169,0,36.571,16.402,36.571,36.571s-16.402,36.571-36.571,36.571s-36.571-16.402-36.571-36.571S249.545,73.143,269.714,73.143z M275.319,164.571l-5.605,16.805l-5.605-16.805H275.319z M342.857,310.857h-18.286V192h-18.286v274.286c0,15.122-12.306,27.429-27.429,27.429V329.143h-18.286v164.571h-27.429V192h-18.286v118.857h-18.286V192c0-15.122,12.306-27.429,27.429-27.429h20.846l16.201,48.603c1.243,3.739,4.727,6.254,8.667,6.254s7.424-2.514,8.667-6.254l16.201-48.603h20.846c15.122,0,27.429,12.306,27.429,27.429V310.857z" />
              <path d="M150.857,0H59.429c-5.056,0-9.143,4.096-9.143,9.143v493.714c0,5.047,4.087,9.143,9.143,9.143h91.429c5.056,0,9.143-4.096,9.143-9.143V9.143C160,4.096,155.913,0,150.857,0z M141.714,54.857h-18.286v18.286h18.286v36.571h-36.571V128h36.571v36.571h-18.286v18.286h18.286v36.571h-36.571v18.286h36.571v36.571h-18.286v18.286h18.286v36.571h-36.571v18.286h36.571V384h-18.286v18.286h18.286v36.571h-36.571v18.286h36.571v36.571H68.571V18.286h73.143V54.857z" />
            </svg>
            <label className="text-gray-300 text-sm font-medium tracking-wider uppercase">
              Altura
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              step="1"
              value={altura}
              onChange={handleAlturaChange}
              className={`w-full px-4 py-4 pr-12 bg-gray-800 border-2 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors ${
                errors.altura
                  ? "border-red-500"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="text-gray-500 font-medium text-sm">cm</span>
            </div>
          </div>
          {errors.altura && (
            <p className="text-red-400 text-xs mt-2 animate-slide-up">
              {errors.altura}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="group relative w-full bg-gray-700 text-white font-medium py-4 overflow-hidden hover:bg-gray-600 transition-colors"
        >
          <span className="relative z-10">Calcular IMC</span>
          <div className="absolute inset-0 bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </form>
  );
}
