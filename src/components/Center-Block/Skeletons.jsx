import * as S from './center-block.styles'
import Skeleton from '../Skeleton/Skeleton'

import sprite from '../../img/icon/sprite.svg'
import ContentTitlePlayList from './Title-playlist'

export default function Skeletons() {
  return (
    <S.centerblockContent>
      <ContentTitlePlayList />
      <S.ContentPlaylist>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <Skeleton IamWidth="51px" IamHeight="51px" />
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <Skeleton IamWidth="356px" IamHeight="19px" />
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <Skeleton IamWidth="271px" IamHeight="19px" />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <Skeleton IamWidth="305px" IamHeight="19px" />
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref={`${sprite}#icon-like`} />
              </S.TrackTimeSvg>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      </S.ContentPlaylist>
    </S.centerblockContent>
  )
}
