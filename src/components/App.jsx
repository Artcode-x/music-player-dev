import { useState } from 'react'
import { GlobalStyle } from '../GlobalStyles'
import AppRoutes from '../routes'
// import NavBar from './Nav-Bar/navbar'

function App() {
  const [login, setLogin] = useState(false)

  const [input, setInput] = useState(null)
  return (
    <>
      <AppRoutes
        input={input}
        setInput={setInput}
        login={login}
        setLogin={setLogin}
      />
      <GlobalStyle />
    </>
  )
}
export default App
