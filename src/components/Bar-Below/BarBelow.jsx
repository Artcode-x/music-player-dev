/* eslint-disable jsx-a11y/media-has-caption */

import { useRef } from 'react'

import sprite from '../../img/icon/sprite.svg'
import RybkaForImport from '../Skeleton/skeleton-fish-import'
import * as S from './bar-below.styles'
import PlayersControls from '../PlayerControls/PlayerControls'
import VolumeBar from '../VolumeBar/VolumeBar'
import ProgressBar from '../ProgressBar/progressBar'

function RenderBar({ loading, keyItem, repeat, setRepeat }) {
  const audioRef = useRef(null)

  // const [currentTime, setCurrentTime] = useState(0) // храним состояние воспроизводимого трека/времени

  // useEffect(() => {
  //   console.log(currentTime)
  //   if (audioRef !== null) {
  //     audioRef.current?.addEventListener('timeupdate', () => {
  //       setCurrentTime(audioRef.current?.currentTime)
  //     })
  //   }
  // }, [audioRef.current?.currentTime, audioRef])

  return keyItem !== '' ? (
    <>
      <audio key={keyItem.id} autoPlay ref={audioRef} loop={repeat}>
        <source src={keyItem.track_file} type="audio/mpeg" />
      </audio>

      <S.Bar>
        <S.BarContent>
          <ProgressBar audioRef={audioRef} />
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
            <VolumeBar audioRef={audioRef} />
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  ) : null
}

export default RenderBar
