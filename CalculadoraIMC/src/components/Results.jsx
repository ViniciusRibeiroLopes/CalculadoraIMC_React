export default function Result({ imc }) {
  if (!imc) return null;

  let categoria = "";
  if (imc < 18.5) categoria = "Abaixo do peso";
  else if (imc < 25) categoria = "Peso normal";
  else if (imc < 30) categoria = "Sobrepeso";
  else categoria = "Obesidade";

  return (
    <div className="mt-6 p-4 bg-green-100 rounded-lg shadow-md text-center">
      <p className="text-xl font-semibold">Seu IMC: {imc.toFixed(2)}</p>
      <p className="text-lg">Classificação: {categoria}</p>
    </div>
  );
}
