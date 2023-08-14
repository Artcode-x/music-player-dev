import { useState } from 'react'

import { GlobalStyle } from '../GlobalStyles'
import AppRoutes from '../routes'
// import NavBar from './Nav-Bar/navbar'

function App() {
  const [token, setToken] = useState(false)

  const [login, setLogin] = useState(false)

  const [userReg, setUserReg] = useState('') // для страницы рег-ии
  const [newLogin, setNewLogin] = useState('') // для стран-цы логина

  return (
    <>
      <AppRoutes
        newLogin={newLogin}
        setNewLogin={setNewLogin}
        userReg={userReg}
        setUserReg={setUserReg}
        token={token}
        setToken={setToken}
        login={login}
        setLogin={setLogin}
      />
      <GlobalStyle />
    </>
  )
}
export default App
