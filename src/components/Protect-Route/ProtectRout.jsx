import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ redirectPath = '/', login }) {
  if (!login) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
