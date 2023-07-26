import { styled } from 'styled-components'

export const Title = styled.div`
  text-align: center;
  margin-top: 35%;
`

export const LoginButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 16px 200px;
  text-align: center;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`
export const styledTest = styled.div`
  background: red;
`
