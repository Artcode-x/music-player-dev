import { Routes, Route } from 'react-router-dom'
import Registration from './Pages/Registration/Registration'
import Login from './Pages/Login/Login'
import Page404 from './Pages/404/404'
import Main from './Pages/Main/Main-izApp'
import MyPlaylist from './Pages/My-playlist/My-playlist'
import Category from './Pages/Categoty/Category'
import ProtectedRoute from './components/Protect-Route/ProtectRout'

export default function AppRoutes({ token, setLogin, login }) {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Login token={token} setLogin={setLogin} />} />

      <Route element={<ProtectedRoute token={token} login={login} />}>
        <Route path="/main" element={<Main />} />
        <Route path="/MyPlaylist" element={<MyPlaylist />} />
        <Route path="/Category/:id" element={<Category />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
