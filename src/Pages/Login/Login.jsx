import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import * as S from './Login.style'

export default function Login({ setToken }) {
  const navigate = useNavigate()

  const onClick = () => {
    Cookies.set('token', 'test')

    setToken(Cookies.get())

    navigate('/', { replace: true })
  }

  return (
    <S.Title>
      <h1>Login Page</h1>
      <S.LoginButton type="button" onClick={onClick}>
        Login
      </S.LoginButton>
    </S.Title>
  )
}
// const onButtonClick = () => {
//   setLogin(true)
//   navigate('/main', { replace: true })
// }
//   return (
//     <S.Title>
//       <h1>Login Page</h1>

//       <S.LoginButton type="button" onClick={onButtonClick}>
//         Login
//       </S.LoginButton>
//     </S.Title>
//   )
// }
