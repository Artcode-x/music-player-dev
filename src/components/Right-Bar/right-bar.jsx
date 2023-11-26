import * as S from './right-bar.styles'
import iconRandom from '../../img/playlist01.png'
import iconRandom1 from '../../img/playlist02.png'
import iconRandom2 from '../../img/playlist03.png'
import RybkaForImport from '../Skeleton/skeleton-fish-import'
import { useUserContext } from '../Context/Context'

function RenderRbar({ loading }) {
  const { user } = useUserContext()
  console.log(user)

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName>
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
              <S.SidebarLink to="/Category/1">
                <S.SidebarImg src={iconRandom} alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink to="/Category/2">
                <S.SidebarImg src={iconRandom1} alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink to="/Category/3">
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
