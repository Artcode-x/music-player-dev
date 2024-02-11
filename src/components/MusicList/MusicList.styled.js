import { styled, keyframes, css } from 'styled-components'

export const bubbleOut = keyframes`
  0%, to {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
`
export const PlayingDot = styled.div`
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
  animation: ${bubbleOut} 0.6s ease-in-out infinite both;
  ${(props) =>
    !props.playPause &&
    css`
      animation: none;
    `}
`

export const ContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-color: #423189 gray;
  // scrollbar-color: #fbceb1 gray;
  //scrollbar-color: #FFCA86 gray;
  scrollbar-width: thin;
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

export const TrackLike = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackTitleText = styled.div``

export const TrackTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 10%;
`

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
