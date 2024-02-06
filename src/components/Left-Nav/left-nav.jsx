// import '../css/style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../img/logo.png'
import * as S from './left-nav.styles'
import { useUserContext } from '../Context/Context'
import { getFavoriteTracks, refreshToken } from '../Api/api'
import { useDispatch } from 'react-redux'
import { addFavoriteTracks } from '../../store/actions/creators/creators'

function Ma1nNav() {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(false)

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

  const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'))
  const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'))

  const handleFavorite = async () => {
    try {
      setDisabled(true) // выкл кноп

      const likesTrack = await getFavoriteTracks(tokenAccess)
      console.log(likesTrack)
      dispatch(addFavoriteTracks(likesTrack))

      navigate('/Favorites')
      // dispatch(addAllandFav('Favorites'))
    } catch (error) {
      if (error.message === 'Токен протух') {
        console.log(tokenAccess)
        const newAccess = await refreshToken(tokenRefresh)
        localStorage.setItem('tokenAccess', JSON.stringify(newAccess.access))
        console.log(newAccess)
        const likesTrack = await getFavoriteTracks(newAccess.access)
        dispatch(addFavoriteTracks(likesTrack))
        navigate('/Favorites')
      }
    } finally {
      setDisabled(false)
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
            <S.MenuItem fishechka="stroka">
              <S.MenuLink1 to="/">Главное</S.MenuLink1>
            </S.MenuItem>
            <S.MenuItem fishechka="stroka">
              <S.MenuLink disabled={disabled} onClick={handleFavorite}>
                Мой плейлист
              </S.MenuLink>
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
