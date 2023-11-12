// import '../css/style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../img/logo.png'
import * as S from './left-nav.styles'
import { useUserContext } from '../Context/Context'
// const S. = styled.div``
function Ma1nNav() {
  const [visible, close] = useState(true)
  const changeState = () => close(!visible)

  const navigate = useNavigate()

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      changeState()
    }
  }

  const { toggleLogout } = useUserContext()

  const handleExit = () => {
    toggleLogout()
    navigate('/Login') // делаем редирект на страницу логина
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src={logo} alt="logo" />
      </S.NavLogo>
      <S.NavBurger
        role="button"
        tabIndex={0}
        onKeyDown={onEnter}
        onClick={changeState}
      >
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>

      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem fishechka="stroka">
              <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem fishechka="stroka">
              <S.MenuLink to="/Favorites">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem fishechka="stroka">
              <S.MenuExit onClick={handleExit}>Выйти</S.MenuExit>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default Ma1nNav
