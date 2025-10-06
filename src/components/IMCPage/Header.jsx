export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto animate-fade-in">
      <div className="bg-gray-900 text-white p-12 border-b border-gray-700 relative">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 border border-gray-600 text-xs font-medium tracking-wider text-gray-300">
            SAÚDE × PRECISÃO
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 leading-tight text-white">
            Calculadora de <span className="font-bold">IMC</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Descubra seu Índice de Massa Corporal com precisão científica
          </p>
        </div>
      </div>
    </header>
  );
}
