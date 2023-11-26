import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as S from './Registration.styled'
import { handleReg } from '../../components/Api/api'
import { useUserContext } from '../../components/Context/Context'

export default function Register() {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [username, setUsername] = useState('')
  const [buttonDisable, setButtonDisable] = useState(false) // на время запроса кнопка зарег блокируется, для этого создаем это сост-ие

  const navigate = useNavigate()
  const { toggleUser } = useUserContext()

  const getRegisterCheck = (newUser) => {
    toggleUser(newUser) // в ф-ию toggleUser передаем ответ с апи
    navigate('/')
  }

  function checkInputs() {
    if (!email) throw new Error('Поле емейл не заполнено')
    if (!password) throw new Error('Поле password не заполнено')
    if (!username) throw new Error('Поле имени не заполнено')
    if (password !== repeatPassword) throw new Error('Пароли не совпадают')
  }

  const handleRegister = async () => {
    try {
      checkInputs()
      setButtonDisable(true) // делаем кнопку неактивной до ответа с апи
      const newUserReg = await handleReg({ email, password, username })

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
      getRegisterCheck(newUserReg)
    } catch (someerror) {
      setError(someerror.message)
    } finally {
      setButtonDisable(false) // делаем кнопку активной
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
          <S.PrimaryButton disabled={buttonDisable} onClick={handleRegister}>
            Зарегистрироваться
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
