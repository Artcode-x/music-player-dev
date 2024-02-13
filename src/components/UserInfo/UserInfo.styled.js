import styled from 'styled-components'

export const SidebarPersonal = styled.div`
  grid-template-columns: 3 / 4;
  grid-template-rows: 1 / 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`

export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`
export const SidebarAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
`
