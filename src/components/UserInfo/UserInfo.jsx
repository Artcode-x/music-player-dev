import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../Context/Context'
import * as S from './UserInfo.styled'
export const UserInfo = () => {
  const { user } = useUserContext()
  const { toggleLogout } = useUserContext()
  const navigate = useNavigate()

  const handleLogOut = () => {
    toggleLogout()
    navigate('/Login')
    localStorage.clear()
  }

  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName>
      <S.SidebarAvatar>
        <svg
          onClick={handleLogOut}
          alt="logout"
          width="40"
          height="40"
          viewBox="0 0 40.5 40.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.6711 16.046V14.7419C25.6711 13.2276 24.4435 12 22.9292 12H16.7419C15.2276 12 14 13.2276 14 14.7419V26.0645C14 27.5788 15.2276 28.8065 16.7419 28.8065H22.9292C24.4435 28.8065 25.6711 27.5788 25.6711 26.0645V24.6048M18.3572 20.3254H33.2963M33.2963 20.3254L30.1062 23.5155M33.2963 20.3254L30.1062 17.1353"
            stroke="white"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          />
          <circle cx="20" cy="20" r="19.5" stroke="white" />
        </svg>
      </S.SidebarAvatar>
    </S.SidebarPersonal>
  )
}
