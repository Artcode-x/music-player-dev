import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Registration/Registration'
import Login from './Pages/Login/Login'
import Page404 from './Pages/404/404'
import Main from './Pages/Main/Main'
import Favorites from './Pages/My-playlist/My-playlist'
import Category from './Pages/Categoty/Category'
import ProtectedRoute from './components/Protect-Route/ProtectRout'
import { LayoutPage } from './Pages/Layout-page/Layout-page'

export default function AppRoutes({
  setLogin,
  login,
  loading,
  setTimeLoading,
  isPlaying,
  setIsPlaying,
}) {
  return (
    <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login setLogin={setLogin} />} />

      <Route element={<ProtectedRoute login={login} />}>
        <Route
          path="/"
          element={
            <LayoutPage
              loading={loading}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          }
        >
          <Route
            index
            element={
              <Main
                loading={loading}
                setTimeLoading={setTimeLoading}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            }
          />
          <Route
            path="/Favorites"
            element={<Favorites setIsPlaying={setIsPlaying} />}
          />
          <Route path="/Category/:id" element={<Category />} />
        </Route>
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
