import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/auth";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await registerUser({ name: name.trim(), email: email.trim(), password });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light tracking-tight text-white mb-3">
            Índice<span className="font-bold">Saúde</span>
          </h1>
          <p className="text-gray-400">Crie sua conta para começar</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 shadow-xl">
          <h2 className="text-2xl font-light text-white mb-6">
            Criar nova conta
          </h2>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Nome</label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-1 block">Email</label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-1 block">Senha</label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Escolha uma senha"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-700 to-gray-600 text-white py-3 rounded-lg font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-300 shadow-lg"
              >
                Criar conta
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Já tem uma conta?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                Fazer login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
