// import '../css/style.css'
import { useState } from 'react'
import logo from '../../img/logo.png'
import * as S from './left-nav.styles'

// const S. = styled.div``

function Ma1nNav() {
  const [visible, close] = useState(true)
  const changeState = () => close(!visible)

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      changeState()
    }
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
            <S.MenuItem>
              <S.MenuLink href="index.html">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="http://">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default Ma1nNav
