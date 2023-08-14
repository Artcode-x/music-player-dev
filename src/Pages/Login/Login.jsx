import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as S from './Login.style'
import { Login } from '../../components/Api/api'

export default function AuthPage({ setNewLogin, setToken }) {
  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function checkInputs() {
    if (!email || !password) {
      if (!email) throw new Error('Email поле пусто')
      if (!password) throw new Error('password поле пусто')
    }
  }

  const handleLogin = async () => {
    try {
      checkInputs()
      const todoNewLogin = await Login({ email, password }) // передаем в ф-ию логин в api наши емейл и пароль с инпутов(которые записаны в состояния)
      setNewLogin(todoNewLogin)

      if (todoNewLogin.id) {
        setToken(true)
        navigate('/')
      }

      if (!todoNewLogin.id) {
        // обработка 400 ошибки и 401
        if (todoNewLogin.email) {
          setError(todoNewLogin.email[0])
          return
        }
        if (todoNewLogin.password) {
          setError(todoNewLogin.password[0])
          return
        }
        if (todoNewLogin.detail) setError(todoNewLogin.detail[0])
      }
    } catch (serror) {
      setError(serror.message)
    }
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [email, password])

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
        </S.Inputs>
        {error && <S.Error>{error}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={handleLogin}>Войти</S.PrimaryButton>
          <Link to="/register">
            <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
