import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await loginUser(email.trim(), password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">Entrar</h2>
        {error && <div className="text-red-400 mb-4">{error}</div>}
        <form onSubmit={submit} className="space-y-4">
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
              Entrar
            </button>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-sm text-gray-400 hover:text-white"
            >
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
