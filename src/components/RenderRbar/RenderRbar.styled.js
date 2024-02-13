import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const MainSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 418px;
  padding: 20px 10px;
`

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SidebarItem = styled.div`
  width: auto;
  height: auto;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`
export const SidebarLink = styled(Link)`
  width: 100%;
  height: 100%;
`
export const SidebarImg = styled.img`
  max-width: 100%;
  height: auto;
`
