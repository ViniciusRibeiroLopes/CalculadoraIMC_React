export default function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="bg-gray-800 text-white p-8 rounded-2xl card-shadow relative overflow-hidden border border-gray-700">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-700 opacity-10 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gray-700 opacity-10 rounded-full"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-800 p-3 rounded-full border border-gray-700">
              <svg
                className="w-10 h-10 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-100">
            Calculadora de IMC
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Descubra seu Índice de Massa Corporal
          </p>
        </div>
      </div>
    </header>
  );
}
