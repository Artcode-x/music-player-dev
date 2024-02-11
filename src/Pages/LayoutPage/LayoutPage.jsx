import * as S from './LayoutPage.styled'
import { Outlet } from 'react-router-dom'
import Search from '../../components/Search/Search'
import LeftMenu from '../../components/LeftMenu/LeftMenu'
import { UserInfo } from '../../components/UserInfo/UserInfo'
import RenderRbar from '../../components/RenderRbar/RenderRbar'
import { RenderBarPlayer } from '../../components/RenderBarPlayer/RenderBarPlayer'

export const LayoutPage = ({ loading, isPlaying, setIsPlaying }) => {
  return (
    <S.wrapper>
      {/* left part, menu */}
      <LeftMenu />
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
