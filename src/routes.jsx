import { Routes, Route } from 'react-router-dom'
import Register from './pages/Registration/Registration'
import Login from './pages/Login/Login'
import Page404 from './pages/404/404'
import Main from './pages/Main/Main'
import Favorites from './pages/MyPlaylist/MyPlaylist'
import Category from './pages/Categoty/Category'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { LayoutPage } from './pages/LayoutPage/LayoutPage'

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
