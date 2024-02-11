import * as S from './RenderRbar.styled'
import iconRandom from '../../img/playlist01.png'
import iconRandom1 from '../../img/playlist02.png'
import iconRandom2 from '../../img/playlist03.png'
import SkeletSizeTempl from '../SkeletSizeTempl/SkeletSizeTempl'
import { useUserContext } from '../Context/Context'

function RenderRbar({ loading }) {
  const { user } = useUserContext()

  return (
    <S.MainSidebar>
      {loading ? (
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarItem>
              <SkeletSizeTempl IamWidth="250px" IamHeight="150px" />
            </S.SidebarItem>
            <S.SidebarItem>
              <SkeletSizeTempl IamWidth="250px" IamHeight="150px" />
            </S.SidebarItem>
            <S.SidebarItem>
              <SkeletSizeTempl IamWidth="250px" IamHeight="150px" />
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
