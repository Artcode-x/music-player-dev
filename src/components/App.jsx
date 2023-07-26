import { useState } from 'react'
import Cookies from 'js-cookie'
import { GlobalStyle } from '../GlobalStyles'
import AppRoutes from '../routes'
// import NavBar from './Nav-Bar/navbar'

function App() {
  document.cookie = 'user=token'
  const token = Cookies.get()

  // alert(document.cookie)

  const [login, setLogin] = useState(false)

  return (
    <>
      <AppRoutes token={token} login={login} setLogin={setLogin} />
      <GlobalStyle />
    </>
  )
}
export default App
