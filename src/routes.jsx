import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Registration/Registration'
import Login from './Pages/Login/Login'
import Page404 from './Pages/404/404'
import Main from './Pages/Main/Main'
import Favorites from './Pages/My-playlist/My-playlist'
import Category from './Pages/Categoty/Category'
import ProtectedRoute from './components/Protect-Route/ProtectRout'

export default function AppRoutes({
  token,
  setToken,
  setLogin,
  login,
  userReg,
  setUserReg,
}) {
  return (
    <Routes>
      <Route
        path="/Register"
        element={<Register setUserReg={setUserReg} setToken={setToken} />}
      />
      <Route
        path="/Login"
        element={<Login setToken={setToken} setLogin={setLogin} />}
      />

      <Route element={<ProtectedRoute token={token} login={login} />}>
        <Route path="/" element={<Main userReg={userReg} />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Category/:id" element={<Category />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
