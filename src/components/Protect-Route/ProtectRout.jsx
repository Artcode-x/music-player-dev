import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../Context/Context'

export default function ProtectedRoute({ redirectPath = '/Login' }) {
  const { user } = useUserContext()

  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
