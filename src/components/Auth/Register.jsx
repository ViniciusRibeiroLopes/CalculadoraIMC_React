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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">Criar Conta</h2>
        {error && <div className="text-red-400 mb-4">{error}</div>}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-300">Nome</label>
            <input
              className="w-full mt-1 px-3 py-2 rounded bg-gray-900 border border-gray-700 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              className="w-full mt-1 px-3 py-2 rounded bg-gray-900 border border-gray-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Senha</label>
            <input
              className="w-full mt-1 px-3 py-2 rounded bg-gray-900 border border-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-gray-700 text-white rounded">
              Criar
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm text-gray-400 hover:text-white"
            >
              Já tenho conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
