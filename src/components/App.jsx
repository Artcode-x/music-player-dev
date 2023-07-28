import { useState } from 'react'

import { GlobalStyle } from '../GlobalStyles'
import AppRoutes from '../routes'
// import NavBar from './Nav-Bar/navbar'

function App() {
  const [token, setToken] = useState({ userName: '' })

  const [login, setLogin] = useState(false)

  return (
    <>
      <AppRoutes
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
