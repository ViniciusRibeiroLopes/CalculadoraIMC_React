export default function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="bg-blue-800 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white opacity-10 rounded-full"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
              <svg
                className="w-10 h-10 text-white"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Calculadora de IMC
          </h1>
          <p className="text-blue-100 text-sm md:text-base">
            Descubra seu Índice de Massa Corporal
          </p>
        </div>
      </div>
    </header>
  );
}
