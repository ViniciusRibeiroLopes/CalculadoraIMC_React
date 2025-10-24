import { useEffect, useState } from "react";
import { getLoggedUsers } from "../../utils/auth";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getLoggedUsers());
    const handler = () => setUsers(getLoggedUsers());
    window.addEventListener("authChange", handler);
    return () => window.removeEventListener("authChange", handler);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12">
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6">Usuários logados</h2>
        {users.length === 0 ? (
          <div className="text-gray-400">Nenhum usuário logado</div>
        ) : (
          <ul className="space-y-3">
            {users.map((u) => (
              <li
                key={u.id}
                className="flex items-center justify-between border-b border-gray-700 pb-3"
              >
                <div>
                  <div className="text-white font-medium">{u.name}</div>
                  <div className="text-sm text-gray-400">{u.email}</div>
                </div>
                <div className="text-sm text-gray-400">
                  Último login:{" "}
                  {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "-"}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
