import { styled, keyframes, css } from 'styled-components'

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const PlaylistTitleCol01 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;

  width: 447px;
`

export const PlaylistTitleCol02 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;

  width: 321px;
`

export const PlaylistTitleCol03 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;

  width: 245px;
`

export const PlaylistTitleCol04 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;

  width: 60px;
  text-align: end;
`

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const Filterlist = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-top: 10px;
  width: 248px;
  height: 305px;
  padding: 34px;
  background-color: #313131;
  overflow: hidden;
  border-radius: 12px;
  margin-left: 90px;
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
export const filterListyear = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-top: 10px;

  padding: 34px;
  background-color: #313131;
  overflow: hidden;
  border-radius: 12px;
  margin-left: 90px;
  width: 403px;
  height: 92px;
`
export const MainCenterblock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`
export const CenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
export const CenterblockFilter = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;

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
export const FilterButtonArtist = styled(FilterButton)`
  color: ${(props) =>
    props.propsKeyVisible === 'OpenListArtist' ? '#ad61ff' : null};
  border-color: ${(props) =>
    props.propsKeyVisible === 'OpenListArtist' ? '#ad61ff' : null};
`

export const FilterButtonYear = styled(FilterButton)`
  color: ${(props) =>
    props.propsKeyVisible === 'OpenYear' ? '#ad61ff' : null};
  border-color: ${(props) =>
    props.propsKeyVisible === 'OpenYear' ? '#ad61ff' : null};
`

// export const FilterButtonYear = styled.div`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   border: 1px solid #ffffff;
//   border-radius: 60px;
//   padding: 6px 20px;

//   color: ${(props) =>
//     props.propsKeyVisible === 'OpenYear' ? '#ad61ff' : null};
//   border-color: ${(props) =>
//     props.propsKeyVisible === 'OpenYear' ? '#ad61ff' : null};

//   &:not(:last-child) {
//     margin-right: 10px;
//   }
//   &:hover {
//     border-color: #d9b6ff;
//     color: #d9b6ff;
//     cursor: pointer;
//   }
//   &:active {
//     border-color: #ad61ff;
//     color: #ad61ff;
//     cursor: pointer;
//   }
// `
export const FilterButtonGenre = styled(FilterButton)`
  color: ${(props) =>
    props.propsKeyVisible === 'OpenGenre' ? '#ad61ff' : null};
  border-color: ${(props) =>
    props.propsKeyVisible === 'OpenGenre' ? '#ad61ff' : null};
`
// export const FilterButtonGenre = styled.div`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   border: 1px solid #ffffff;
//   border-radius: 60px;
//   padding: 6px 20px;

//   color: ${(props) =>
//     props.propsKeyVisible === 'OpenGenre' ? '#ad61ff' : null};
//   border-color: ${(props) =>
//     props.propsKeyVisible === 'OpenGenre' ? '#ad61ff' : null};

//   &:not(:last-child) {
//     margin-right: 10px;
//   }
//   &:hover {
//     border-color: #d9b6ff;
//     color: #d9b6ff;
//     cursor: pointer;
//   }
//   &:active {
//     border-color: #ad61ff;
//     color: #ad61ff;
//     cursor: pointer;
//   }
// `
export const ContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
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

  /* &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #4b4949;
  } */
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
export const bubbleOut = keyframes`
  0%, to {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
`
export const PlayingDot = styled.div`
  // Тут стили, если трек проигрывается
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

export const PlaylistTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  width: 447px;
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
  width: 321px;
  display: flex;
  justify-content: flex-start;
`
export const TrackAlbum = styled.div`
  width: 245px;
`

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackTitleText = styled.div``
export const TrackTime = styled.div``

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
