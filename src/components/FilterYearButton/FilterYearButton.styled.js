import styled from 'styled-components'

export const YearFilter = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-top: 0px;
  width: 248px;
  height: 305px;
  padding: 34px;
  background-color: #313131;
  overflow: hidden;
  border-radius: 12px;
  margin-left: 255px;
`

export const FilterListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-sizing: border-box;
  height: 241px;
  list-style: none;
  overflow-y: scroll;
  scrollbar-color: white, gray;

  &::-webkit-scrollbar {
    background-color: #313131;
    width: 4px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #4b4949;
  }
`

export const filterListtext = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
    color: #b672ff;
    cursor: pointer;
  }
`
