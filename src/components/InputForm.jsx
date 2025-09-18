import { useState } from "react";

export default function InputForm({ onCalculate }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (peso && altura) {
      onCalculate(parseFloat(peso), parseFloat(altura));
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md"
    >
      <input
        type="number"
        step="0.01"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        step="0.01"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        className="border p-2 rounded"
      />
      <button 
        type="submit" 
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Calcular
      </button>
    </form>
  );
}
