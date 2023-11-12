import { styled } from 'styled-components'

export const wrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  max-width: 1920px;
  display: grid;
  grid-template-columns: 13% 65% 22%;
  grid-template-rows: 90px 1fr;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #181818;
  color: #fff;
  padding: 0;
`
export const container = styled.div`
  display: grid;
  grid-column: 2/3;
`
