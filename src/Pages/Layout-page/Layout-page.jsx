import * as S from './Layout-page.style'
import { Outlet } from 'react-router-dom'
import Search from '../../components/Center-Block/Search'
import Ma1nNav from '../../components/Left-Nav/left-nav'
import { UserInfo } from '../../components/Right-Bar/UserInfo'
import RenderRbar from '../../components/Right-Bar/right-bar'
import { RenderBarPlayer } from '../Main/RenderBarPlayer'

export const LayoutPage = ({ loading, isPlaying, setIsPlaying }) => {
  return (
    <S.wrapper>
      {/* left part, menu */}
      <Ma1nNav />
      {/* search with logo  */}
      <Search />
      {/* email usera */}
      <UserInfo />
      <S.container>
        <Outlet />
      </S.container>
      {/* right part - 3 window playlists */}
      <RenderRbar loading={loading} />

      {/* bar below */}
      <S.playContainer>
        <RenderBarPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </S.playContainer>
    </S.wrapper>
  )
}
