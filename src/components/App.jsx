import { useState } from 'react'

import { GlobalStyle } from '../GlobalStyles'
import AppRoutes from '../routes'
// import NavBar from './Nav-Bar/navbar'

function App() {
  const [token, setToken] = useState(false)

  const [login, setLogin] = useState(false)

  const [userReg, setUserReg] = useState('')

  return (
    <>
      <AppRoutes
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
