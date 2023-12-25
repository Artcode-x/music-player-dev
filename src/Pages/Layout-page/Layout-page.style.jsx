import { styled } from 'styled-components'

export const wrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  max-width: 1920px;
  display: grid;
  /* grid-template-columns: 13% 65% 22%; */
  grid-template-columns: 16% 60% 22%;
  grid-template-rows: 90px 1fr;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #181818;
  color: #fff;
  padding: 0;
  padding-right: 20px;
`
export const container = styled.div`
  display: grid;
  grid-column: 2/3;
`
export const playContainer = styled.div`
  position: fixed;
  width: 1920px;
  background: rgba(28, 28, 28, 0.5);
  bottom: 0;
`
