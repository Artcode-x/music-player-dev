import styled from 'styled-components'

export const MainCenterblock = styled.div`
  width: auto;
  box-sizing: border-box;
  flex-grow: 3;
  /* padding: 20px 40px 20px 111px; it was */
  padding: 20px 0;
`

export const centerblockContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  box-sizing: border-box;
  height: 80%;
  list-style: none;
  width: 100%;
  scrollbar-color: white, gray;

  &::-webkit-scrollbar {
    background-color: #313131;
    width: 10px;
    border-radius: 4px;
    overflow-y: auto;
  }
`

export const ContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
`

export const PlaylistItem = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 12px;
  flex-direction: column;
  gap: 12px;
`

export const ErrorItem = styled.div`
  color: coral;
  text-align: center;
  font-size: xx-large;
`
