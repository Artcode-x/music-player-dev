import { useUserContext } from '../Context/Context'
import * as S from './right-bar.styles'
export const UserInfo = () => {
  const { user } = useUserContext()
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName>
      <S.SidebarAvatar />
    </S.SidebarPersonal>
  )
}
