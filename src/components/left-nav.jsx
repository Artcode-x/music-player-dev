import '../css/style.css'
import logo from '../img/logo.png'

const navLogo = (
  <div className="nav__logo logo">
    <img className="logo__image" src={logo} alt="logo" />
  </div>
)

const navBurger = (
  <div className="nav__burger burger">
    <span className="burger__line" />
    <span className="burger__line" />
    <span className="burger__line" />
  </div>
)

const navMenu = (
  <div className="nav__menu menu">
    <ul className="menu__list">
      <li className="menu__item">
        <a href="index.html" className="menu__link">
          Главное
        </a>
      </li>
      <li className="menu__item">
        <a href="http://" className="menu__link">
          Мой плейлист
        </a>
      </li>
      <li className="menu__item">
        <a href="http://" className="menu__link">
          Войти
        </a>
      </li>
    </ul>
  </div>
)

function Ma1nNav() {
  return (
    <nav className="main__nav nav">
      {navLogo}
      {navBurger}
      {navMenu}
    </nav>
  )
}

export default Ma1nNav
