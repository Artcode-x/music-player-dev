import * as S from './Layout-page.style'
import { Outlet } from 'react-router-dom'
import RenderBar from '../../components/Bar-Below/BarBelow'
import Search from '../../components/Center-Block/Search'
import Ma1nNav from '../../components/Left-Nav/left-nav'
import { UserInfo } from '../../components/Right-Bar/UserInfo'
import RenderRbar from '../../components/Right-Bar/right-bar'
import Zagolovok from '../../components/Center-Block/Zagolovok'
import Category from '../Categoty/Category'

export const LayoutPage = ({ loading }) => {
  return (
    <S.wrapper>
      {/* left part, menu */}
      <Ma1nNav />
      {/* search with logo  */}
      <Search />
      {/* email usera */}
      <UserInfo />
      <Zagolovok />
      <Outlet />

      {/* right part - 3 window playlists */}
      <RenderRbar loading={loading} />

      {/* bar below */}
      {/* <RenderBar /> */}
    </S.wrapper>
  )
}
