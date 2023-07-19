import * as S from './right-bar.styles'
import iconRandom from '../../img/playlist01.png'
import iconRandom1 from '../../img/playlist02.png'
import iconRandom2 from '../../img/playlist03.png'
import RybkaForImport from '../Skeleton/skeleton-fish-import'

function RenderRbar({ loading }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      {loading ? (
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarItem>
              <RybkaForImport IamWidth="250px" IamHeight="150px" />
            </S.SidebarItem>
            <S.SidebarItem>
              <RybkaForImport IamWidth="250px" IamHeight="150px" />
            </S.SidebarItem>
            <S.SidebarItem>
              <RybkaForImport IamWidth="250px" IamHeight="150px" />
            </S.SidebarItem>
          </S.SidebarList>
        </S.SidebarBlock>
      ) : (
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarItem>
              <S.SidebarLink href="index.html">
                <S.SidebarImg src={iconRandom} alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="index.html">
                <S.SidebarImg src={iconRandom1} alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="index.html">
                <S.SidebarImg src={iconRandom2} alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          </S.SidebarList>
        </S.SidebarBlock>
      )}
    </S.MainSidebar>
  )
}

export default RenderRbar