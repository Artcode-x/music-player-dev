import styled from 'styled-components'

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

export const PlaylistTrack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    text-decoration: underline;
    color: coral;
    cursor: pointer;
    background: coral;
    opacity: 0.6;
  }
`

export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
`
export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`

export const TrackAuthor = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
`
export const TrackAlbum = styled.div`
  width: 20%;
`

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`

export const TrackTitleText = styled.div``

export const TrackTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 10%;
`
