import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({
  children,
  redirectPath = '/',
  login,
}) {
  if (!login) {
    return <Navigate to={redirectPath} replace />
  }

  return children
}
