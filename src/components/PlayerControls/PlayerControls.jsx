import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './PlayerControls.style'
import sprite from '../../img/icon/sprite.svg'
import {
  addSetPause,
  addActiveTrack,
  addIdTrack,
  addShuffleTrack,
  addNextTrack,
  addShuffled,
  addPrevTrack,
} from '../../store/actions/creators/creators'

export default function PlayersControls({
  audioRef,
  repeat,
  setRepeat,
  isPlaying,
  setIsPlaying,
  // setKeyItem,
}) {
  // const [isPlaying, setIsPlaying] = useState(false)

  // состояние текущего трека - играет или нет
  // const activeTrack = useSelector(activeTrackSelector)

  const shuffled = useSelector((store) => store.tracks.shuffled)

  const shuffleTracks = useSelector((store) => store.tracks.shuffleTracks)

  const dispatch = useDispatch()

  const toPrevTrack = () => {
    dispatch(addSetPause(true)) // отобр пульсации иконки паузы/плей
    dispatch(addPrevTrack())
  }

  const audiocontrol = (text) => {
    switch (text) {
      case 'prev':
        toPrevTrack()
        setIsPlaying(false)
        break
      case 'play':
        audioRef.current.play()
        dispatch(addSetPause(true))

        setIsPlaying(false) // на основе стейта меняем иконку плей паузыы
        console.log('f')
        break
      case 'stop':
        audioRef.current.pause()
        dispatch(addSetPause(false)) // отправляем в стейт false чтобы остановилась анимация

        setIsPlaying(true)
        console.log('t')
        break
      case 'next':
        if (shuffled === 'buttonClickFirst') {
          if (shuffleTracks) {
            dispatch(addActiveTrack(shuffleTracks[0]))
          }

          dispatch(addIdTrack({ index: shuffleTracks[0].id }))

          dispatch(addShuffled(true))
          dispatch(addSetPause(true))
          setIsPlaying(false)
          return
        }
        if (shuffled === false) {
          dispatch(addSetPause(true))

          dispatch(addNextTrack())
        } else {
          dispatch(addSetPause(true))

          dispatch(addNextTrack())
        }
        setIsPlaying(false)
        break
      case 'repeat':
        setRepeat(!repeat)

        break
      case 'shuffle':
        // if (
        //   shufflePlayStop === true ||
        //   shufflePlayStop === 'buttonClickFirst'
        // ) {
        //   dispatch(addShuffleTrack(false))
        // } else {
        //   dispatch(addShuffled('buttonClickFirst'))

        //   const newShuffleTracks = allTracks.map((track) => track)
        //   newShuffleTracks.sort(() => Math.random() - 0.5)

        //   dispatch(addShuffleTrack(newShuffleTracks))
        // }
        dispatch(addShuffleTrack())
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
          <use
            xlinkHref={
              shuffled === false
                ? `${sprite}#icon-shuffle`
                : `${sprite}#icon-shuffleActive`
            }
          />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
