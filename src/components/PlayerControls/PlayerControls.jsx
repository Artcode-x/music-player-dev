import { useState } from 'react'
import * as S from './PlayerControls.style'
import sprite from '../../img/icon/sprite.svg'

export default function PlayersControls({ audioRef, repeat, setRepeat }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const toPrevTrack = () => {
    alert('предыдущий')
  }

  const toNextTrack = () => {
    alert('следующий')
  }

  const audiocontrol = (text) => {
    switch (text) {
      case 'prev':
        toPrevTrack()
        break
      case 'play':
        audioRef.current.play()
        setIsPlaying(false)
        break
      case 'stop':
        audioRef.current.pause()
        setIsPlaying(true)
        break
      case 'next':
        toNextTrack()
        break
      case 'repeat':
        setRepeat(!repeat)
        console.log(repeat)
        break
      case 'shuffle':
        alert('пока не реализовано')
        break
      default:
        break
    }
  }
  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev onClick={() => audiocontrol('prev')}>
        <S.PlayerBtnPrevSvg alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`} />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay
        onClick={() => audiocontrol(isPlaying ? 'play' : 'stop')}
      >
        <S.PlayerBtnPlaySvg alt="play">
          <use
            xlinkHref={
              isPlaying ? `${sprite}#icon-play` : `${sprite}#icon-pause`
            }
          />
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext onClick={() => audiocontrol('next')}>
        <S.PlayerBtnNextSvg alt="next">
          <use xlinkHref={`${sprite}#icon-next`} />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat onClick={() => audiocontrol('repeat')}>
        <S.PlayerBtnRepeatSvg alt="repeat">
          <use
            xlinkHref={
              repeat === false
                ? `${sprite}#icon-repeat`
                : `${sprite}#icon-repeatActive`
            }
          />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle onClick={() => audiocontrol('shuffle')}>
        <S.PlayerBtnShuffleSvg alt="shuffle">
          <use xlinkHref={`${sprite}#icon-shuffle`} />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
