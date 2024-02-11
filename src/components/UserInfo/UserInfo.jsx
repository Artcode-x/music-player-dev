import { useUserContext } from '../Context/Context'
import * as S from './UserInfo.styled'
export const UserInfo = () => {
  const { user } = useUserContext()

  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName>
      <S.SidebarAvatar />
    </S.SidebarPersonal>
  )
}
