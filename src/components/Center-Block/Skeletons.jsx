import * as S from './center-block.styles'
import RybkaForImport from '../Skeleton/skeleton-fish-import'
import contentTitlePlayList from './Title-playlist'
import sprite from '../../img/icon/sprite.svg'
// export default const Skeletons = () => {
export default function Skeletons() {
  return (
    <S.centerblockContent>
      {contentTitlePlayList}
      <S.ContentPlaylist>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <RybkaForImport IamWidth="51px" IamHeight="51px" />
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <RybkaForImport IamWidth="356px" IamHeight="19px" />
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <RybkaForImport IamWidth="271px" IamHeight="19px" />
            </S.TrackAuthor>
            <S.TrackAlbum>
              <RybkaForImport IamWidth="305px" IamHeight="19px" />
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
