import { Navigate, useLocation } from "react-router-dom";
import { getCurrentUser } from "../../utils/auth";

export default function ProtectedRoute({ children }) {
  const user = getCurrentUser();
  const location = useLocation();

  if (!user) {
    // Salva a rota que o usuário tentou acessar
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
