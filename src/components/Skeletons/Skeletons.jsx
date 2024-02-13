import * as S from './Skeletons.styled'
import SkeletSizeTempl from '../SkeletSizeTempl/SkeletSizeTempl'
import sprite from '../../img/icon/sprite.svg'
import TitlePlayList from '../TitlePlayList/TitlePlayList'

export default function Skeletons() {
  return (
    <S.centerblockContent>
      <TitlePlayList />
      <S.ContentPlaylist>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <SkeletSizeTempl IamWidth="51px" IamHeight="51px" />
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <SkeletSizeTempl IamWidth="356px" IamHeight="19px" />
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <SkeletSizeTempl IamWidth="271px" IamHeight="19px" />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <SkeletSizeTempl IamWidth="305px" IamHeight="19px" />
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
