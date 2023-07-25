import { useState } from 'react'
import { GlobalStyle } from '../GlobalStyles'
import AppRoutes from '../routes'
// import NavBar from './Nav-Bar/navbar'

function App() {
  const [login, setLogin] = useState(false)

  return (
    <>
      <AppRoutes login={login} setLogin={setLogin} />
      <GlobalStyle />
    </>
  )
}
export default App
