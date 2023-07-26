import { useNavigate } from 'react-router-dom'
import * as S from './Login.style'

export default function Login({ token }) {
  const navigate = useNavigate()

  const onClick = () => {
    document.cookie = 'user=token'
    const user = token
    console.log(user)
    if (user === token) {
      navigate('/', { replace: true })
    }
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
