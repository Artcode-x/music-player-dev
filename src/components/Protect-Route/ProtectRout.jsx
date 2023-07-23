import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({
  input,
  children,
  redirectPath = '/',
  // login,
}) {
  //   if (!login) {
  if (input !== 'Alex') {
    return <Navigate to={redirectPath} replace />
  }

  return children
}
