import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as S from './Registration.styled'
import { handleReg } from '../../components/Api/api'

export default function Register({ setToken, setUserReg }) {
  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [username, setUsername] = useState('')

  // const [userReg, setUserReg] = useState('')

  const navigate = useNavigate()

  function checkInputs() {
    if (!email) {
      throw new Error('Поле емейл не заполнено')
    }
    if (!password) {
      throw new Error('Поле password не заполнено')
    }
    if (!username) {
      throw new Error('Поле имени не заполнено')
    }
    if (password !== repeatPassword) {
      throw new Error('Пароли не совпадают')
    }
  }

  const handleRegister = async () => {
    try {
      checkInputs()
      const newUserReg = await handleReg({ email, password, username })
      setUserReg(newUserReg)
      //    console.log(newUserReg)

      if (newUserReg.id) {
        setToken(true)
        navigate('/')
      }
      if (!newUserReg.id) {
        if (newUserReg.username) {
          setError(newUserReg.username[0])
          return
        }
        if (newUserReg.email) {
          setError(newUserReg.email[0])
          return
        }
        if (newUserReg.password) {
          setError(newUserReg.password[0])
        }
      }
    } catch (someerror) {
      setError(someerror.message)
    }
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          <S.ModalInput
            type="username"
            name="username"
            placeholder="Имя юзера"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value)
            }}
          />
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => {
              setRepeatPassword(event.target.value)
            }}
          />
        </S.Inputs>
        {error && <S.Error>{error}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={handleRegister}>
            Зарегистрироваться
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
