// import { useEffect } from 'react'
import sprite from '../../img/icon/sprite.svg'
import RybkaForImport from '../Skeleton/skeleton-fish-import'
import * as S from './bar-below.styles'

function RenderBar({ loading, keyItem }) {
  // const closeOrOpenBar = () => {}
  // useEffect(() => {
  //   closeOrOpenBar(keyItem)
  // }, [])

  return keyItem !== '' ? (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref={`${sprite}#icon-prev`} />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref={`${sprite}#icon-play`} />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref={`${sprite}#icon-next`} />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref={`${sprite}#icon-repeat`} />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref={`${sprite}#icon-shuffle`} />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              {loading ? (
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <RybkaForImport IamWidth="51px" IamHeight="51px" />
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref={`${sprite}#icon-note`} />
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    <RybkaForImport IamWidth="59px" IamHeight="15px" />
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <RybkaForImport IamWidth="59px" IamHeight="15px" />
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              ) : (
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref={`${sprite}#icon-note`} />
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink href="http://">
                      {keyItem.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      {keyItem.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              )}

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref={`${sprite}#icon-like`} />
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref={`${sprite}#icon-dislike`} />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref={`${sprite}#icon-volume`} />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLineBtn type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  ) : null
}

export default RenderBar
