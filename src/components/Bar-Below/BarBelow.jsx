// /* eslint-disable jsx-a11y/media-has-caption */

import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import sprite from '../../img/icon/sprite.svg'
import RybkaForImport from '../Skeleton/skeleton-fish-import'
import * as S from './bar-below.styles'
import PlayersControls from '../PlayerControls/PlayerControls'
import VolumeBar from '../VolumeBar/VolumeBar'
import ProgressBar from '../ProgressBar/progressBar'
import { addNextTrack } from '../../store/actions/creators/creators'

function RenderBar({ loading, repeat, setRepeat, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null)

  const activeTrack = useSelector((store) => store.tracks.activeTrack)
  const dispatch = useDispatch()
  return (
    <>
      <audio
        onEnded={() => dispatch(addNextTrack())}
        key={activeTrack.id}
        autoPlay
        ref={audioRef}
        loop={repeat}
      >
        <source src={activeTrack.track_file} type="audio/mpeg" />
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
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                //  setKeyItem={setKeyItem}
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
                        {activeTrack.name}
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">
                        {activeTrack.author}
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
  )
}

export default RenderBar
