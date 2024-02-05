import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as S from './Login.style'
import { Login, getToken } from '../../components/Api/api'
import { useUserContext } from '../../components/Context/Context'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/actions/creators/creators'
import logo from '../../img/logo-black.png'

export default function AuthPage() {
  const { toggleUser } = useUserContext()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const dispatch = useDispatch()

  const getLoginCheck = (newUser) => {
    toggleUser(newUser) // в ф-ию toggleUser передаем ответ с апи
    navigate('/')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setisLoading] = useState(false) // Создаем состояние для активности/неактивности кнопки логина

  function checkInputs() {
    if (!email || !password) {
      if (!email) throw new Error('Email поле пусто')
      if (!password) throw new Error('password поле пусто')
    }
  }

  const handleLogin = async () => {
    try {
      checkInputs()
      setisLoading(true) // делаем кнопку неактивной до получения ответа с апи, затем в блоке finally меняем снова ее состояние на активное, переключая на false
      const todoNewLogin = await Login({ email, password }) // передаем в ф-ию логин в api наши емейл и пароль с инпутов(которые записаны в состояния)

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
      // передаем в getToken емейл и пасс /?
      // после того как получим ответ, записываем его в localstorage
      const newToken = await getToken({ email, password })
      console.log(newToken)
      console.log(newToken.detail)
      setError(newToken.detail)
      // в localStorage в переменную tokenRefresh сохраняем ответ от апи: newToken.refresh

      //! tokenAccess нужен для всего взаимодействия пользователя с кнопками - добавить лайк/убрать/перейти на все мои треки(лайкнутые)
      //! он генерится и в backend-e определяется конкр-ый user
      //! когда tokenAccess протухает, он обновляется tokenRefresh
      // setItem - записывает в localStorage/ далее преобразование в строку токена
      localStorage.setItem('tokenRefresh', JSON.stringify(newToken.refresh))
      localStorage.setItem('tokenAccess', JSON.stringify(newToken.access))
      //! посмотреть эти токены можно после логина в консоли/application

      //! Почему сохраняем в localStorage, а не в redux - Нам понадобится обновленный токен access, чтобы запустить заново api. Но если бы tokenRefresh/tokenAccess хранили в redux, мы не смогли бы обновить tokenAccess, а потом заново запустить апи.

      //! Особенности redux - ему нужно сначала завершить весь код, а только потом он обновляет redux
      //! А в данном случае, нужно не завершая весь код обновить апи.

      dispatch(addUser(todoNewLogin))
      getLoginCheck(todoNewLogin)
    } catch (serror) {
      setError(serror.message)
    } finally {
      setisLoading(false)
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
            <S.ModalLogoImage src={logo} alt="logo" />
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
          <S.PrimaryButton disabled={isLoading} onClick={handleLogin}>
            Войти
          </S.PrimaryButton>
          <Link to="/register">
            <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
