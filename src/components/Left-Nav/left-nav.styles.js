// import '../css/style.css'

import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`
export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`
export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`

export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  &:hover {
    text-decoration: ${(props) =>
      props.fishechka === 'stroka' ? 'underline' : null};
  }
`

export const MenuLink = styled(NavLink)`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

export const MenuExit = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
// export const activeClassName = 'underline'
// export const MenuLink2 = styled(MenuLink)`
// className={{ isActive }} => cn(MenuLink,{[activeClassName]:isActive})
// `
// export const  = styled.div``
