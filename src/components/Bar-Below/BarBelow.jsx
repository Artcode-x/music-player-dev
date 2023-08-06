/* eslint-disable jsx-a11y/media-has-caption */
// import { useEffect } from 'react'
import { useRef } from 'react'
import sprite from '../../img/icon/sprite.svg'
import RybkaForImport from '../Skeleton/skeleton-fish-import'
import * as S from './bar-below.styles'
import PlayersControls from '../PlayerControls/PlayerControls'

function RenderBar({ loading, keyItem, repeat, setRepeat }) {
  // const closeOrOpenBar = () => {}
  // useEffect(() => {
  //   closeOrOpenBar(keyItem)
  // }, [])
  // const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef(null)

  // const handleStart = () => {
  //   audioRef.current.play()
  //   setIsPlaying(true)
  // }

  // const handleStop = () => {
  //   audioRef.current.pause()
  //   setIsPlaying(false)
  // }

  // let letsPlayMusic = isPlaying ? handleStop : handleStart
  // useEffect(() => {
  //   letsPlayMusic = isPlaying ? handleStop : handleStart
  //   console.log(letsPlayMusic)
  // }, [isPlaying])

  // function todoClick() {
  //   letsPlayMusic()
  // }

  return keyItem !== '' ? (
    <>
      <audio key={keyItem.id} autoPlay ref={audioRef} loop={repeat}>
        <source src={keyItem.track_file} type="audio/mpeg" />
      </audio>

      <S.Bar>
        <S.BarContent>
          <S.BarPlayerProgress />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <PlayersControls
                repeat={repeat}
                setRepeat={setRepeat}
                audioRef={audioRef}
              />
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
    </>
  ) : null
}

export default RenderBar
