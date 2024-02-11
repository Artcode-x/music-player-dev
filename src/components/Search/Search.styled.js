import styled from 'styled-components'

export const CenterblockSearch = styled.div`
  grid-template-columns: 2/3;
  grid-template-rows: 1/2;
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`

export const SearchText = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
