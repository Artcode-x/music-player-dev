import { useMemo, useState } from 'react'

import { GlobalStyle } from '../GlobalStyles'
import AppRoutes from '../routes'
import { UserContext } from './Context/Context'
// import NavBar from './Nav-Bar/navbar'

function App() {
  const [login, setLogin] = useState(false)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))) // в фор-те json записать в нач сост-ие user, то что хран-ся в localstorage под ключом 'user' /

  const toggleLogout = () => {
    // ф-ия для выхода из системы, также помещаем ее в valueTest/useMemo чтобы могли получить ее в left-bar через контекст
    setUser(false) // меняем сост user / разлог
    localStorage.clear() // очищаем localstorage браузера
  }

  const toggleUser = (newUser) => {
    // toggleUser - ф-ия которая принимает в себя нового пользователя, который передается туда при логине либо при регистрации
    setUser(newUser) // записываем нового польз в стейт - переменную user (запишется обьект с данными польз при входе или регистрации)
    localStorage.setItem('user', JSON.stringify(newUser)) // Записываем в localstorage текущего юзера. Если браузер не закрыть, в localstorage останется этот юзер. И при рендере app туда автоматически запишется этот юзер
  }

  const valueTest = useMemo(
    () => ({
      // подпись на измен-ия user
      user,
      toggleUser,
      toggleLogout,
    }),
    [user]
  )

  return (
    <UserContext.Provider value={valueTest}>
      <AppRoutes login={login} setLogin={setLogin} />
      <GlobalStyle />
    </UserContext.Provider>
  )
}
export default App
