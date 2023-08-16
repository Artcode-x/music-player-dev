import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../Context/Context'

export default function ProtectedRoute({ redirectPath = '/Login' }) {
  const { user } = useUserContext()

  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}

// import { Navigate, Outlet } from 'react-router-dom'

// export default function ProtectedRoute({ redirectPath = '/', login }) {
//   if (!login) {
//     return <Navigate to={redirectPath} replace />
//   }

//   return <Outlet />
// }
